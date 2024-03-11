import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SeyCarousel } from '../component/SeyCarousel'
import { Carousel } from 'antd';
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
      <div className="grid grid-cols-2 gap-4 bg-green-900">
        <div>
          <h2>Fresh. Healthy. Oragnic</h2>
          <p>Welcome to the source of the future of healthy eating</p>
          <p>Organic, nutritious food, 
            powered by the intersection of biotech and agriculture, 
            delivered right to your doorstep.
          </p>
          <div>
            <button>Start Eating Clean</button>
            <button>Learn more</button>
          </div>
        </div>
        <div>
          <div>
            <img src="/images/veggies.jpg" alt="veggies"/>
          </div>
        </div>
      </div>
    </div>
  )
}
