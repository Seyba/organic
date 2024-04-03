import React from 'react'
import Meta from '../component/Meta'
import { BreadCrumb } from '../component/BreadCrumb'
import { SmoothScrolling } from '../component/SmoothScrolling'
import Marquee from 'react-fast-marquee'
import SeyModal from '../component/SeyModal'

export const About = () => {
  return (
    <>
      <div className="">
        <div className="relative isolate overflow-hidden py-24 md:py-36 sm:py-32 ">
          <img src="/images/img6.jpg" alt="" className="absolute inset-0 brightness-50 -z-10 h-full w-full object-cover object-right md:object-center"/>
          <div className="py-2">
            <h2 className="text-5xl text-white font-semibold text-center py-2 animate-fade-down animate-once animate-duration-800 animate-ease-in-out">About Us</h2>
          </div>
          <div className="flex justify-center">
            <Meta title={"About"}/>
          </div>
          <div className="flex justify-center">
            <BreadCrumb title="About"/>
          </div>
          
        </div>    
      </div>
      <div>
        <div>
          <h2 className="text-center">About Page</h2>
        </div>
      </div>
    </>
  )
}
