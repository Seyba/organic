import React from 'react'
import { Link } from 'react-router-dom'
import ReactStars from "react-rating-stars-component"


export const Product = () => {
    const data = [
        {id: '13v', title:'corn', description:'kdlskdjflsdfkj dlkjflsd', price: 30},
        {id: '3v3', title:'apple', description:'kdlskdjflsdfkj dlkjflsd', price: 70},
        {id: 'x9f', title:'orange', description:'kdlskdjflsdfkj dlkjflsd', price: 3},
        {id: '3mr', title:'pineapple', description:'kdlskdjflsdfkj dlkjflsd', price: 40},
    ]
  return (
    <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <div className="">
                <img src="/images/freshCorn.jpg" alt=""/>
            </div>
            <div className="px-4 flex items-center">
                <div>
                    <h3 className="text-3xl green-950 py-4 font-bold">Fresh Corn</h3>
                    <ReactStars 
                        count={5} 
                        edit={false}
                        size={24} 
                        activeColor="#ffd100"
                        value={5}
                    />
                    <h3 className="text-xl font-semibold text-green-950 py-4">$ 18.00 USD</h3>
                    <p className="text-lg font-thin py-2 leading-10">
                        Sweet corn is a variety of maize grown for human consumption with high sugar content. 
                        Sweet corn is the result of a naturally occurring recessive mutation in the genes which control the conversion of sugar to starch.
                    </p>
                    <form>
                        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                            <div className="w-full flex items-center">
                                <div>
                                    <label className="text-2xl text-green-950 font-semibold">Quantity:</label>
                                </div>
                                <div className="ml-4">
                                    <input 
                                        type="text"
                                        name="quantity"
                                        className="block w-2/4 rounded-md border-0 bg-zinc-100 py-4 p-4 text-gray-900 placeholder:text-gray-400 placeholder:font-thin  focus:ring-1 focus:ring-green-200 text-xl"
                                    />
                                </div>
                                
                            </div>
                            <div>
                                <button className="bg-green-950 w-1/4 text-white">
                                    <Link to="/">
                                        Add To Cart
                                    </Link>
                                </button>
                            </div>
                            
                            
                        </div> */}
                        <div className="flex items-center flex-wrap py-8">
                            <div className="mr-10">
                                <label className="text-2xl text-green-950 font-semibold">Quantity :</label>
                            </div>
                            <div className="my-2">
                                <input 
                                    type="number"
                                    name="quantity"
                                    placeholder="1"
                                    className="w-2/4 rounded-md border-0 bg-zinc-100 py-4 p-4 text-gray-900 placeholder:text-gray-400 placeholder:font-thin  focus:ring-1 focus:ring-green-200 text-xl"
                                />
                            </div>
                            <div className="flex items-center  bg-green-950 hover:bg-green-900 px-10 py-4 rounded-md text-xl text-white">
                                <button >
                                    <Link to="/">
                                        Add To Cart
                                    </Link>
                                </button>
                                <div className="ml-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>
                            </div>

                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
