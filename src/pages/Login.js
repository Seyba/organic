import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div>
        <section className="relative isolate overflow-hidden bg-zinc-900 px-4 md:px-0 py-24 sm:py-32">
            <img
                src="/images/brussel-sprouts.jpg"
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
            />
            <div className="flex">
                <form className="py-10 px-4 mx-auto w-96 bg-white border border-zinc-300">
                    <div className="flex mb-4">
                        <h2 className="md:text-3xl text-2xl mb-4 font-light leading-10">Log In </h2>
                        <div className="ml-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#227456" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"/>
                                <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
                            </svg>
                        </div>
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
                    <div className='my-4'>
                        <button className="green-one hover:bg-green-900 text-white w-full py-2 text-lg font-semibold">Log In </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 my-4">
                        <div>
                            <Link className="tracking-tight border-r border-gray-900 md:pr-8 pr-2 py-2">Forgot My Username</Link>
                        </div>
                        <div>
                            <Link className="md:pl-8 pl-2 tracking-tight">Forgot My Password</Link>
                        </div>
                    </div>
                    <div className="my-4 text-center">
                        <Link className="text-base font-extralight">Create An Account</Link>
                    </div>
                    
                </form>
            </div>
        </section>
    </div>
  )
}
