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
          <div>
            <div>
              <div>
                <svg 
                  height="64px" 
                  width="64px" 
                  version="1.1" 
                  id="Capa_1" 
                  xmlns="http://www.w3.org/2000/svg" 
                  xmlnsXlink="http://www.w3.org/1999/xlink" 
                  viewBox="0 0 48.401 48.401" 
                  xmlSpace="preserve" 
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier"> <g> <g> 
                  <path style={{fill: '#000000'}}  d="M16.36,18.515l-3.17,3.17c-0.586,0.588-0.979,1.354-0.979,2.208v1.422c0,0.553,0.448,1,1,1h4.838 c0.552,0,1-0.422,1-0.942c0-0.522-0.448-0.944-1.001-0.944h-2.629c-0.552,0-1-0.12-1-0.267c0-0.149,0-0.268,0-0.268 c0-0.32,0.124-0.623,0.338-0.819l3.17-3.169c0.587-0.588,0.961-1.354,0.961-2.208v-1.532c0-1.548-1.46-2.813-3.259-2.813 c-1.798,0-3.258,1.264-3.258,2.813v0.623c0,0.345,0.447,0.624,1,0.624h0.208c0.552,0,1-0.279,1-0.624c0-0.344,0-0.623,0-0.623 c0-0.498,0.481-0.926,1.05-0.926c0.588,0,1.051,0.428,1.051,0.926v1.532C16.68,18.017,16.556,18.302,16.36,18.515z"></path> <path style={{fill: '#000000'}} d="M27.134,13.494h-0.207c-0.553,0-1.231,0.384-1.516,0.858l-4.064,6.779 c-0.283,0.474-0.514,1.281-0.514,1.802c0,0.52,0.447,0.943,1,0.943h3.091c0.554,0,1,0.447,1,1v0.439c0,0.553,0.447,1,1,1h0.209 c0.553,0,1-0.446,1-1v-0.439c0-0.553,0.158-1,0.354-1c0.198,0,0.356-0.422,0.356-0.943c0-0.522-0.158-0.945-0.355-0.945 c-0.195,0-0.355-0.447-0.355-1v-6.494C28.134,13.941,27.688,13.494,27.134,13.494z M25.925,20.988c0,0.553-0.446,1-1,0.999h-0.688 c-0.552,0-0.771-0.385-0.49-0.86l1.669-2.82c0.281-0.474,0.51-0.413,0.51,0.14L25.925,20.988L25.925,20.988z"></path> <path style={{fill: '#000000'}} d="M31.424,11.762c-0.381,0-0.689,0.447-0.689,1v6.635c0,0.553,0.309,1,0.689,0.999 c0.381,0,0.69-0.447,0.69-1v-3.401c0-0.324,0.312-0.576,0.685-0.576c0.371,0,0.684,0.252,0.684,0.576v3.401 c0,0.553,0.309,1,0.689,1c0.379,0,0.688-0.447,0.688-1v-3.401c0-0.935-0.923-1.691-2.062-1.691c-0.123,0-0.24,0.015-0.352,0.04 c-0.191,0.044-0.333-0.331-0.333-0.884v-0.698C32.114,12.209,31.804,11.762,31.424,11.762z"></path> 
                  <path style={{fill:'#000000'}}  d="M47.463,25.801l-1.977-0.617c0.195-1.897,0.16-3.814-0.129-5.721 C43.487,7.105,31.913-1.427,19.553,0.444C7.197,2.315-1.335,13.891,0.536,26.249c0.214,1.408,0.554,2.769,1.006,4.069 c0.365,1.043,1.186,1.748,1.734,1.617c0.547-0.131,0.598-1.045,0.225-2.084c-0.447-1.244-0.78-2.549-0.986-3.904 C0.808,14.682,8.587,4.128,19.854,2.423c11.267-1.706,21.819,6.073,23.526,17.34c0.241,1.603,0.297,3.216,0.164,4.815 c0,0-0.826-0.258-1.846-0.576c-1.021-0.318-1.648,0.299-1.406,1.375l1.309,5.826c0.242,1.076,1.098,1.344,1.908,0.596l4.392-4.047 C48.713,27.003,48.515,26.13,47.463,25.801z"></path> <path style={{fill: '#000000'}} d="M46.551,41.784c0.054-0.286,0.027-0.589-0.102-0.881c-0.866-1.956-3.608-6.686-10.331-8.334 c-3.082-0.758-7.685-1.661-12.108-1.661l-0.453,0.003c-6.573,0.098-12.463,1.432-12.65,1.477 c-0.206,0.033-5.076,0.869-8.325,4.352l0.012,0.012c-0.562,0.469-1.082,1.321-1.314,1.738l-0.02-0.013 c-0.431,0.713-0.754,1.413-0.988,2.14c-0.094,0.293-0.09,0.59-0.014,0.867c-0.14,0.241-0.228,0.517-0.23,0.813L0,45.834 c-0.008,0.913,0.728,1.664,1.645,1.674l10.928,0.09h0.009c0.909,0,1.653-0.738,1.661-1.646l0.028-3.538 c0.002-0.277-0.071-0.535-0.19-0.767c0.053-0.076,0.116-0.15,0.157-0.228c0.152-0.291,0.882-1.258,3.875-1.442 c0.96-0.06,2.111-0.089,3.421-0.089c3.779,0,7.694,0.25,7.733,0.253l0.122,0.001c0.407,0,2.446,0.072,2.576,1.493 c0.015,0.163,0.057,0.314,0.109,0.46c-0.188,0.279-0.297,0.615-0.286,0.977l0.117,3.543c0.033,0.896,0.763,1.599,1.659,1.599 l11.745-0.386c0.912-0.034,1.63-0.802,1.6-1.712l-0.117-3.539C46.782,42.284,46.692,42.017,46.551,41.784z M12.244,45.595 L2.002,45.511l0.022-2.856l10.242,0.084L12.244,45.595z M29.405,38.144c-0.003,0-0.007,0-0.01,0 c-0.039-0.002-4.016-0.257-7.862-0.257c-1.351,0-2.544,0.031-3.544,0.093c-3.598,0.223-4.99,1.489-5.525,2.514 c-0.016,0.03-0.061,0.072-0.016,0.072L2.43,40.557c0.149-0.346,0.329-0.69,0.54-1.042c0.139-0.197,0.84-1.129,1.035-1.367 l0.042-0.044c2.774-2.975,7.145-3.736,7.248-3.756c0.059-0.014,5.929-1.344,12.292-1.438l0.424-0.003 c4.224,0,8.656,0.872,11.632,1.604c5.107,1.253,7.564,4.511,8.606,6.442l-10.327,0.229C33.553,38.948,31.289,38.144,29.405,38.144 z M33.892,46.202l-0.095-2.856l11.007-0.36l0.095,2.854L33.892,46.202z"></path> 
                  </g> </g> </g>
                </svg>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <svg 
                  fill="#000000"
                  height="64px" 
                  width="64px" 
                  version="1.1" 
                  id="Capa_1" 
                  xmlns="http://www.w3.org/2000/svg" 
                  xmlnsXlink="http://www.w3.org/1999/xlink" 
                  viewBox="0 0 511 511" xmlSpace="preserve">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                      <g> 
                        <path 
                          d="M471.5,28h-432C17.72,28,0,45.72,0,67.5v256C0,345.28,17.72,363,39.5,363h176c4.142,0,7.5-3.358,7.5-7.5 s-3.358-7.5-7.5-7.5h-176C25.991,348,15,337.009,15,323.5v-256C15,53.991,25.991,43,39.5,43h432c13.509,0,24.5,10.991,24.5,24.5 v256c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-256C511,45.72,493.28,28,471.5,28z"></path> 
                          <path d="M63.5,307h152c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-152c-4.142,0-7.5,3.358-7.5,7.5S59.358,307,63.5,307z"></path> <path d="M151,155.5v-32c0-12.958-10.542-23.5-23.5-23.5h-48C66.542,100,56,110.542,56,123.5v32c0,12.958,10.542,23.5,23.5,23.5h48 C140.458,179,151,168.458,151,155.5z M71,155.5V147h8.5c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5H71v-8.5 c0-4.687,3.813-8.5,8.5-8.5H96v49H79.5C74.813,164,71,160.187,71,155.5z M127.5,164H111v-49h16.5c4.687,0,8.5,3.813,8.5,8.5v8.5 h-8.5c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h8.5v8.5C136,160.187,132.187,164,127.5,164z"></path> <path d="M56,251.5c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-16c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5V251.5z"></path>
                          <path d="M80,235.5v16c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-16c0-4.142-3.358-7.5-7.5-7.5S80,231.358,80,235.5z"></path> <path d="M104,235.5v16c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-16c0-4.142-3.358-7.5-7.5-7.5S104,231.358,104,235.5z"></path> <path d="M128,235.5v16c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-16c0-4.142-3.358-7.5-7.5-7.5S128,231.358,128,235.5z"></path> <path d="M175,251.5v-16c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v16c0,4.142,3.358,7.5,7.5,7.5S175,255.642,175,251.5z"></path> <path d="M199,251.5v-16c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v16c0,4.142,3.358,7.5,7.5,7.5S199,255.642,199,251.5z"></path> <path d="M215.5,228c-4.142,0-7.5,3.358-7.5,7.5v16c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-16 C223,231.358,219.642,228,215.5,228z"></path> <path d="M247,251.5v-16c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v16c0,4.142,3.358,7.5,7.5,7.5S247,255.642,247,251.5z"></path> <path d="M415.5,179c21.78,0,39.5-17.72,39.5-39.5S437.28,100,415.5,100h-48c-21.78,0-39.5,17.72-39.5,39.5s17.72,39.5,39.5,39.5 H415.5z M343,139.5c0-13.509,10.991-24.5,24.5-24.5h48c13.509,0,24.5,10.991,24.5,24.5S429.009,164,415.5,164h-48 C353.991,164,343,153.009,343,139.5z"></path> <path d="M473.781,274.948c-1.705-1.179-3.822-1.599-5.848-1.164c-6.816,1.47-13.691,2.216-20.434,2.216 c-33.301,0-63.826-16.915-81.652-45.247c-1.373-2.182-3.77-3.506-6.348-3.506s-4.975,1.324-6.348,3.506 C335.326,259.085,304.801,276,271.5,276c-6.742,0-13.617-0.746-20.434-2.216c-2.024-0.436-4.143-0.016-5.848,1.164 c-1.705,1.179-2.846,3.012-3.151,5.062c-1.372,9.2-2.067,18.449-2.067,27.49c0,78.615,49.25,152.258,117.106,175.108 c0.776,0.261,1.585,0.392,2.394,0.392s1.617-0.131,2.394-0.392C429.75,459.758,479,386.115,479,307.5 c0-9.041-0.695-18.29-2.067-27.49C476.627,277.959,475.486,276.127,473.781,274.948z M285.252,407.035 C265.744,377.584,255,342.235,255,307.5c0-5.801,0.313-11.699,0.932-17.616c5.206,0.742,10.417,1.116,15.568,1.116 c30.881,0,59.683-12.584,80.5-34.458v208.044C326.04,453.367,302.616,433.248,285.252,407.035z M433.748,407.035 c-17.364,26.213-40.787,46.332-66.748,57.552V256.542C387.817,278.416,416.619,291,447.5,291c5.151,0,10.362-0.375,15.568-1.116 c0.619,5.917,0.932,11.815,0.932,17.616C464,342.235,453.256,377.584,433.748,407.035z">
                        </path> 
                      </g> 
                    </g>
                </svg>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <svg 
                  fill="#000000" 
                  width="64px" 
                  height="64px" 
                  viewBox="0 0 512 512" 
                  data-name="Layer 1" 
                  id="Layer_1" 
                  xmlns="http://www.w3.org/2000/svg" 
                  stroke="#000000" 
                  strokeWidth="1.024"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0">
                  </g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><path d="M487.85,31.8a6,6,0,0,0-3.1-4.4,6.08,6.08,0,0,0-5.39-.1C357.74,86,272.65,150.37,224.8,219.43c-7.06-7.19-74.09-72.5-204-91.25A6,6,0,0,0,14,134.07c0,2.75,1.73,276,211.61,350.43a5.79,5.79,0,0,0,.91.16,4.44,4.44,0,0,0,.52.15h.05c.89.08,5.35.46,12.57.46,31.23,0,113.69-7,177.79-74.72C490,333.84,513.73,206.41,487.85,31.8ZM26.13,141.05c125.63,20.18,190.09,86.64,190.74,87.31.43.46,1.07.43,1.6.72q-22.74,35.6-32.33,72.79C136.57,232,71.42,180.21,70.74,179.66A6,6,0,0,0,63.35,189c.71.54,70.15,55.74,119.26,128.68-12.45,68.95,12.47,122.43,28.53,148.18C45,392.82,27.85,182.08,26.13,141.05ZM408.91,402.24c-64.49,68.27-151.14,71.48-174.62,71,4.47-33,31.58-191.45,149.71-295.59a6,6,0,1,0-7.89-8.94c-113,99.66-144.85,247.42-152.37,294.56-14.94-23.06-43.32-78.39-28.47-149.07,20.87-99.34,115.72-191,282-272.59C500.63,208.16,477.65,329.47,408.91,402.24Z"></path></g></svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
