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
      <section>
        <div className="md:flex block ">
          <div className=" md:w-2/5 full">
            <img src="/images/okra.jpeg" className="w-full" alt=""/>
          </div>
          <div className=" md:w-3/5 full">
            <h2>Let's Find Out. Where Our Organic Farms Located.</h2>
            <p>
              Please contact us using the information below. 
              To locate, contact us in the nearest organic store or office closest to you, 
              visit our office websites.
            </p>
            <div className="flex">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <h3>Message</h3>
                <h3>support@bigdreamfarm.com</h3>
              </div>
            </div>
            <div className="flex">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </div>
              <div>
                <h3>Contact Us</h3>
                <h3>+17189745933</h3>
              </div>
            </div>
            <div className="flex">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <div>
                <h3>Find Us</h3>
                <h3>49 Washburn Farm Road, Saugerties NY 12477 United States</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
