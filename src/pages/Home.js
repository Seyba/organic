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
      <h3>Big Dream LLC</h3>
    </div>
  )
}
