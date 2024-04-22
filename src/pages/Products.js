import React from 'react'
import Meta from '../component/Meta'
import { BreadCrumb } from '../component/BreadCrumb'
export const Products = () => {
  return (
    <>
        <section className="">
            <div className="relative isolate overflow-hidden py-24 md:py-36 sm:py-32 ">
                <img src="/images/img3.jpg" alt="" className="absolute inset-0 brightness-50 -z-10 h-full w-full object-cover object-right md:object-center"/>
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
        <section className="bg-zinc-200">
            <div className="w-5/6 mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    <div className="bg-white  flex justify-center">
                        <div>
                            <div className="my-8">
                                <img src="/images/chicken.png" className="h-22 w-22" alt="" />
                            </div>
                            <h4>Whole Chicken</h4>
                            <button className="bg-green-950 text-white rounded-xl w-3/4">$8</button>
                        </div>
                    </div>
                    <div className="bg-zinc-100 flex justify-center">
                        <div>
                            <h3>product name</h3>
                            <h4>Product price</h4>
                            <p>Product description</p>
                            <button>add to cart</button>
                        </div>
                    </div>
                    <div className="bg-zinc-100 flex justify-center">
                        <div>
                            <h3>product name</h3>
                            <h4>Product price</h4>
                            <p>Product description</p>
                            <button>add to cart</button>
                        </div>
                    </div>
                    <div className="bg-zinc-100 flex justify-center">
                        <div>
                            <h3>product name</h3>
                            <h4>Product price</h4>
                            <p>Product description</p>
                            <button>add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}
