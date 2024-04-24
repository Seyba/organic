import React from 'react'
import Meta from '../component/Meta'
import { BreadCrumb } from '../component/BreadCrumb'
import { Link } from 'react-router-dom'
export const Products = () => {
  return (
    <>
        <section className="">
            <div className="relative isolate overflow-hidden py-24 md:py-36 sm:py-32 ">
                <img src="/images/img4.jpg" alt="" className="absolute inset-0 brightness-50 -z-10 h-full w-full object-cover object-right md:object-center"/>
                <div className="py-2">
                    <h2 className="text-5xl text-white font-semibold text-center py-2 animate-fade-down animate-once animate-duration-800 animate-ease-in-out">Shop</h2>
                </div>
                <div className="flex justify-center">
                    <Meta title={"Products"}/>
                </div>
                <div className="flex justify-center">
                    <BreadCrumb title="Products"/>
                </div>
            </div>    
        </section>
        <section className="bg-zinc-100 py-12">
            <div className="w-5/6 mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white relative p-4 flex justify-center">
                        <div>
                            <div className="flex justify-between">
                                <div className="">
                                    <div className="">
                                        <Link to="/">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000000" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                            </svg>
                                        </Link>
                                    </div>    
                                </div>
                                <div className="relative ">
                                    <div className="">
                                        <Link to="/">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000000" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                            </svg>
                                        </Link>
                                    </div>                                    
                                </div>
                            </div>
                            <div className="w-2/6 my-16  mx-auto">
                                <img src="/images/chicken.png" className="" alt="" />
                            </div>
                            <h4 className="text-2xl font-semibold text-center mb-4">Whole Chicken</h4>
                            <div className="mt-4 text-xl font-bold mx-auto rounded-full text-center w-1/4">
                                <h3 >$15</h3>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-4 flex justify-center">
                        <div>
                            <div className="flex justify-between">
                                <div className="">
                                    <Link to="/">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000000" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                        </svg>
                                    </Link>
                                </div>
                                <div className="">
                                    <Link to="/">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000000" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className="w-2/6 my-16  mx-auto">
                                <img src="/images/freshOkra.png" className="" alt="" />
                            </div>
                            <h4 className="text-2xl font-semibold text-center mb-4">Fresh Okra</h4>
                            <div className="mt-4 text-xl font-bold mx-auto  text-center w-1/4">
                                <h3 >$8</h3>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-4 flex justify-center">
                        <div>
                            <div className="flex justify-between">
                                <div className="">
                                    <Link to="/">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000000" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                        </svg>
                                    </Link>
                                </div>
                                <div className="">
                                    <Link to="/">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000000" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className="w-2/6 my-16  mx-auto">
                                <img src="/images/lambChops.png" className="" alt="" />
                            </div>
                            <h4 className="text-2xl font-semibold text-center mb-4">Lamb Chops</h4>
                            <div className="mt-4 text-xl font-bold mx-auto text-center w-1/4">
                                <h3 >$20</h3>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-4 flex justify-center">
                        <div>
                            <div className="flex justify-between">
                                <div className="">
                                    <Link to="/">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000000" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                        </svg>
                                    </Link>
                                </div>
                                <div className="">
                                    <Link to="/">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000000" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className="w-2/6 my-16  mx-auto">
                                <img src="/images/bitterTomato.png" className="" alt="" />
                            </div>
                            <h4 className="text-2xl font-semibold text-center mb-4">African Eggplant</h4>
                            <div className="mt-4 text-xl font-bold mx-auto py-1 text-center w-1/4">
                                <h3 >$5</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}
