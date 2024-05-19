import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CustomInput } from '../component/CustomInput'
import { login} from '../features/auth/authSlice'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'


export const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    let schema = Yup.object().shape({
        email: Yup.string().email('Must enter valid email'),
        password: Yup.string().required()
    })

    const formik = useFormik({
        initialValues: {
            email: '',
            password:''
        },
        validationSchema: schema,
        onSubmit: (values) => {
            //console.log(values)
            dispatch(login(values))
            alert(JSON.stringify(values, null, 2))
        }
    })

    const {user, isLoading,isError, isSuccess, message } = useSelector((state) => state.auth )

    useEffect(() => {
        if(isSuccess) {
          navigate('')
        } else {
          navigate("")
        }
      },[user, isLoading,isError, isSuccess, message]
    )

  return (
    <div>
        <section className="relative isolate overflow-hidden bg-zinc-900 px-4 md:px-0 py-24 sm:py-32">
            <img
                src="/images/brussel-sprouts.jpg"
                alt="brussel sprouts"
                className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
            />
            <div className="flex">
                <form 
                    className="py-10 px-4 mx-auto w-96 bg-white border border-zinc-300"
                    onSubmit={formik.handleSubmit}
                >
                    <div className="flex mb-4">
                        <h2 className="md:text-3xl text-2xl mb-4 font-light leading-10">Log In </h2>
                        <div className="ml-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#133f2f" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"/>
                                <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
                            </svg>
                        </div>
                    </div>
                    <div className="text-red-200 text-center">
                        {message.message === 'Rejected' ? "You are not an Admin":""}
                    </div>
                    <label className="text-xl font-extralight tracking-wide">Email Address</label>
                    <div className="my-3">
                        <CustomInput 
                            type="email"
                            name="email"
                            autoComplete="email"
                            onChg={formik.handleChange}
                            val={formik.values.email}
                            className="block w-full flex-1 rounded-sm border-0 bg-zinc-100 py-3 pl-3 text-gray-900 placeholder:font-thin placeholder:text-gray-400 focus:ring-1 focus:ring-green-200 sm:text-sm sm:leading-6"
                            placeholder="JohnDoe@gmail.com"
                        />
                    </div>
                    <div className="text-red-600 text-xs font-bold">
                        {
                            formik.touched.email && formik.errors.email? (
                                <div>{formik.errors.email}</div>
                            ): null
                        }
                    </div>
                    <label className="text-xl font-extralight tracking-wide">Password</label>
                    <div className="my-3">
                        <CustomInput 
                            type="password"
                            name="password"
                            onChg={formik.handleChange('password')}
                            val={formik.values.password}
                            className="block w-full flex-1 rounded-sm border-0 bg-zinc-100 py-3 pl-3 text-gray-900 placeholder:font-thin placeholder:text-gray-400 focus:ring-1 focus:ring-green-200 sm:text-sm sm:leading-6"
                            placeholder="Enter password"
                        />
                    </div>
                    <div className="text-red-600 text-xs font-bold">
                        {
                            formik.touched.password && formik.errors.password? (
                                <div>{formik.errors.password}</div>
                            ): null
                        }
                    </div>
                    <div className='my-4'>
                        <button 
                            className="green-one hover:bg-green-900 text-white w-full py-2 text-lg font-semibold"
                            type="submit"
                        >
                            Log In 
                        </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 my-4 divide-zinc-500 divide-x">
                        <div className=" flex justify-center my-2">
                            <Link className="font-semibold sm:font-medium ">Forgot My Username</Link>
                        </div>
                        <div className="flex justify-center my-2">
                            <Link className="font-semibold sm:font-medium">Forgot My Password</Link> 
                        </div>
                    </div>
                    <div className="my-4 text-center">
                        <Link to="/signup" className="text-base font-extralight">Create An Account</Link>
                    </div>
                    
                </form>
            </div>
        </section>
    </div>
  )
}
