import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SoumppouCarousel } from '../component/SoumppouCarousel'
//import { Carousel } from 'antd';
import { ContactForm } from '../component/ContactForm'
import { Blog } from '../component/Blog'
import { SmoothScrolling } from '../component/SmoothScrolling';

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
              <button className="bg-white py-3 px-6 rounded-3xl text-lg  tracking-tight font-medium mr-4 mb-4">Start Eating Clean</button>
              <button className="border-2 border-slate-100 py-3 px-6 rounded-3xl text-lg text-slate-100 tracking-tight font-medium">Learn more</button>
            </div>
          </div>
        </div>
        <div>
          <div className="">
            <img className="h-auto max-w-full rounded-ss-1/2" src="/images/veggies.jpg" alt="veggies"/>
          </div>
        </div>
      </section>
    </div>
  )
}
