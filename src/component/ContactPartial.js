import React from 'react'
import { Link } from 'react-router-dom'
import { SmoothScrolling } from './SmoothScrolling'

export const ContactPartial = () => {
  return (
    <div className="relative isolate overflow-hidden py-24 md:py-64 sm:py-32">
      <div>
        <img 
          src="/images/leaf.jpg" 
          alt="leaf"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div className="flex justify-end mr-2 md:mr-24">
          <div className="bg-white rounded-3xl w-96 h-1/2 px-12 py-16">
            <div>
              <div>
                <h3>Location</h3>
              </div>
              <div>
                <h2>Soumppou Kaffo Farm</h2>
                <h4>Big Dream Farm</h4>
                <p>Big Dream Farm products can be found in main cities of following places.</p>
                <div className="flex">
                  <div>
                    <div className="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#008000" className="w-16 h-16">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                      <div>
                        <h4>New York, USA:</h4>
                        <p>
                          299 Park Avenue New York,
                          New York 10171, USA.
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#008000" className="w-16 h-16">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                      <div>
                        <h4>Philadelphia, USA:</h4>
                        <p>
                          299 Park Avenue New York,
                          New York 10171, USA.
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#008000" className="w-16 h-16">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                      <div>
                        <h4>London, UK:</h4>
                        <p>
                          30 Stamford Street, Base Way,
                          London 5478, UK.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
