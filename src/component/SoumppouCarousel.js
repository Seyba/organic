import React, {useState, useEffect} from "react";
import { Carousel } from 'antd';
const img1 = process.env.PUBLIC_URL + '/images/intense-chicken-stare.jpg'

export const SoumppouCarousel = () => {
    const data = [
       {
            id: 'a2c', 
            imgSr:"", 
            msg:"It's hard to do really good job on anything you don't think about in the shower.", 
            customer:"John Smith",
            title: "Client"
        } ,
        {
            id: 'b2c', 
            imgSr:"", 
            msg:"Your most unhappy customers are your greatest source of learning.", 
            customer:"Jane Doe",
            title: "User"
        } ,
        {
            id: 'bkc', 
            imgSr:"", 
            msg:"Your reputation is more important than your paycheck, and your integrity.", 
            customer:"John Doe",
            title: "Client"
        }
    ]
    const antContent = {
        height: '400px',
        padding: '50px 0',
        color: '#fff',
        lineHeight: '16px',
        textAlign: 'center',
        background: {img1}
    }
    return(
        <Carousel autoplay > 
            <div>
                <div className="relative isolate overflow-hidden py-24 md:py-64 sm:py-32">
                    <img 
                        src="/images/intense-chicken-stare.jpg" 
                        alt=""
                        className="absolute inset-0 brightness-50 -z-10 h-full w-full object-cover object-right md:object-center"
                    />
                    <div className="text-white text-center">
                        <div>
                            <p className="text-xl tracking-tight font-semibold">100% organic foods in the market</p>
                        </div>
                        <div className="py-6">
                            <h3 className="text-2xl md:text-6xl font-bold">Halal Meat Source and Vegetable</h3>
                            <p className="md:text-xl text-lg leading-9 font-semibold">Fresh, Organic and Seasonal Food for a healthy lifestyle</p>
                        </div>
                        <div className="flex justify-center mt-3">
                            <button className="border border-1 rounded-3xl py-2 md:py-3 px-4 md:px-10 mr-1 hover:bg-slate-100 hover:text-slate-900">Shop Now</button>
                            <button className="border border-1 rounded-3xl py-2 md:py-3 px-4 md:px-10 ml-1 hover:bg-slate-100 hover:text-slate-900">Contact Us</button>
                        </div>
                    </div>

                    {/* <div>
                        <h4 className="md:text-4xl md:px-20 lg:px-64 xl:px-96 px-4 text-lg font-normal ">❝{data[0].msg}</h4>
                    </div>
                    <div className="mt-4">
                        <p className="md:text-lg text-sm text-zinc-500 font-medium tracking-wide">{data[0].customer}</p>
                        <p className="md:text-sm text-xs text-zinc-500 font-bold tracking-tighter">{data[0].title}</p>
                    </div> */}
                </div>
            </div>
            <div>
                <div className="relative isolate overflow-hidden py-24 md:py-64 sm:py-32">
                    <div>
                        <img 
                            src="/images/bunch-of-tomatoes.jpg" 
                            alt=""
                            className="absolute inset-0 brightness-50 -z-10 h-full w-full object-cover object-right md:object-center"
                        />
                    </div>

                    <div className="text-white text-center">
                        <div>
                            <p className="text-xl tracking-tight font-semibold">100% organic foods in the market</p>
                        </div>
                        <div className="py-6">
                            <h3 className="text-2xl md:text-6xl font-bold">Halal Meat Source and Vegetable</h3>
                            <p className="md:text-xl text-lg leading-9 font-semibold">Fresh, Organic and Seasonal Food for a healthy lifestyle</p>
                        </div>
                        <div className="flex justify-center mt-3">
                            <button className="border border-1 rounded-3xl py-2 md:py-3 px-4 md:px-10 mr-1 hover:bg-slate-100 hover:text-slate-900">Shop Now</button>
                            <button className="border border-1 rounded-3xl py-2 md:py-3 px-4 md:px-10 ml-1 hover:bg-slate-100 hover:text-slate-900">Contact Us</button>
                        </div>
                    </div>
                    {/* <div className="">
                        <h4 className="md:text-4xl md:px-20 lg:px-64 xl:px-96 px-4 text-lg font-normal">❝{data[1].msg}</h4>
                    </div>
                    <div className="mt-4">
                        <p className="md:text-lg text-sm text-zinc-500 font-medium tracking-wide">{data[1].customer}</p>
                        <p className="md:text-sm text-xs text-zinc-500 font-bold tracking-tighter">{data[1].title}</p>
                    </div> */}
                    
                </div>
            </div>
            <div>
                <div className="relative isolate overflow-hidden py-24 md:py-64 sm:py-32">
                    <div>
                        <img 
                            src="/images/bg.jpeg" 
                            alt=""
                            className="absolute inset-0 brightness-50 -z-10 h-full w-full object-cover object-right md:object-center"
                        />
                    </div>

                    <div className="text-white text-center">
                        <div>
                            <p className="text-xl tracking-tight font-semibold">100% organic foods in the market</p>
                        </div>
                        <div className="py-6">
                            <h3 className="text-2xl md:text-6xl font-bold">Halal Meat Source and Vegetable</h3>
                            <p className="md:text-xl text-lg leading-9 font-semibold">Fresh, Organic and Seasonal Food for a healthy lifestyle</p>
                        </div>
                        <div className="flex justify-center mt-3">
                            <button className="border border-1 rounded-3xl py-2 md:py-3 px-4 md:px-10 mr-1 hover:bg-slate-100 hover:text-slate-900">Shop Now</button>
                            <button className="border border-1 rounded-3xl py-2 md:py-3 px-4 md:px-10 ml-1 hover:bg-slate-100 hover:text-slate-900">Contact Us</button>
                        </div>
                    </div>
                    {/* <div>
                        <h4 className="md:text-4xl text-white md:px-20 lg:px-64 xl:px-96 px-4 text-lg font-normal ">❝{data[2].msg}</h4>
                    </div>
                    <button className="text-white">
                        shop now
                    </button>
                    <div className="mt-4">
                        <p className="md:text-lg text-sm text-zinc-500 font-medium tracking-wide">{data[2].customer}</p>
                        <p className="md:text-sm text-xs text-zinc-500 font-bold tracking-tighter">{data[2].title}</p>
                    </div> */}
                </div>
            </div>
            
        </Carousel>
    )
}

