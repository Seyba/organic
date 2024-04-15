import React from 'react'
export const ContactPartial = () => {
  return (
    <div className="relative isolate overflow-hidden py-14 md:py-24 sm:py-12">
      <div>
        <img 
          src="/images/leaf.jpg" 
          alt="leaf"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div className="flex justify-end ml-3 md:ml-0 mr-3 md:mr-24 ">
          <div className="bg-white rounded-3xl w-96 h-1/2 px-12 py-16">
            <div>
              <div className="">
                <h3 className="text-xl font-semibold text-green-950 leading-10">Location</h3>
              </div>
              <div>
                <h2 className="text-2xl py-4 text-green-800 tracking-tight font-semibold">Big Dream Farm</h2>
                
                <p className="text-lg py-2 font-thin leading-7 tracking-wide">Big Dream Farm products can be found in main cities of following places.</p>
                <div className="flex">
                  <div>
                    <div className="md:flex md:items-center block">
                      <div className="mr-0 md:mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"   viewBox="0 0 24 24" strokeWidth={1.5} stroke="#008000"  className="w-16 h-16">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                      </div>
                      <div className="py-2">
                        <h4 className="text-lg font-bold text-green-800">New York, USA:</h4>
                        <p className="text-lg py-2 font-thin leading-7 tracking-wide">
                          381 E 169th St Bronx, NY 10456, USA.
                        </p>
                      </div>
                    </div>
                    
                    <div className="md:flex md:items-center block">
                      <div className="mr-0 md:mr-4">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          strokeWidth={1.5} 
                          stroke="#008000" 
                          className="w-16 h-16"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                      </div>
                      <div className="py-2">
                        <h4 className="text-lg font-bold text-green-800">New York, USA:</h4>
                        <p className="text-lg py-2 font-thin leading-7 tracking-wide">
                          49 Washburn Farm Rd, Saugerties, NY 12477
                          United States.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
