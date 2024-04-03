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
      <section>
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div>
            <img src="/images/bff.jpg" alt=""/>
          </div>
          <div>
            <div>
              <h3>History</h3>
              <p>
                Big Dream Farm AKA Soumppou Kaffo Farm was founded in 2013 by Kama Doucoure an inspired farmer from Africa.
                After the foundation Kama brought out the idea of having this opportunity in mostly african american community in New York, then a diverse group of farmers mostly originally from west Africa joined the organization to combine their expertise from homeland. 
                Inspired by our differences and a shared passion for agriculture especially of widely products consumed in our community.
                Big Dream Farm consists of inspired farmers from West Africa living in the States, we came together with a vision to provide our community with organic products. 
                Our early years were about how we can grow products such as okra and African Eggplant in a non-tropical climate, 
                after our studies in our community in response of high demand in those products we leased a 43 acre land in Saugerties and started clearing it out building barns and greenhouses.
                We currently operates three greenhouses which produced five tons of okra and eggplant every year.
                Besides the okra and the eggplant supplies we also provide our local stores with lamb and chicken.  
                The constant need of lamb supply during Eids and many other cultural events helps us expand even more into farming. 
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="green-one">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div>
            <h4>We Cultivating The Chemical  & Fertilizer Free Products</h4>  
          </div>
          <div>
            <img src="/images/okra.jpeg" alt="okra"/>
          </div>
        </div>
      </section>
    </>
  )
}
