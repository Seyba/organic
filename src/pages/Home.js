import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SoumppouCarousel } from '../component/SoumppouCarousel'
//import { Carousel } from 'antd';
import { ContactForm } from '../component/ContactForm'
import { ContactPartial } from '../component/ContactPartial'
import { Blog } from '../component/Blog'
import { SmoothScrolling } from '../component/SmoothScrolling';
import { HomePartial } from '../component/HomePartial'
import { Testimonials } from '../component/Testimonials'

export const Home = () => {
  const [rightText, setRightText] = useState('')
  const [msgIdx, setMsgIdx] = useState(0)

  const text = ['innovative', 'talented','powerful','creative']
  const msg = ['intelligent', 'skilled', 'dependable','collaborative']


  useEffect(() => {
    const interval = setInterval(() => {
      const idx = Math.floor(Math.random() * text.length)
      setMsgIdx(previous => {
        if(previous === msg.length) {
          return 0;
        } 
        if(previous > msg.length) {
          return 0;
        }
        return previous + 1;
      })
      setRightText(text[idx])
    }, 4000)

    return () => clearInterval(interval)
  })

  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  return (
    <div>
      <SoumppouCarousel/>
      <section className="lg:grid grid-cols-2 place-items-center gap-8 green-one md:p-20 px-4 py-16">
        <div>
          <div className="mb-8">
            <h2 className="text-lg text-white font-bold uppercase py-4">Fresh. Healthy. Organic.</h2>
            <h3 className="text-5xl text-white font-bold">Welcome to the source of the future of healthy eating</h3>
            <p className="text-base py-4 tracking-wide  text-white font-medium">Organic, nutritious food, 
              powered by the intersection of biotech and agriculture, 
              delivered right to your doorstep.
            </p>
            <div className="">
              <button className="border border-1 hover:bg-white hover:text-slate-950 border-slate-100 py-3 px-6 rounded-3xl text-lg text-white  tracking-tight font-medium mr-4 mb-4">Start Eating Clean</button>
              <button className="border border-1 hover:bg-white hover:text-slate-950 border-slate-100 py-3 px-12 rounded-3xl text-lg text-slate-100 tracking-tight font-medium">Learn more</button>
            </div>
          </div>
        </div>
        <div>
          <div className="">
            <img className="h-auto max-w-full rounded-ss-1/2" src="/images/veggies.jpg" alt="veggies"/>
          </div>
        </div>
      </section>
      <ContactPartial/>
      <HomePartial/>
      <Testimonials/>
      <section>
        <div className="grid md:grid-cols-2 gap-0">
          <div className="bg-green-900">
            <div>
              <img src="/images/crop.png" className="h-12 w-12" alt=""/>
            </div>
          </div>
          <div className="bg-gray-150">
            <div className="flex items-center">
              <img src="/images/logo.png" alt="logo" className="h-8 w-8"/>
              <h3 className="text-lg">Why Big Dream Farm</h3>
            </div>
            <div>
              <h3>A farm that is unlike any other </h3>

              <p>
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. 
                Eleifend turpis lacus ornare quam non. 
                Elementum tellus elit adipiscing iaculis urna, neque. 
                Metus ultrices diam sed in. At lacus, nibh aliquam vel. 
                Vel quis est turpis auctor cras lacus et, mi a.
              </p>

              <button className="flex justify-between items-center bg-green-300 py-3 rounded-3xl px-6">
                Learn more 
                <div className="ml-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
                </div>
                

              </button>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  )
}
