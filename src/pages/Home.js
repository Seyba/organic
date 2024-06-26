import React, {useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { SoumppouCarousel } from '../component/SoumppouCarousel'
import { ContactForm } from '../component/ContactForm'
import { ContactPartial } from '../component/ContactPartial'
import { Blog } from '../component/Blog'
import { SmoothScrolling } from '../component/SmoothScrolling';
import { HomePartial } from '../component/HomePartial'
import { Testimonials } from '../component/Testimonials'

export const Home = () => {
  const [rightText, setRightText] = useState('')
  const [msgIdx, setMsgIdx] = useState(0)
  const [showAnswerOne, setShowAnswerOne] = useState(false)
  const [showAnswerTwo, setShowAnswerTwo] = useState(false)
  const [showAnswerThree, setShowAnswerThree] = useState(false)
  const [showAnswerFour, setShowAnswerFour] = useState(false)
  const [showAnswerFive, setShowAnswerFive] = useState(false)
  const [showAnswerSix, setShowAnswerSix] = useState(false)
  const [showAnswerSeven, setShowAnswerSeven] = useState(false)

  const text = ['innovative', 'talented','powerful','creative']
  const msg = ['intelligent', 'skilled', 'dependable','collaborative']
    
  const onChange = (key) => {
    console.log(key)
  }

  const showQnAOne = () => {
    if(!showAnswerOne){
      setShowAnswerOne(true)
    } else {
      setShowAnswerOne(false)
    } 
  }

  const showQnATwo = () => {
    if(!showAnswerTwo){
      setShowAnswerTwo(true)
    } else {
      setShowAnswerTwo(false)
    } 
  }
  const showQnAThree = () => {
    if(!showAnswerThree){
      setShowAnswerThree(true)
    } else {
      setShowAnswerThree(false)
    } 
  }
  const showQnAFour = () => {
    if(!showAnswerFour){
      setShowAnswerFour(true)
    } else {
      setShowAnswerFour(false)
    } 
  }
  const showQnAFive = () => {
    if(!showAnswerFive){
      setShowAnswerFive(true)
    } else {
      setShowAnswerFive(false)
    } 
  }
  const showQnASix = () => {
    if(!showAnswerSix){
      setShowAnswerSix(true)
    } else {
      setShowAnswerSix(false)
    } 
  }
  const showQnASeven = () => {
    if(!showAnswerSeven){
      setShowAnswerSeven(true)
    } else {
      setShowAnswerSeven(false)
    } 
  }
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
      <section className="bg-gray-50 py-20 px-16">
        <div className="mb-16">
          <div className="text-center">
            <h2 className="text-5xl font-bold">Got Questions? We've Got Answers</h2>
            <p className="text-lg mt-4 font-thin">Common inquiries about our service, organic food, and more, answered.</p>
          </div>
        </div>
        <div>
          <div className="flex mb-10">
            <div className="mr-10">
              <Link onClick={showQnAOne} className={!showAnswerOne? 'hidden':''}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </Link>
              <Link onClick={showQnAOne} className={showAnswerOne? 'hidden':''}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </div>
            <div className="">
              <h4 className="text-xl font-semibold">What foods are grown by Soumppou Kaffo Farm?</h4>
              <p className={!showAnswerOne? `hidden`:''}>
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. 
                Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. 
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.
              </p>
            </div>
          </div>
          <div className="flex mb-10">
            <div className="mr-10">
              <Link  onClick={showQnATwo} className={!showAnswerTwo? 'hidden':''}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </Link>
              <Link onClick={showQnATwo} className={showAnswerTwo? 'hidden':''}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </div>
            <div>
              <h4 className="text-xl font-semibold">Is there any difference between Big Dream Farm and Soumppou Kaffo Farm?</h4>
              <p className={!showAnswerTwo? `hidden`:''}>
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. 
                Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. 
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.
              </p>
            </div>
              
          </div>
          <div className="flex mb-10">
            <div className="mr-10">
              <Link  onClick={showQnAThree} className={!showAnswerThree? 'hidden':''}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </Link>
              <Link onClick={showQnAThree} className={showAnswerThree? 'hidden':''}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </div>
            <div>
              <h4 className="text-xl font-semibold">How long does the delivery take?</h4>
              <p className={!showAnswerThree? `hidden`:''}>
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. 
                Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. 
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.
              </p>
            </div>
          </div>
          <div className="flex mb-10">
            <div className="mr-10">
              <Link  onClick={showQnAFour} className={!showAnswerFour? 'hidden':''}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </Link>
              <Link onClick={showQnAFour} className={showAnswerFour? 'hidden':''}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </div>
              <div>
                <h4 className="text-xl font-semibold">How much does the delivery cost?</h4>
                <p className={!showAnswerFour? `hidden`:''}>
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                  Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. 
                  Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. 
                  Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.
                </p>
              </div>
              
          </div>
          <div className="flex mb-10">
            <div className="mr-10">
              <Link  onClick={showQnAFive} className={!showAnswerFive? 'hidden':''}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </Link>
              <Link onClick={showQnAFive} className={showAnswerFive? 'hidden':''}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </div>
              <div>
                <h4 className="text-xl font-semibold">How early to get lamb delivered on Eid?</h4>
                <p className={!showAnswerFive? `hidden`:''}>
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                  Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. 
                  Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. 
                  Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.
                </p>
              </div>
          </div>
          <div className="flex mb-10">
            <div className="mr-10">
              <Link  onClick={showQnASix} className={!showAnswerSix? 'hidden':''}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </Link>
              <Link onClick={showQnASix} className={showAnswerSix? 'hidden':''}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </div>
              <div>
                <h4 className="text-xl font-semibold">How lamb orders are porcessed?</h4>
                <p className={!showAnswerSix? `hidden`:''}>
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                  Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. 
                  Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. 
                  Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.
                </p>
              </div>
              
          </div>
          <div className="flex mb-10">
            <div className="mr-10">
              <Link  onClick={showQnASeven} className={!showAnswerSeven? 'hidden':''}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </Link>
              <Link onClick={showQnASeven} className={showAnswerSeven? 'hidden':''}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </div>
            <div>
              <h4 className="text-xl font-semibold">Does Big Dream Farm carry dairy stuff?</h4>  
              <p className={!showAnswerSeven? `hidden`:''}>
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. 
                Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. 
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.
              </p>    
            </div>
          </div>
        </div>
      </section>
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-0">

          <div className="bg-green-50 flex p-24 justify-center">
            <div>
              <div className="flex items-center mb-4">
                <img src="/images/logo.png" alt="logo" className="h-8 w-8"/>
                <h3 className=" text-2xl text-gray-700 font-thin  uppercase pl-2">Why Big Dream Farm</h3>
              </div>
              <div>
                <h3 className="text-2xl font-semibold pb-2">A farm that is unlike any other </h3>
                <p className="text-base font-extralight tracking-wide text-gray-600 leading-8 my-6">
                  We are proud to be producing and raising much of the food for sale in the community from the farm. 
                  It is very labour intensive and not good for 'economies of scale' to have many small enterprises but we are working our way towards
                </p>
                <Link to="/">
                  <button className="flex justify-between items-center hover:bg-green-700 green-two py-2 text-white text-lg rounded-3xl px-6">
                    Learn more 
                    <div className="ml-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                      </svg>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="green-two py-8 grid  md:grid-cols-2 gap-2">
            <div className="">
              <div className="flex justify-center">
                <div className="flex justify-center items-center rounded-full green-four h-20 w-20">
                  {/* <img src="/images/crop.png" alt="crop" className="h-8 w-8 items-center"/> */}
                  <svg 
                    fill="#ffffff" 
                    width="40px" 
                    height="40px" 
                    viewBox="0 0 512 512" 
                    enableBackground="new 0 0 512 512" id="Eat_x5F_dairy" 
                    version="1.1" xmlSpace="preserve" 
                    xmlns="http://www.w3.org/2000/svg" 
                    xmlnsXlink="http://www.w3.org/1999/xlink">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> <g> 
                    <rect height="9.528" width="9.528" x="395.048" y="379.328"></rect> 
                    <rect height="9.528" width="9.527" x="443.042" y="206.977"></rect> 
                    <rect height="9.527" width="9.527" x="339.733" y="213.625"></rect> 
                    <rect height="9.527" width="9.527" x="447.806" y="424.342"></rect> 
                    <rect height="9.527" width="9.528" x="360.96" y="433.393"></rect> 
                    <path d="M439.856,110.34c-4.482-2.437-7.268-7.118-7.268-12.217V83.777c5.443-0.923,9.607-5.659,9.607-11.362V55.916 c0-6.361-5.176-11.537-11.537-11.537h-79.626c-6.361,0-11.536,5.176-11.536,11.537v16.499c0,5.701,4.16,10.438,9.602,11.361v14.347 c0,2.498-0.676,4.954-1.955,7.101c-1.283,2.153-3.121,3.924-5.312,5.115c-30.034,16.319-48.692,47.691-48.692,81.874v9.764H83.813 c-14.491,0-26.597,10.864-28.158,25.27l-9.688,89.342l9.941,1.078l9.688-89.342c1.011-9.319,8.842-16.348,18.217-16.348h218.912 c9.375,0,17.206,7.028,18.217,16.348l9.68,89.261l9.941-1.078l-5.521-50.915h91.973v83.152h-60.104v10h70.104v-126H331.479 l-0.596-5.498c-1.547-14.268-13.438-25.055-27.744-25.26v-9.773c0-3.969,0.287-7.894,0.837-11.754 c10.021,1.129,15.729,5.169,22.165,9.751c7.852,5.59,16.752,11.927,33.801,11.927s25.949-6.337,33.803-11.927 c7.592-5.405,14.148-10.073,28.002-10.073s20.41,4.668,28.003,10.073c7.042,5.014,14.948,10.612,28.8,11.717v236.236 c0,10.405-8.461,18.87-18.86,18.87h-121.62v10h121.62c15.913,0,28.86-12.951,28.86-28.87v-245.94 C488.55,158.033,469.892,126.658,439.856,110.34z M427.015,242.744v12.848h-93.057l-1.394-12.848H427.015z M349.497,55.916 c0-0.848,0.689-1.537,1.536-1.537h79.626c0.848,0,1.537,0.689,1.537,1.537v16.499c0,0.848-0.689,1.537-1.537,1.537h-79.626 c-0.847,0-1.536-0.689-1.536-1.537V55.916z M455.55,182.063c-7.853-5.591-16.753-11.927-33.803-11.927 c-17.049,0-25.949,6.336-33.803,11.927c-7.592,5.405-14.148,10.073-28.002,10.073c-13.853,0-20.41-4.668-28.002-10.073 c-6.546-4.661-13.838-9.826-25.955-11.42c5.824-21.718,20.303-40.479,40.624-51.52c3.769-2.051,6.925-5.088,9.126-8.782 c0.805-1.353,1.469-2.777,1.99-4.25h46.828v-10h-45.455V83.953h63.49v14.17c0,8.767,4.787,16.814,12.493,21.003 c26.72,14.518,43.349,42.385,43.462,72.783C467.995,190.918,462.163,186.771,455.55,182.063z"></path> <rect height="15.048" width="10" x="96.222" y="142.236"></rect> <rect height="15.048" width="10" x="96.222" y="167.96"></rect> <rect height="10" width="15.048" x="80.836" y="157.622"></rect> <rect height="10" width="15.048" x="106.56" y="157.622"></rect> <rect height="15.048" width="10" x="264.374" y="68.112"></rect> <rect height="15.048" width="10" x="264.374" y="93.836"></rect> <rect height="10" width="15.049" x="248.987" y="83.498"></rect> <rect height="10" width="15.047" x="274.712" y="83.498"></rect> <path d="M346.915,400.563c8.988-0.117,16.266-7.456,16.266-16.472s-7.279-16.354-16.269-16.471c0-0.028,0.003-0.057,0.003-0.085 c0-12.995-5.178-27.528-13.852-38.874c-9.695-12.685-22.098-19.67-34.922-19.67c-3.646,0-7.256,0.584-10.781,1.684 c-9.27-18.979-25.33-30.996-41.935-30.996c-16.521,0-32.558,11.957-41.858,30.833c-3.357-0.994-6.788-1.521-10.252-1.521 c-3.713,0-7.387,0.604-10.973,1.742c-9.268-19.015-25.337-31.055-41.965-31.055c-16.48,0-32.495,11.914-41.794,30.722 c-3.242-0.925-6.552-1.409-9.891-1.409c-12.827,0-25.23,6.985-34.925,19.67c-8.671,11.345-13.848,25.877-13.848,38.874 c0,0.025,0.002,0.05,0.002,0.075c-9.083,0.006-16.472,7.396-16.472,16.48s7.385,16.473,16.466,16.481v19.474 c0,26.155,21.278,47.434,47.434,47.434c19.654,0,36.554-12.017,43.741-29.088h18.562c7.153,17.145,24.088,29.229,43.795,29.229 c19.708,0,36.642-12.084,43.796-29.229h18.495c6.354,15.092,20.301,26.225,37.029,28.605v0.031c0.066,0,0.133-0.006,0.199-0.006 c2.131,0.293,4.303,0.457,6.513,0.457c26.155,0,47.435-21.278,47.435-47.434V400.563z M298.142,318.992 c20.882,0,38.773,26.692,38.773,48.544c0,0.024-0.002,0.05-0.002,0.075h-77.541c0-0.025-0.002-0.051-0.002-0.075 C259.37,345.685,277.261,318.992,298.142,318.992z M245.426,289.68c14.212,0,26.247,12.055,32.819,25.148 c-5.439,3.304-10.527,7.945-15.027,13.834c-8.672,11.345-13.849,25.877-13.849,38.874c0,0.024,0.002,0.05,0.003,0.075h-7.286 c0-0.025,0.002-0.051,0.002-0.075c0-12.995-5.178-27.528-13.851-38.874c-4.629-6.057-9.879-10.796-15.493-14.113 C219.349,301.588,231.341,289.68,245.426,289.68z M193.315,318.992c20.882,0,38.772,26.692,38.772,48.544 c0,0.024-0.002,0.05-0.002,0.075h-77.541c0-0.025-0.002-0.051-0.002-0.075C154.543,345.685,172.435,318.992,193.315,318.992z M140.378,289.68c14.251,0,26.306,12.108,32.872,25.25c-5.376,3.297-10.405,7.904-14.859,13.732 c-8.671,11.345-13.848,25.877-13.848,38.874c0,0.024,0.002,0.05,0.002,0.075h-7.081c0-0.025,0.002-0.051,0.002-0.075 c0-12.995-5.178-27.528-13.852-38.874c-4.717-6.171-10.076-10.98-15.811-14.305C114.413,301.486,126.364,289.68,140.378,289.68z M88.693,318.992c20.881,0,38.772,26.692,38.772,48.544c0,0.024-0.002,0.05-0.002,0.075H49.923c0-0.025-0.002-0.051-0.002-0.075 C49.921,345.685,67.812,318.992,88.693,318.992z M49.917,420.047v-19.473h6.266v19.307c0,11.366,3.205,21.805,8.534,29.956 C55.73,442.992,49.917,432.188,49.917,420.047z M134.035,428.393c0.483-2.711,0.75-5.497,0.75-8.346v-2.482 c0-3.078,2.504-5.582,5.647-5.582c3.078,0,5.582,2.504,5.582,5.582v2.622c0,2.8,0.258,5.538,0.725,8.206H134.035z M240.157,428.393 c0.468-2.668,0.726-5.406,0.726-8.206v-2.622c0-3.078,2.504-5.582,5.581-5.582c3.078,0,5.582,2.504,5.582,5.582v2.482 c0,2.849,0.267,5.635,0.75,8.346H240.157z M320.142,419.881c0,20.137-11.869,36.57-26.61,37.122 c-17.823-2.858-31.485-18.34-31.485-36.956v-2.482c0-8.592-6.99-15.582-15.582-15.582s-15.581,6.99-15.581,15.582v2.622 c0,20.642-16.793,37.435-37.435,37.435c-20.641,0-37.434-16.793-37.434-37.435v-2.622c0-8.592-6.99-15.582-15.648-15.582 c-8.591,0-15.581,6.99-15.581,15.582v2.482c0,18.645-13.703,34.146-31.567,36.971c-14.938-0.248-27.035-16.807-27.035-37.137 v-19.307h253.959V419.881z M336.915,420.047c0,12.591-6.256,23.742-15.814,30.531c5.628-8.256,9.041-18.979,9.041-30.697v-19.307 h6.773V420.047z M39.933,390.574c-3.574,0-6.481-2.908-6.481-6.482c0-3.573,2.907-6.48,6.481-6.48h306.766 c3.574,0,6.482,2.907,6.482,6.48c0,3.574-2.908,6.482-6.482,6.482H39.933z"></path> <path d="M101.784,233.032c0-7.22-5.873-13.094-13.093-13.094s-13.094,5.874-13.094,13.094s5.874,13.094,13.094,13.094 S101.784,240.252,101.784,233.032z M85.598,233.032c0-1.706,1.388-3.094,3.094-3.094c1.705,0,3.093,1.388,3.093,3.094 s-1.388,3.094-3.093,3.094C86.985,236.126,85.598,234.738,85.598,233.032z"></path> <path d="M298.14,246.126c7.221,0,13.094-5.874,13.094-13.094s-5.873-13.094-13.094-13.094c-7.219,0-13.094,5.874-13.094,13.094 S290.921,246.126,298.14,246.126z M298.14,229.938c1.706,0,3.094,1.388,3.094,3.094s-1.388,3.094-3.094,3.094 c-1.705,0-3.094-1.388-3.094-3.094S296.435,229.938,298.14,229.938z"></path> <rect height="10" width="19.545" x="253.554" y="228.567"></rect> <rect height="10" width="127.441" x="114.438" y="228.567"></rect> <rect height="15.671" width="10" x="454.356" y="373.847"></rect> <rect height="127.234" width="10" x="454.356" y="232.321"></rect> 
                    </g> </g>
                  </svg>
                </div>
              </div>
              <div className="flex justify-center pb-6 md:pb-12">
                <div>
                  <h3 className="text-white mt-2 text-center text-5xl font-semibold">23+</h3>
                  <h4 className="text-white mb-2 text-center text-xl tracking-tight font-light uppercase">Products</h4>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex justify-center items-center rounded-full green-four h-20 w-20">
                  <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4.63495 14.4151L5.67396 12.2121C5.80734 11.9293 6.19266 11.9293 6.32604 12.2121L7.36505 14.4151L9.68859 14.7706C9.98671 14.8162 10.1055 15.1997 9.8897 15.4198L8.2087 17.1334L8.60542 19.5543C8.65637 19.8652 8.34456 20.1022 8.07781 19.9554L6 18.8118L3.92219 19.9554C3.65544 20.1022 3.34363 19.8652 3.39458 19.5543L3.7913 17.1334L2.1103 15.4198C1.89447 15.1997 2.01329 14.8162 2.31141 14.7706L4.63495 14.4151Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M16.6349 14.4151L17.674 12.2121C17.8073 11.9293 18.1927 11.9293 18.326 12.2121L19.3651 14.4151L21.6886 14.7706C21.9867 14.8162 22.1055 15.1997 21.8897 15.4198L20.2087 17.1334L20.6054 19.5543C20.6564 19.8652 20.3446 20.1022 20.0778 19.9554L18 18.8118L15.9222 19.9554C15.6554 20.1022 15.3436 19.8652 15.3946 19.5543L15.7913 17.1334L14.1103 15.4198C13.8945 15.1997 14.0133 14.8162 14.3114 14.7706L16.6349 14.4151Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M10.6349 5.41515L11.674 3.21211C11.8073 2.9293 12.1927 2.9293 12.326 3.21211L13.3651 5.41515L15.6886 5.7706C15.9867 5.8162 16.1055 6.19974 15.8897 6.41976L14.2087 8.13337L14.6054 10.5543C14.6564 10.8652 14.3446 11.1022 14.0778 10.9554L12 9.81178L9.92219 10.9554C9.65544 11.1022 9.34363 10.8652 9.39458 10.5543L9.7913 8.13337L8.1103 6.41976C7.89447 6.19974 8.01329 5.8162 8.31141 5.7706L10.6349 5.41515Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g>
                  </svg>
                  {/* <img src="/images/stars.png" alt="stars" className="h-16 w-16"/> */}
                </div>
              </div>
              <div className="flex justify-center">
                <div>
                  <h3 className="text-white text-center mt-2 text-5xl font-semibold">10+</h3>
                  <h4 className="text-white text-xl text-center tracking-tight font-light uppercase">Years of</h4>
                  <h4 className="text-white mb-2 text-xl text-center tracking-tight font-light uppercase">Experience</h4>
                </div>
              </div>  
            </div>
            
            <div>
              <div className="flex justify-center">
                <div className="flex justify-center items-center rounded-full green-four h-20 w-20">
                  <svg fill="#ffffff" version="1.1" id="Layer_1"  xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" width="40px" height="40px">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                    <g> <g> <polygon points="357.871,391.592 287.48,381.364 256,317.577 224.52,381.364 154.129,391.592 205.064,441.242 193.04,511.349 256,478.249 318.96,511.349 306.936,441.242 "></polygon> </g> </g> 
                    <g> <g> <polygon points="512,346.347 451.058,337.491 423.805,282.269 396.55,337.491 335.608,346.347 379.706,389.332 369.296,450.028 423.805,421.372 478.313,450.028 467.902,389.332 "></polygon> </g> </g> 
                    <g> <g> <polygon points="176.392,346.347 115.45,337.491 88.195,282.269 60.942,337.491 0,346.347 44.098,389.332 33.688,450.028 88.195,421.372 142.704,450.028 132.294,389.332 "></polygon> </g> </g> 
                    <g> <g> <path d="M308.507,182.256c8.547-11.146,13.643-25.07,13.643-40.17c0-36.476-29.675-66.15-66.15-66.15s-66.15,29.674-66.15,66.15 c0,15.1,5.096,29.024,13.644,40.17c-26.469,9.845-45.379,35.362-45.379,65.219v59.184h195.771v-59.184 C353.886,217.619,334.976,192.102,308.507,182.256z"></path> </g> </g> <g> <g> <rect x="240.839" y="0.651" width="30.321" height="50.019"></rect> </g> </g> <g> <g> <rect x="158.511" y="34.748" transform="matrix(0.7071 -0.7071 0.7071 0.7071 8.6121 140.3069)" width="30.321" height="50.019"></rect> </g> </g> <g> <g> <rect x="114.562" y="126.923" width="50.019" height="30.321"></rect> </g> </g> <g> <g> <rect x="347.416" y="126.923" width="50.019" height="30.321"></rect> </g> </g> <g> <g> <rect x="313.313" y="44.603" transform="matrix(0.7071 -0.7071 0.7071 0.7071 56.8332 256.7344)" width="50.019" height="30.321"></rect> </g> </g> </g>
                  </svg>
                  {/* <img src="/images/satisfaction.png" alt="satisfaction" className="h-16 w-16"/> */}
                </div>
              </div>
              <div className="flex justify-center pb-6 md:pb-12">
                <div>
                  <h3 className="text-white text-center mt-2 text-5xl font-semibold">1500+</h3>
                  <h4 className="text-white mb-2 text-center text-xl tracking-tight font-light uppercase">Satisfied Clients</h4>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex justify-center items-center rounded-full green-four h-20 w-20">
                  <svg fill="#ffffff" height="40px" width="40px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 372.483 372.483" xmlSpace="preserve">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                    <g id="XMLID_10_"> 
                    <g> 
                      <path 
                        d="M372.482,263.045c0-21.796-6.527-42.842-18.877-60.863c-8.883-12.962-20.322-23.726-33.578-31.725 c15.607-14.78,25.372-35.67,25.372-58.811c0-44.684-36.354-81.038-81.037-81.038c-26.496,0-51.316,13.104-66.392,34.615 c-3.831-0.558-7.745-0.859-11.729-0.859s-7.897,0.302-11.728,0.859c-15.077-21.511-39.897-34.615-66.392-34.615 c-44.684,0-81.038,36.354-81.038,81.038c0,23.141,9.765,44.031,25.373,58.811c-13.257,7.998-24.696,18.763-33.578,31.724 C6.528,220.203,0,241.249,0,263.045v45.075h78.121v33.755h216.242V308.12h78.12v-45.075H372.482z M264.362,50.609 c33.656,0,61.037,27.381,61.037,61.038s-27.381,61.038-61.037,61.038c-0.603,0-1.206-0.009-1.81-0.027 c0.046-0.128,0.084-0.259,0.129-0.387c1.042-2.954,1.911-5.988,2.608-9.087c0.049-0.22,0.105-0.438,0.152-0.659 c0.181-0.836,0.34-1.68,0.495-2.526c0.073-0.4,0.148-0.799,0.215-1.2c0.126-0.755,0.24-1.513,0.345-2.274 c0.073-0.529,0.139-1.058,0.202-1.588c0.079-0.672,0.156-1.345,0.219-2.022c0.064-0.691,0.112-1.383,0.158-2.076 c0.036-0.546,0.081-1.09,0.106-1.639c0.055-1.177,0.086-2.356,0.09-3.536c0-0.087,0.007-0.172,0.007-0.26 c0-0.047-0.004-0.094-0.004-0.141c-0.002-1.205-0.037-2.403-0.091-3.597c-0.016-0.347-0.037-0.693-0.057-1.039 c-0.059-1.015-0.136-2.025-0.231-3.03c-0.022-0.228-0.04-0.456-0.063-0.683c-3.022-29.209-21.475-54.21-48.095-65.774 C230.208,58.253,246.8,50.609,264.362,50.609z M165.122,88.131c0.195-0.071,0.392-0.138,0.587-0.208 c0.607-0.217,1.219-0.423,1.834-0.622c0.466-0.149,0.935-0.293,1.407-0.431c0.343-0.101,0.687-0.198,1.032-0.294 c0.616-0.169,1.235-0.334,1.86-0.485c4.62-1.122,9.438-1.731,14.397-1.731c4.963,0.004,9.783,0.614,14.404,1.736 c0.621,0.15,1.236,0.314,1.849,0.482c0.35,0.097,0.7,0.195,1.047,0.298c0.466,0.137,0.93,0.279,1.391,0.426 c0.623,0.201,1.242,0.409,1.856,0.629c0.189,0.067,0.378,0.131,0.566,0.2c20.413,7.549,35.718,25.716,39.182,47.763 c0.027,0.176,0.053,0.353,0.079,0.53c0.111,0.747,0.204,1.5,0.287,2.255c0.03,0.278,0.062,0.555,0.089,0.834 c0.066,0.689,0.115,1.383,0.159,2.079c0.018,0.298,0.043,0.595,0.057,0.894c0.042,0.889,0.065,1.783,0.068,2.682 c0,0.078,0.005,0.154,0.005,0.232c0,0.036-0.002,0.073-0.002,0.109c-0.002,0.87-0.028,1.734-0.066,2.595 c-0.012,0.271-0.024,0.542-0.04,0.812c-0.047,0.832-0.109,1.66-0.189,2.482c-0.031,0.318-0.073,0.635-0.109,0.952 c-0.061,0.532-0.129,1.063-0.203,1.591c-0.058,0.411-0.116,0.823-0.182,1.232c-0.101,0.623-0.213,1.242-0.333,1.859 c-0.107,0.549-0.224,1.096-0.346,1.642c-0.073,0.329-0.149,0.658-0.228,0.985c-0.195,0.811-0.409,1.617-0.637,2.42 c-0.091,0.319-0.176,0.64-0.272,0.956c-0.139,0.46-0.289,0.916-0.438,1.372c-0.12,0.365-0.243,0.728-0.37,1.09 c-0.144,0.411-0.286,0.823-0.438,1.231c-0.259,0.693-0.531,1.38-0.814,2.061c-0.126,0.304-0.26,0.605-0.391,0.908 c-0.247,0.567-0.501,1.131-0.765,1.689c-0.031,0.066-0.062,0.132-0.093,0.198c-0.095,0.198-0.189,0.397-0.286,0.595 c-0.296,0.604-0.604,1.201-0.92,1.793c-0.123,0.23-0.242,0.463-0.368,0.692c-0.008,0.015-0.016,0.029-0.024,0.043 c-0.346,0.63-0.707,1.25-1.074,1.866c-0.146,0.244-0.29,0.489-0.439,0.73c-0.4,0.649-0.811,1.291-1.234,1.923 c-0.263,0.393-0.538,0.778-0.81,1.165c-0.231,0.328-0.461,0.657-0.698,0.98c-0.307,0.418-0.62,0.831-0.938,1.242 c-0.216,0.279-0.434,0.556-0.654,0.832c-0.336,0.42-0.675,0.838-1.021,1.249c-0.215,0.255-0.436,0.505-0.655,0.756 c-0.36,0.413-0.719,0.827-1.089,1.23c-0.22,0.239-0.448,0.469-0.672,0.705c-0.602,0.635-1.218,1.256-1.846,1.865 c-0.373,0.361-0.744,0.723-1.126,1.074c-0.264,0.243-0.535,0.479-0.804,0.718c-0.438,0.389-0.879,0.774-1.328,1.15 c-0.228,0.191-0.458,0.38-0.689,0.568c-0.543,0.442-1.093,0.875-1.652,1.299c-0.152,0.115-0.302,0.232-0.455,0.346 c-10.16,7.553-22.736,12.03-36.34,12.03c-13.605,0-26.183-4.478-36.343-12.033c-0.15-0.112-0.297-0.227-0.446-0.34 c-0.561-0.425-1.114-0.861-1.659-1.305c-0.229-0.187-0.458-0.374-0.684-0.564c-0.451-0.378-0.893-0.765-1.333-1.155 c-0.267-0.238-0.537-0.472-0.8-0.714c-0.383-0.352-0.755-0.715-1.129-1.076c-0.631-0.611-1.248-1.234-1.852-1.871 c-0.221-0.233-0.447-0.46-0.664-0.696c-0.371-0.404-0.73-0.819-1.09-1.232c-0.219-0.251-0.439-0.5-0.654-0.755 c-0.347-0.411-0.685-0.829-1.021-1.248c-0.22-0.276-0.439-0.553-0.655-0.833c-0.317-0.41-0.63-0.823-0.937-1.241 c-0.237-0.324-0.468-0.654-0.699-0.983c-0.272-0.386-0.546-0.77-0.808-1.162c-0.425-0.635-0.838-1.279-1.239-1.93 c-0.147-0.239-0.289-0.48-0.433-0.721c-0.373-0.625-0.738-1.253-1.089-1.892c-0.129-0.235-0.251-0.474-0.378-0.71 c-0.316-0.594-0.625-1.193-0.922-1.798c-0.106-0.215-0.209-0.432-0.312-0.648c-0.016-0.033-0.031-0.066-0.046-0.099 c-0.277-0.584-0.542-1.174-0.801-1.769c-0.123-0.283-0.248-0.565-0.366-0.849c-0.29-0.696-0.567-1.398-0.832-2.106 c-0.143-0.382-0.275-0.768-0.41-1.153c-0.139-0.395-0.273-0.793-0.404-1.192c-0.141-0.432-0.283-0.864-0.415-1.298 c-0.197-0.649-0.383-1.302-0.558-1.959c-0.123-0.461-0.234-0.926-0.347-1.39c-0.088-0.365-0.173-0.73-0.254-1.097 c-0.1-0.45-0.201-0.899-0.291-1.351c-0.139-0.704-0.266-1.412-0.38-2.124c-0.062-0.384-0.116-0.769-0.171-1.153 c-0.081-0.569-0.154-1.141-0.219-1.715c-0.032-0.283-0.069-0.566-0.098-0.849c-0.083-0.843-0.146-1.692-0.194-2.544 c-0.014-0.245-0.025-0.49-0.036-0.735c-0.041-0.911-0.07-1.825-0.07-2.745c0-0.986,0.028-1.965,0.075-2.94 c0.013-0.265,0.035-0.528,0.05-0.792c0.044-0.732,0.097-1.462,0.167-2.188c0.024-0.253,0.053-0.505,0.08-0.757 c0.086-0.786,0.183-1.568,0.299-2.345c0.022-0.151,0.044-0.303,0.068-0.454C129.393,113.864,144.701,95.685,165.122,88.131z M47.083,111.647c0-33.656,27.381-61.038,61.038-61.038c17.563,0,34.154,7.645,45.625,20.529 c-26.629,11.568-45.086,36.581-48.099,65.802c-0.021,0.198-0.036,0.397-0.055,0.596c-0.1,1.041-0.179,2.086-0.239,3.137 c-0.018,0.32-0.038,0.639-0.053,0.96c-0.057,1.251-0.096,2.506-0.096,3.77c0,1.276,0.037,2.549,0.097,3.821 c0.024,0.512,0.066,1.019,0.099,1.528c0.049,0.732,0.099,1.464,0.167,2.194c0.06,0.649,0.134,1.294,0.21,1.939 c0.066,0.562,0.136,1.122,0.214,1.682c0.102,0.735,0.212,1.467,0.333,2.196c0.073,0.433,0.153,0.865,0.232,1.297 c0.15,0.816,0.303,1.63,0.477,2.437c0.058,0.266,0.124,0.53,0.184,0.795c0.679,3.003,1.522,5.943,2.526,8.81 c0.064,0.185,0.12,0.372,0.185,0.556c-0.603,0.018-1.207,0.027-1.809,0.027C74.464,172.684,47.083,145.303,47.083,111.647z M94.888,239.148c-0.22,0.347-0.43,0.7-0.646,1.049c-0.457,0.738-0.91,1.478-1.348,2.225c-0.245,0.417-0.481,0.837-0.719,1.257 c-0.394,0.693-0.783,1.388-1.161,2.089c-0.238,0.441-0.472,0.884-0.704,1.327c-0.364,0.697-0.719,1.398-1.067,2.101 c-0.219,0.442-0.437,0.883-0.649,1.327c-0.354,0.741-0.695,1.488-1.032,2.236c-0.183,0.407-0.371,0.811-0.548,1.22 c-0.39,0.896-0.762,1.799-1.127,2.705c-0.107,0.265-0.221,0.527-0.325,0.792c-0.463,1.177-0.906,2.362-1.326,3.553 c-0.096,0.273-0.182,0.549-0.277,0.822c-0.316,0.918-0.624,1.839-0.915,2.764c-0.133,0.425-0.256,0.852-0.384,1.278 c-0.235,0.784-0.466,1.569-0.683,2.359c-0.129,0.47-0.252,0.941-0.375,1.413c-0.198,0.758-0.388,1.518-0.568,2.281 c-0.115,0.483-0.227,0.966-0.334,1.45c-0.172,0.773-0.333,1.549-0.488,2.326c-0.093,0.467-0.189,0.934-0.276,1.403 c-0.157,0.846-0.298,1.696-0.435,2.547c-0.064,0.4-0.135,0.798-0.195,1.198c-0.186,1.25-0.355,2.503-0.497,3.762 c-0.002,0.015-0.003,0.03-0.004,0.045c-0.129,1.145-0.24,2.292-0.333,3.443H20v-25.075c0-34.258,19.694-65.013,50.548-79.631 c11.24,5.908,24.017,9.271,37.572,9.271c3.92,0,7.852-0.29,11.754-0.864c0.608,0.867,1.226,1.725,1.866,2.567 c0.216,0.283,0.44,0.559,0.66,0.839c0.632,0.808,1.273,1.607,1.935,2.39c0.271,0.321,0.549,0.635,0.825,0.952 c0.62,0.712,1.25,1.415,1.894,2.104c0.338,0.363,0.682,0.72,1.026,1.077c0.589,0.607,1.186,1.205,1.793,1.794 c0.228,0.221,0.443,0.455,0.673,0.674c-0.869,0.525-1.73,1.063-2.583,1.612c-0.139,0.089-0.275,0.183-0.413,0.273 c-0.853,0.554-1.697,1.12-2.533,1.697c-0.289,0.2-0.577,0.402-0.865,0.604c-0.745,0.525-1.482,1.059-2.213,1.602 c-0.231,0.172-0.465,0.34-0.694,0.514c-0.93,0.703-1.849,1.419-2.756,2.151c-0.198,0.16-0.392,0.325-0.59,0.487 c-0.722,0.591-1.437,1.192-2.143,1.802c-0.274,0.236-0.546,0.474-0.818,0.713c-0.707,0.623-1.405,1.255-2.096,1.896 c-0.18,0.167-0.364,0.331-0.543,0.5c-0.848,0.798-1.683,1.611-2.506,2.438c-0.214,0.215-0.423,0.434-0.635,0.65 c-0.63,0.643-1.253,1.293-1.868,1.952c-0.244,0.262-0.488,0.524-0.73,0.789c-0.692,0.756-1.374,1.522-2.045,2.299 c-0.105,0.122-0.214,0.24-0.319,0.363c-0.765,0.893-1.513,1.803-2.251,2.722c-0.206,0.256-0.407,0.516-0.61,0.775 c-0.555,0.705-1.102,1.417-1.64,2.136c-0.208,0.278-0.417,0.554-0.622,0.834c-0.704,0.96-1.399,1.928-2.074,2.913 C96.274,236.998,95.572,238.069,94.888,239.148z M98.121,321.876v-13.755v-11.32c0-1.11,0.021-2.216,0.062-3.319 c0.013-0.363,0.042-0.723,0.06-1.085c0.036-0.736,0.07-1.473,0.124-2.206c0.033-0.445,0.083-0.886,0.123-1.33 c0.058-0.646,0.11-1.293,0.182-1.935c0.053-0.47,0.122-0.937,0.182-1.406c0.078-0.611,0.151-1.223,0.241-1.831 c0.073-0.484,0.161-0.964,0.241-1.446c0.098-0.586,0.189-1.174,0.299-1.757c0.093-0.493,0.201-0.981,0.302-1.472 c0.116-0.566,0.227-1.134,0.354-1.696c0.112-0.496,0.24-0.987,0.36-1.481c0.135-0.55,0.264-1.103,0.409-1.65 c0.132-0.497,0.278-0.989,0.418-1.482c0.152-0.537,0.3-1.075,0.462-1.608c0.151-0.496,0.317-0.988,0.476-1.481 c0.17-0.523,0.335-1.047,0.514-1.566c0.17-0.491,0.353-0.978,0.531-1.465c0.188-0.514,0.372-1.03,0.569-1.54 c0.188-0.485,0.388-0.964,0.583-1.446c0.205-0.503,0.407-1.009,0.621-1.508c0.207-0.481,0.425-0.957,0.64-1.433 c0.221-0.491,0.44-0.984,0.67-1.47c0.225-0.475,0.461-0.944,0.694-1.415c0.238-0.48,0.473-0.961,0.719-1.436 c0.243-0.468,0.496-0.93,0.747-1.393c0.254-0.469,0.505-0.938,0.767-1.402c0.26-0.46,0.53-0.913,0.797-1.368 c0.27-0.458,0.538-0.917,0.817-1.371c0.277-0.451,0.563-0.895,0.848-1.341c0.286-0.447,0.57-0.894,0.864-1.336 s0.596-0.878,0.898-1.314c0.301-0.435,0.601-0.87,0.909-1.3c0.31-0.432,0.629-0.858,0.948-1.285 c0.316-0.423,0.631-0.846,0.954-1.263c0.326-0.421,0.66-0.836,0.994-1.252c0.331-0.412,0.663-0.823,1.001-1.229 c0.341-0.408,0.689-0.811,1.037-1.213c0.347-0.401,0.695-0.802,1.05-1.198c0.355-0.396,0.718-0.786,1.08-1.176 c0.362-0.389,0.724-0.776,1.093-1.158c0.37-0.384,0.747-0.762,1.125-1.139c0.377-0.377,0.756-0.752,1.14-1.123 c0.383-0.369,0.772-0.733,1.163-1.096c0.392-0.364,0.786-0.727,1.185-1.085c0.398-0.356,0.8-0.707,1.205-1.056 c0.406-0.351,0.815-0.7,1.228-1.044c0.411-0.342,0.826-0.679,1.244-1.014c0.421-0.338,0.845-0.673,1.273-1.004 c0.423-0.326,0.85-0.648,1.279-0.968c0.436-0.325,0.875-0.646,1.319-0.963c0.434-0.311,0.872-0.617,1.313-0.921 c0.452-0.311,0.906-0.618,1.364-0.921c0.445-0.294,0.894-0.585,1.345-0.872c0.467-0.297,0.937-0.59,1.41-0.878 c0.456-0.278,0.915-0.553,1.377-0.823c0.48-0.281,0.964-0.558,1.451-0.831c0.467-0.262,0.937-0.521,1.41-0.775 c0.495-0.266,0.994-0.527,1.496-0.785c0.476-0.245,0.954-0.486,1.436-0.723c0.379-0.186,0.762-0.366,1.145-0.547 c11.239,5.908,24.018,9.27,37.572,9.27c13.555,0,26.333-3.362,37.572-9.27c0.38,0.18,0.76,0.359,1.136,0.543 c0.488,0.24,0.971,0.484,1.453,0.731c0.496,0.255,0.99,0.513,1.48,0.776c0.478,0.257,0.953,0.519,1.425,0.784 c0.481,0.27,0.959,0.543,1.433,0.821c0.469,0.274,0.934,0.553,1.396,0.835c0.467,0.285,0.93,0.573,1.39,0.866 c0.458,0.291,0.912,0.585,1.363,0.884c0.453,0.299,0.902,0.603,1.348,0.91c0.445,0.307,0.888,0.616,1.327,0.93 c0.439,0.314,0.873,0.632,1.305,0.954c0.434,0.322,0.865,0.647,1.292,0.977c0.424,0.328,0.844,0.66,1.262,0.995 c0.42,0.337,0.838,0.676,1.252,1.02c0.411,0.342,0.817,0.689,1.221,1.038c0.407,0.351,0.812,0.704,1.212,1.063 c0.396,0.355,0.787,0.715,1.176,1.076c0.394,0.366,0.787,0.734,1.174,1.107c0.381,0.367,0.756,0.739,1.129,1.112 c0.38,0.38,0.76,0.761,1.133,1.147c0.366,0.38,0.727,0.764,1.086,1.15c0.366,0.393,0.731,0.787,1.089,1.186 c0.352,0.392,0.697,0.789,1.041,1.187c0.351,0.405,0.702,0.811,1.045,1.223c0.337,0.403,0.666,0.812,0.995,1.221 c0.336,0.418,0.672,0.835,1,1.259c0.322,0.415,0.635,0.836,0.949,1.257c0.32,0.428,0.64,0.857,0.952,1.291 c0.307,0.427,0.606,0.861,0.905,1.294c0.303,0.438,0.607,0.876,0.902,1.32c0.292,0.439,0.574,0.883,0.858,1.327 c0.287,0.449,0.575,0.897,0.854,1.351c0.276,0.449,0.542,0.905,0.81,1.359c0.27,0.458,0.542,0.915,0.803,1.378 c0.261,0.462,0.511,0.93,0.764,1.396c0.252,0.465,0.506,0.929,0.749,1.398c0.246,0.474,0.48,0.955,0.718,1.434 c0.233,0.471,0.47,0.941,0.695,1.417c0.23,0.486,0.448,0.977,0.668,1.467c0.216,0.479,0.435,0.955,0.642,1.438 c0.213,0.495,0.412,0.996,0.616,1.496c0.198,0.486,0.4,0.97,0.589,1.46c0.196,0.507,0.379,1.02,0.566,1.532 c0.179,0.489,0.362,0.976,0.532,1.469c0.18,0.521,0.346,1.048,0.516,1.573c0.159,0.491,0.324,0.98,0.474,1.475 c0.163,0.533,0.31,1.072,0.463,1.609c0.14,0.493,0.286,0.984,0.418,1.481c0.145,0.547,0.274,1.099,0.409,1.65 c0.121,0.493,0.248,0.985,0.36,1.481c0.127,0.562,0.237,1.129,0.354,1.694c0.101,0.491,0.209,0.98,0.302,1.474 c0.109,0.578,0.199,1.161,0.297,1.743c0.081,0.487,0.171,0.971,0.244,1.461c0.09,0.603,0.162,1.211,0.24,1.817 c0.061,0.473,0.131,0.943,0.184,1.418c0.072,0.642,0.124,1.289,0.182,1.935c0.04,0.444,0.09,0.885,0.123,1.33 c0.055,0.733,0.088,1.471,0.124,2.208c0.018,0.361,0.047,0.721,0.06,1.083c0.041,1.103,0.062,2.209,0.062,3.319v11.319v13.757 H98.121z M294.015,288.12c-0.196-2.436-0.478-4.857-0.836-7.263c-0.057-0.381-0.125-0.759-0.186-1.139 c-0.139-0.871-0.284-1.74-0.445-2.606c-0.085-0.456-0.178-0.91-0.269-1.365c-0.157-0.791-0.321-1.58-0.496-2.366 c-0.106-0.474-0.216-0.948-0.328-1.42c-0.183-0.772-0.375-1.541-0.575-2.308c-0.121-0.465-0.242-0.929-0.37-1.393 c-0.219-0.798-0.453-1.592-0.691-2.385c-0.126-0.418-0.246-0.837-0.377-1.254c-0.295-0.939-0.607-1.873-0.928-2.805 c-0.09-0.26-0.172-0.523-0.264-0.783c-0.422-1.195-0.865-2.383-1.33-3.564c-0.1-0.253-0.209-0.503-0.311-0.756 c-0.369-0.917-0.747-1.832-1.142-2.74c-0.175-0.403-0.36-0.801-0.54-1.202c-0.34-0.756-0.684-1.509-1.042-2.257 c-0.209-0.438-0.425-0.873-0.64-1.308c-0.351-0.71-0.71-1.417-1.077-2.12c-0.23-0.44-0.461-0.878-0.697-1.315 c-0.38-0.703-0.77-1.401-1.166-2.097c-0.238-0.418-0.473-0.836-0.716-1.251c-0.44-0.751-0.895-1.494-1.355-2.236 c-0.214-0.346-0.422-0.695-0.64-1.038c-0.685-1.079-1.387-2.15-2.113-3.209c-0.676-0.986-1.371-1.954-2.075-2.914 c-0.204-0.278-0.412-0.553-0.618-0.829c-0.541-0.723-1.09-1.437-1.647-2.145c-0.201-0.255-0.4-0.513-0.604-0.766 c-0.739-0.922-1.49-1.834-2.257-2.729c-0.1-0.116-0.203-0.229-0.303-0.345c-0.676-0.783-1.364-1.555-2.061-2.317 c-0.24-0.262-0.481-0.521-0.723-0.781c-0.618-0.663-1.245-1.318-1.879-1.964c-0.209-0.213-0.414-0.428-0.625-0.639 c-0.825-0.828-1.663-1.644-2.513-2.444c-0.175-0.165-0.355-0.325-0.531-0.489c-0.695-0.645-1.397-1.28-2.107-1.906 c-0.27-0.238-0.542-0.474-0.814-0.71c-0.708-0.611-1.423-1.212-2.146-1.804c-0.197-0.161-0.39-0.326-0.588-0.486 c-0.906-0.732-1.825-1.448-2.754-2.15c-0.232-0.175-0.468-0.345-0.701-0.518c-0.728-0.54-1.461-1.072-2.203-1.594 c-0.291-0.205-0.582-0.409-0.874-0.611c-0.828-0.571-1.663-1.131-2.507-1.679c-0.148-0.096-0.293-0.196-0.441-0.291 c-0.852-0.547-1.71-1.084-2.578-1.608c0.224-0.213,0.434-0.44,0.655-0.656c0.62-0.6,1.229-1.21,1.829-1.83 c0.335-0.346,0.668-0.693,0.996-1.045c0.655-0.7,1.293-1.414,1.923-2.137c0.268-0.307,0.537-0.612,0.8-0.924 c0.671-0.794,1.323-1.605,1.964-2.426c0.21-0.268,0.425-0.532,0.631-0.803c0.643-0.845,1.264-1.707,1.875-2.577 c3.902,0.573,7.834,0.863,11.754,0.863c13.555,0,26.333-3.362,37.572-9.271c30.855,14.618,50.548,45.373,50.548,79.631v25.074 H294.015z">
                      </path> 
                    </g> 
                    </g> 
                    </g>
                  </svg>
                  {/* <img src="/images/team.png" alt="team" className="h-16 w-16"/> */}
                </div>
              </div>
              <div className="flex justify-center">
                <div>
                  <h3 className="text-white  text-center mt-2 text-5xl font-semibold">55+</h3>
                  <h4 className="text-white text-center mb-2 text-xl tracking-tight uppercase font-light">Local Members</h4>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </section>
    </div>
  )
}
