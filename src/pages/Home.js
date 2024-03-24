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
          <div className="bg-gray-200 grid place-items-center md:grid-cols-2 gap-2">
            <div className="">
              <div className="rounded-full bg-gray-100 h-10 w-10">
                <img src="/images/crop.png" alt="crop" className="h-8 w-8"/>
              </div>
              <div>
                <h3>23+</h3>
                <h4>Products</h4>
              </div>
              <div>
                <img src="/images/stars.png" alt="stars" className="h-16 w-16"/>
              </div>
              <div>
                <h3>10+</h3>
                <h4>Years of Experience</h4>
              </div>
            </div>
            
            <div>
            <div>
                <img src="/images/satisfaction.png" alt="satisfaction" className="h-16 w-16"/>
              </div>
              <div>
                <h3>1500+</h3>
                <h4>Satisfied Clients</h4>
              </div>
              <div>
                <svg 
                  fill="#ffffff" 
                  height="88px" 
                  width="88px" 
                  version="1.1" 
                  id="Layer_1" 
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink" 
                  viewBox="0 0 512 512" 
                  xmlSpace="preserve" 
                  stroke="#ffffff" 
                  stroke-width="0.00512" 
                  transform="rotate(0)"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#ffffff" strokeWidth="8.192"></g>
                  <g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M255.997,159.418c36.473,0,66.145-29.673,66.145-66.145s-29.673-66.145-66.145-66.145 c-36.473,0-66.145,29.673-66.145,66.145C189.852,129.744,219.524,159.418,255.997,159.418z M255.997,59.059 c18.864,0,34.212,15.347,34.212,34.212s-15.347,34.212-34.212,34.212s-34.212-15.347-34.212-34.212 C221.785,74.407,237.133,59.059,255.997,59.059z"></path> 
                  <path d="M149.327,318.735h213.341c8.818,0,15.967-7.149,15.967-15.967c0-67.623-55.015-122.637-122.637-122.637 S133.36,235.145,133.36,302.768C133.36,311.586,140.509,318.735,149.327,318.735z M345.293,286.801H166.701 C184.387,187.61,327.625,187.71,345.293,286.801z"></path> 
                  <path d="M320.438,380.023l-34.632-5.033l-15.488-31.381c-5.845-11.843-22.788-11.851-28.636,0l-15.488,31.381l-34.632,5.033 c-13.069,1.899-18.311,18.011-8.849,27.235l25.059,24.427l-5.916,34.492c-2.233,13.016,11.471,22.982,23.167,16.832 l30.976-16.284l30.976,16.284c11.625,6.112,25.415-3.727,23.167-16.832l-5.916-34.492l25.059-24.427 C338.744,398.039,333.515,381.924,320.438,380.023z M273.2,439.688c-18.505-9.727-17.033-9.129-34.398,0 c3.329-19.407,4.382-18.082-10.63-32.715c19.495-2.833,18.551-1.42,27.829-20.219c9.251,18.745,8.308,17.383,27.829,20.219 C268.861,421.563,269.865,420.246,273.2,439.688z"></path> <path d="M142.55,380.023l-34.632-5.033L92.43,343.609c-5.845-11.843-22.788-11.851-28.636,0l-15.487,31.381l-34.632,5.033 c-13.069,1.899-18.311,18.011-8.849,27.234l25.06,24.427l-5.916,34.492c-2.233,13.016,11.471,22.982,23.167,16.832l30.976-16.285 l30.976,16.285c11.624,6.112,25.415-3.727,23.167-16.832l-5.916-34.492l25.059-24.427 C160.856,398.039,155.627,381.924,142.55,380.023z M95.312,439.688c-18.073-9.501-16.325-9.501-34.398,0 c3.33-19.408,4.382-18.081-10.63-32.715c19.494-2.833,18.551-1.419,27.829-20.219c9.251,18.745,8.308,17.382,27.829,20.219 C91.842,420.717,91.767,419.026,95.312,439.688z"></path> 
                  <path d="M498.325,380.023l-34.632-5.033l-15.487-31.381c-5.845-11.843-22.788-11.851-28.636,0l-15.488,31.381l-34.632,5.033 c-13.069,1.899-18.311,18.011-8.849,27.235l25.061,24.427l-5.916,34.492c-2.233,13.016,11.47,22.981,23.167,16.832l30.976-16.285 l30.976,16.285c11.625,6.112,25.415-3.727,23.167-16.832l-5.916-34.492l25.059-24.427 C516.63,398.039,511.402,381.924,498.325,380.023z M451.088,439.688c-18.507-9.729-16.943-9.177-34.398,0 c3.329-19.407,4.382-18.082-10.63-32.715c20.686-3.006,19.1-2.53,27.829-20.219c9.25,18.745,8.307,17.382,27.829,20.219 C446.748,421.564,447.753,420.247,451.088,439.688z"></path> </g> </g> </g> </g>
                </svg>
                {/* <img src="/images/team.png" alt="team" className="h-16 w-16"/> */}
              </div>
              <div>
                <h3>55+</h3>
                <h4>Local Members</h4>
              </div>
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
