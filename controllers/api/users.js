const User = require('../../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')
const { generateNewToken } = require('../../config/refreshToken')
const { generateToken } = require('../../config/jwtToken')
const { validateMongoDbId } = require('../../utils/validateMongodbId')
// const Cart = require('../../models/cartModel')
// const Coupon = require('../../models/couponModel')
// const Order = require('../../models/orderModel')
// const Product = require('../../models/productModel')
const uniqid = require('uniqid')


const createUser = asyncHandler(
    async (req, res) => {
        const email = req.body.email
        const user = await User.find({email})
    
        if(!user.length){
            //* Create one
            const newUser = User.create(req.body)
            res.json(newUser)
        } else {
            //* User already exist
            throw new Error(
                "An Account is Associated With this Email!!"
            )
            // res.json({
            //     msg: "An Account is Associated With this Email!!",
            //     success: false
            // })
        }
    }
)

const logUser = asyncHandler(
    async (req, res) => {
        const { email, password} = req.body

        //* check for user
        const user = await User.findOne({email})
        const match = await bcrypt.compare(password, user.password)

        if(!user) throw new Error("No User Found!")

        if(user && match){
            const refreshToken = await generateNewToken(user?._id)
            const updateUser = await User.findByIdAndUpdate(
                user._id, 
                {refreshToken: refreshToken}, 
                {new: true}
            )

            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                maxAge: 72 * 60 * 60 * 1000
            })
            res.json({
                _id: user?._id,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                mobile: user.mobile,
                token: generateToken(user?._id)
            })
        } else {
            throw new Error('Invalid Credentials')
        }
    }
)

const adminLogin = asyncHandler(
    async(req, res)=> {
        const { email, password} = req.body

        //* check for user
        const admin = await User.findOne({email})
        const match = await bcrypt.compare(password, admin.password)

        if(admin.role !== 'admin') throw new Error('Not Authorized!')

        if(admin && match){
            const refreshToken = await generateNewToken(admin?._id)
            const updateUser = await User.findByIdAndUpdate(
                admin._id, 
                {refreshToken: refreshToken}, 
                {new: true}
            )

            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                maxAge: 72 * 60 * 60 * 1000
            })
            res.json({
                _id: admin?._id,
                firstname: admin.firstname,
                lastname: admin.lastname,
                email: admin.email,
                mobile: admin.mobile,
                token: generateToken(admin?._id)
            })
        } else {
            throw new Error('Invalid Credentials')
        }
    }
)


//* Log Out the User
const logOut = asyncHandler(
    async(req, res) => {
        const cookie = req.cookies
        if(!cookie?.refreshToken) throw new Error('No new Token in Cookies!')

        const refreshToken = cookie.refreshToken
        const user = await User.findOne({refreshToken})
        
        if(!user) {
            res.clearCookie("resfreshToken", {
                httpOnly: true,
                secure: true
            })
            return res.sendStatus(204)//* Forbidden
        }
        
        await User.findOneAndUpdate({refreshToken}, {
            refreshToken: ""
        })

        res.clearCookie("resfreshToken", {
            httpOnly: true,
            secure: true
        })

        return res.sendStatus(204)//* Forbidden
    }
)

//* Read all the users
const getUsers = asyncHandler(
    async (req, res) => {
        try {
            const users = await User.find()
            res.json(users)
        } catch (error) {
            throw new Error(error)
        }
    }
)

//* Read a single user
const getUser = asyncHandler(
    async (req, res) => {
        const { id } = req.params
        try {
            const user = await User.findById(id)
            res.json(user)
        }catch(error){
            throw new Error(error)
        }
    }
)

//* Update user
const updateUser = asyncHandler(
    async(req, res) => {
        const {_id} = req.user
        validateMongoDbId(_id)
        try{
            const findUser = await User.findByIdAndUpdate(_id, req.body, {new: true})
            res.json(findUser)
        }catch(e){
            throw new Error(e)
        }
    }
)

