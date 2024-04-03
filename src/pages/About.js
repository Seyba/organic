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
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div>
              <div>
                <svg 
                  fill="#000000" 
                  height="64px" 
                  width="64px" 
                  version="1.1" 
                  id="Layer_1" 
                  xmlns="http://www.w3.org/2000/svg" 
                  xmlnsXlink="http://www.w3.org/1999/xlink" 
                  viewBox="0 0 193.769 193.769" xmlSpace="preserve"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier"> <g> <g> <g> 
                    <path d="M149.203,41.104l-9.348,12.009c20.15,15.679,30.201,41.063,26.234,66.253c-2.906,18.484-12.838,34.73-27.964,45.748 c-15.131,11.012-33.64,15.488-52.124,12.567c-38.157-6.008-64.32-41.938-58.322-80.098C30.585,79.097,40.52,62.85,55.648,51.835 c13.208-9.615,28.991-14.233,45.086-13.317L87.579,52.319l9.759,9.313l20.766-21.801l0.005,0.008l9.303-9.769l-9.752-9.303 l-0.005,0.003L95.862,0l-9.31,9.769l14.2,13.525c-19.303-0.913-38.21,4.702-54.059,16.242 C28.28,52.943,16.19,72.717,12.65,95.221c-7.302,46.445,24.54,90.184,70.985,97.493c4.489,0.708,8.976,1.055,13.434,1.055 c17.89,0,35.273-5.623,50.011-16.356c18.415-13.409,30.503-33.183,34.043-55.682C185.952,91.077,173.72,60.181,149.203,41.104z"></path> 
                    <path d="M105.24,151.971v-0.003h0.001v-8.757c10.383-1.159,20.485-7.718,20.485-20.17c0-16.919-15.732-18.859-27.223-20.274 c-7.347-0.878-12.97-1.897-12.97-6.348c0-6.188,8.722-6.855,12.473-6.855c5.567,0,11.507,2.617,13.525,5.957l0.586,0.971 l11.542-5.341l-0.571-1.164c-4.301-8.793-12.009-11.337-17.85-12.364v-7.71H91.723v7.677 c-12.582,1.856-20.054,8.839-20.054,18.829c0,16.29,14.791,17.943,25.582,19.153c9.617,1.134,14.094,3.51,14.094,7.469 c0,7.563-10.474,8.154-13.685,8.154c-7.147,0-14.038-3.566-16.031-8.301l-0.495-1.169l-12.539,5.316l0.5,1.169 c3.713,8.691,11.725,14.137,22.63,15.425v8.336H105.24z"></path> 
                    </g> </g> </g> </g>
                </svg>
              </div>
            </div>
          </div>
          <div>two</div>
          <div>three</div>
          <div>four</div>
        </div>
      </section>
    </>
  )
}
