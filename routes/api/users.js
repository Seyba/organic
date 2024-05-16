const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn')
//const isAdmin = require('../../config/isAdmin')


router.post('/', usersCtrl.create);
router.post('/login', usersCtrl.login);
router.delete('/:id', ensureLoggedIn, usersCtrl.unSubscribe)
router.get('/:id', usersCtrl.getSingleUser)
router.put('/:id', usersCtrl.updateUser)
router.put('/unblock-user/:id', ensureLoggedIn, usersCtrl.unblockUser)
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);
router.get('/',  usersCtrl.getUsers)

//router.post('/admin-login', usersCtrl.adminLogin)
// router.post('/cart', ensureLoggedIn, usersCtrl.userCart)
// router.post('/cart/cash-order', ensureLoggedIn, usersCtrl.createOrder)
// router.post('/cart/apply-coupon', ensureLoggedIn, usersCtrl.applyCoupon)
// router.get('/cart', ensureLoggedIn, usersCtrl.getUserCart)
// router.get('/get-orders', ensureLoggedIn, usersCtrl.getOrders)
// router.get('/wishlist', ensureLoggedIn, usersCtrl.getWishList)
// router.put('/block-user/:id', ensureLoggedIn, usersCtrl.blockUser)
// router.put('/save-address', ensureLoggedIn, usersCtrl.saveAddress)
// router.delete('/empty-cart', ensureLoggedIn, usersCtrl.emptyCart)

module.exports = router;