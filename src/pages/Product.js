import React from 'react'
import { Link } from 'react-router-dom'

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
            <div>
                <img src="/images/freshCorn.jpg" alt=""/>
            </div>
            <div className="px-4 ">
                <h3 className="text-2xl green-950 font-bold">Fresh Corn</h3>
                <h3 className="text-xl font-semibold text-green-950 py-4">$ 18.00 USD</h3>
                <p className="text-lg font-thin">
                    Sweet corn is a variety of maize grown for human consumption with high sugar content. 
                    Sweet corn is the result of a naturally occurring recessive mutation in the genes which control the conversion of sugar to starch.
                </p>
                <form>
                    <div>
                        <label>Quantity</label>
                        <input 
                            type="number"
                            name="quantity"
                            className="block w-1/4 flex-1 rounded-md border-0 bg-zinc-100 py-4 pl-3 text-gray-900 placeholder:text-gray-400 placeholder:font-thin focus:ring-1 focus:ring-green-200 sm:text-sm sm:leading-6"
                        />
                        <button className="bg-green-950 w-1/4 text-white">
                            <Link to="/">
                                Add To Cart
                            </Link>
                        </button>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
  )
}
