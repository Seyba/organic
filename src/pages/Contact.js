import React from 'react'
import Meta from '../component/Meta'
import { BreadCrumb } from '../component/BreadCrumb'
import { ContactForm } from '../component/ContactForm'
import { ContactPartial } from '../component/ContactPartial'
import { SmoothScrolling } from '../component/SmoothScrolling'

export const Contact = () => {
  return (
    <>
      <div className="">
        <div className="relative isolate overflow-hidden py-24 md:py-36 sm:py-32 ">
          <img src="/images/img3.jpg" alt="" className="absolute inset-0 brightness-50 -z-10 h-full w-full object-cover object-right md:object-center"/>
          <div className="py-2">
            <h2 className="text-5xl text-white font-semibold text-center py-2 animate-fade-down animate-once animate-duration-800 animate-ease-in-out">Contact Us</h2>
          </div>
          <div className="flex justify-center">
            <Meta title={"Contact"}/>
          </div>
          <div className="flex justify-center">
            <BreadCrumb title="Contact"/>
          </div>
        </div>    
      </div>
    </>
  )
}
