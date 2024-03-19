import React from 'react'

export const HomePartial = () => {
  return (
    <div>
        <div className="grid lg:grid-cols-2 gap-4 px-4 py-32 md:px-24">
            <div className="">
                <img 
                    src="/images/fenced-in-sheep.jpg"
                    alt=""
                    className=""
                />
            </div>
            <div className="lg:pl-16 xl:flex xl:items-center">
                <div>
                    <div className="py-2 lg:text-center">
                        <h3 className="text-green-900 text-3xl font-semibold">Big Dream Farm</h3>
                        <h6 className="font-bold text-green-900">Healthy Food Source</h6>    
                    </div>
                    <p className="text-green-950 text-xl tracking-wider font-light leading-7">
                        We produce lots of vegetables in our Farm, you will get everything Fresh. 
                        Also, our poultry provides weekly supply to our local stores. 
                        We rely on healthy methods to nurture our lambs. 
                        We are currently serving our community with halal meat every Eid. 
                        Also, for Gardening, our farmers are skilled, 
                        they understand very well how to grow organic foods.  
                    </p>
                    <p className="py-2 text-green-950 text-xl tracking-wider font-light leading-7">
                        We are proud to be producing and raising much of the food for sale in the community from the farm. 
                        It is very labour intensive and not good for 'economies of scale' to have many small enterprises but we are working our way towards
                    </p>
                </div>
                
            </div>
        </div>
    </div>
  )
}
