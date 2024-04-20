import React from 'react'
import { Link } from 'react-router-dom'

export const Signup = () => {
  return (
    <div>
        <section className="relative isolate overflow-hidden bg-zinc-900 px-4 md:px-0 py-24 sm:py-32">
            <img
                src="/images/brussel-sprouts.jpg"
                alt="brussel sprouts"
                className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
            />
            <div className="flex">
                <form className="py-10 px-4 mx-auto w-96 bg-white border border-zinc-300">
                    <div className="flex mb-4">
                        <h2 className="md:text-3xl text-2xl mb-4 font-light leading-10">Sign Up </h2>
                        <div className="ml-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="133f2f" className="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                            </svg>
                        </div>
                    </div>
                    <label className="text-xl font-extralight tracking-wide">First Name</label>
                    <div className="my-3">
                        <input 
                        type="text"
                        name="firstname"
                        autoComplete="firstname"
                        className="block w-full flex-1 rounded-sm border-0 bg-zinc-100 py-3 pl-3 text-gray-900 placeholder:font-thin placeholder:text-gray-400 focus:ring-1 focus:ring-green-200 sm:text-sm sm:leading-6"
                        placeholder="John"
                        />
                    </div>
                    <label className="text-xl font-extralight tracking-wide">Last Name</label>
                    <div className="my-3">
                        <input 
                        type="text"
                        name="lastname"
                        autoComplete="lasttname"
                        className="block w-full flex-1 rounded-sm border-0 bg-zinc-100 py-3 pl-3 text-gray-900 placeholder:font-thin placeholder:text-gray-400 focus:ring-1 focus:ring-green-200 sm:text-sm sm:leading-6"
                        placeholder="Doe"
                        />
                    </div>
                    <label className="text-xl font-extralight tracking-wide">Email</label>
                    <div className="my-3">
                        <input 
                        type="email"
                        name="email"
                        autoComplete="email"
                        className="block w-full flex-1 rounded-sm border-0 bg-zinc-100 py-3 pl-3 text-gray-900 placeholder:font-thin placeholder:text-gray-400 focus:ring-1 focus:ring-green-200 sm:text-sm sm:leading-6"
                        placeholder="JohnDoe@gmail.com"
                        />
                    </div>
                    <label className="text-xl font-extralight tracking-wide">Password</label>
                    <div className="my-3">
                        <input 
                        type="password"
                        name="password"
                        autoComplete="password"
                        className="block w-full flex-1 rounded-sm border-0 bg-zinc-100 py-3 pl-3 text-gray-900 placeholder:font-thin placeholder:text-gray-400 focus:ring-1 focus:ring-green-200 sm:text-sm sm:leading-6"
                        placeholder="Enter password"
                        />
                    </div>
                    <label className="text-xl font-extralight tracking-wide">Confirm Password</label>
                    <div className="my-3">
                        <input 
                        type="password"
                        name="password"
                        autoComplete="password"
                        className="block w-full flex-1 rounded-sm border-0 bg-zinc-100 py-3 pl-3 text-gray-900 placeholder:font-thin placeholder:text-gray-400 focus:ring-1 focus:ring-green-200 sm:text-sm sm:leading-6"
                        placeholder="Confirm password"
                        />
                    </div>
                    <div className='my-4'>
                        <button className="green-one hover:bg-green-900 text-white w-full py-2 text-lg font-semibold">Create Account</button>
                    </div>
                    <div className="my-4 text-center">
                        <Link to="/login" className="text-base font-extralight">Already have An Account ?</Link>
                    </div>
                    
                </form>
            </div>
        </section>
    </div>
  )
}