//* Delete user
const deleteUser = asyncHandler(
    async(req, res) => {
        const {id} = req.params
        validateMongoDbId(id)
        try{
            const user = await User.findByIdAndDelete(id)
            res.json(user)
        }catch(e){
            throw new Error(e)
        }
    }
)

//* Block User
const blockUser = asyncHandler(
    async(req, res) => {
        const { id } = req.params
        validateMongoDbId(id)
        try {
            const userBlocked = await User.findByIdAndUpdate(id, {isBlocked: true}, {new: true})
            res.json({
                message: 'User is Blocked!'
            })
        } catch (error) {
            throw new Error(error)
        }
    }
)

//* Unblock User
const unBlockUser = asyncHandler(
    async(req, res) => {
        const { id } = req.params
        validateMongoDbId(id)
        try {
            const userUnlocked = await User.findByIdAndUpdate(id, {isBlocked: false}, {new: true})
            res.json({
                message: 'User is Unblocked!'
            })
        } catch (error) {
            throw new Error(error)
        }
    }
)

//* Refresh User Token
const handleTokenRefresh = asyncHandler(
    async (req, res) => {
        const cookie = req.cookies
        if(!cookie?.refreshToken) throw new Error("No new Token in Cookies!")
        const refreshToken = cookie.refreshToken
        const user = await User.findOne({refreshToken})

        if(!user) throw new Error("No new token found in DB!")

        jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
            if(err || user.id !== decoded.id) {
                throw new Error("Something is wrong with the new token.")
            }
            const accessToken = generateToken(user?._id)
            res.json({accessToken})
        })
    }
)

const updatePassword = asyncHandler(
    async(req, res) => {
        const { _id } = req.user
        const {password} = req.body
        validateMongoDbId(_id)

        const user = await User.findById(_id)

        if(password) {
            user.password = password
            const updatedPassword = await user.save()
            res.json(updatedPassword)
        } else {
            res.json(user)
        }
    }
)

// const forgotPasswordToken = asyncHandler(
//     async(req, res) => {
//         const { email } = req.body
//         const user = await User.findOne({email})

//         if(!user) throw new Error('User not found!!')

//         try {
//             const token = await user.createPasswordResetToken()
//             user.save()
//             const resetURL = `
//                 Hi, Please follow this link to reset your password. 
//                 This link is valid for 10 minutes.
//                 <a href='http://localhost:4000/api/user/reset-password/${token}'>
//                     Click here
//                 </a>`
//             const data = {
//                 to: email,
//                 text: 'Hello, User!',
//                 subject: "Forgot Password Link",
//                 html: resetURL
//             }
//             sendEmail(data)
//             res.json(token)
            
//         } catch(error){
//             throw new Error(error)
//         }
//     }
// )


// const resetPassword = asyncHandler(
//     async(req, res) => {
//         const { password } = req.body
//         const { token } = req.params
        
//         const hashedToken = crypto.createHash("sha256").update(token).digest("hex")
        
//         const user = await User.findOne({
//             passwordResetToken: hashedToken,
//             passwordResetExpires: {$gt: Date.now()}
//         })

//         //console.log(user)

//         if(!user){
//             throw new Error("Token Expired, please try again later.")
//         } 

//         user.password = password
//         user.passwordResetToken = undefined
//         user.passwordResetExpires = undefined

//         await user.save()

//         res.json(user)
//     }
// )

//* List All Products Added as wish list
// const getWishList = asyncHandler(

//     async(req, res) => {
//         const { _id } = req.user
//         try {
//             const user = await User.findById(_id).populate("wishlist")
//             res.json(user)
//         } catch (error) {
//             throw new Error(error)
//         }
//     }
// )
//* Helper function to create jwt token
function createJWT(user) {return jwt.sign({ user }, process.env.SECRET, { expiresIn: '24h' })}

module.exports = {
    adminLogin, 
    createUser,
    deleteUser,
    unBlockUser,
    handleTokenRefresh,
    logUser,
    logOut,
    getUsers,
    getUser,
    blockUser,
    updateUser
    
}