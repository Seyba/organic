import React from 'react'
import Meta from '../component/Meta'
import { BreadCrumb } from '../component/BreadCrumb'
import { SmoothScrolling } from '../component/SmoothScrolling'
import Marquee from 'react-fast-marquee'
import SeyModal from '../component/SeyModal'

export const About = () => {
  return (
    <>
      <div className="bg-green-950">
        <div className="">
          <div className="py-2">
            <h2 className="text-5xl text-white font-semibold text-center py-2 animate-fade-down animate-once animate-duration-800 animate-ease-in-out">About Us</h2>
          </div>
          <div className="flex justify-end">
            <Meta title={"About"}/>
          </div>
          <div className="flex justify-end">
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
