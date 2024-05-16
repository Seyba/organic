import React, {useState, useEffect} from "react";
import { Carousel } from 'antd';
import { Link } from 'react-router-dom'
export const SoumppouCarousel = () => {
    
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
                            <h3 className="text-2xl md:text-6xl font-bold">Halal and quality chicken meat</h3>
                            <p className="md:text-xl text-lg leading-9 font-semibold">Organic eggs source from great quality poultry</p>
                        </div>
                        <div className="flex justify-center mt-3">
                            <Link to="/products">
                                <button className="border border-1 rounded-3xl py-2 md:py-3 px-4 md:px-10 mr-1 hover:bg-slate-100 hover:text-slate-900">Shop Now</button>
                            </Link>
                            <Link to="/contact">
                                <button className="border border-1 rounded-3xl py-2 md:py-3 px-4 md:px-10 ml-1 hover:bg-slate-100 hover:text-slate-900">Contact Us</button>
                            </Link>
                        </div>
                    </div>
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
                            <Link to="/products">
                                <button className="border border-1 rounded-3xl py-2 md:py-3 px-4 md:px-10 mr-1 hover:bg-slate-100 hover:text-slate-900">Shop Now</button>
                            </Link>
                            <Link to="/contact">
                                <button className="border border-1 rounded-3xl py-2 md:py-3 px-4 md:px-10 ml-1 hover:bg-slate-100 hover:text-slate-900">Contact Us</button>
                            </Link>                           
                        </div>
                    </div>                    
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
                            <Link to="/products">
                                <button className="border border-1 rounded-3xl py-2 md:py-3 px-4 md:px-10 mr-1 hover:bg-slate-100 hover:text-slate-900">
                                    Shop Now
                                </button>
                            </Link>
                            <Link to="/contact">
                                <button className="border border-1 rounded-3xl py-2 md:py-3 px-4 md:px-10 ml-1 hover:bg-slate-100 hover:text-slate-900">
                                    Contact Us
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </Carousel>
    )
}

