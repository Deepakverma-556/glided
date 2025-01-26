import React from 'react'
import Heading from '../common/Heading'
import { ROADMAP_LIST } from '../utils/helper'

const Roadmap = () => {
  const year = new Date().getFullYear();
  return (
    <div className='relative py-4 pt-[92px] max-sm:pt-16 pb-[75px]'>
      <Heading gradientText="Road" text="map" myClass="text-center pb-24 max-lg:pb-20 max-md:pb-16 max-sm:pb-12" />
      <div className='border-t-2 max-[925px]:hidden border-white/20 border-dashed max-2xl:w-[25%] max-[1921px]:w-[33%] w-[44%] absolute right-0'></div>
      <div className='max-w-[1350px] mx-auto px-4 max-[925px]:flex'>
        <div className='border-t-2 border-white/20 relative w-[77%] max-[1320px]:w-[80%] max-[925px]:border-l-2 max-[925px]:h-[580px] max-md:h-[470px] max-sm:h-[400px] max-[925px]:w-0 max-[925px]:ml-8'>
          <div className='w-[65px] absolute h-[62px] max-md:size-12 left-0 top-1/2 -translate-y-1/2 max-[925px]:top-0 max-[925px]:-translate-x-1/2 rounded-full bg-gradient-to-r from-purple to-lightSky shadow-[0px_0px_63.22px_0px] shadow-lightSky'></div>
          <div className='w-[53px] absolute h-[50px] max-md:size-12 left-[52%] top-1/2 -translate-y-1/2 max-[925px]:top-[57%] max-[925px]:-translate-x-1/2 rounded-full bg-gradient-to-r from-purple to-lightSky shadow-[0px_0px_63.22px_0px] shadow-lightSky'></div>
          <div className='w-[53px] absolute h-[50px] max-md:size-12 right-0 top-1/2 -translate-y-1/2 rounded-full max-[925px]:top-[560px] max-md:top-[460px] max-sm:top-[390px] max-[925px]:-left-7 bg-gradient-to-r from-purple to-lightSky shadow-[0px_0px_63.22px_0px] shadow-lightSky'></div>
        </div>
        <div className='flex justify-between max-w-[1210px] gap-10 max-[925px]:gap-16 max-sm:gap-11 max-[925px]:flex-col'>
          {ROADMAP_LIST.map(function (item, i) {
            return <div key={i} className={`${i === 0 ? "pl-3 max-[925px]:pl-0" : i === 1 ? "pl-12 max-[925px]:pl-0" : "pr-2 max-[925px]:pr-0"} max-[925px]:pl-20 max-sm:pl-14 pt-[69px] max-[925px]:pt-0`}>
              <p className='font-semibold text-lg max-md:text-base leading-6 text-white'>{item.phase}</p>
              <h2 className='font-semibold text-4xl leading-[46.44px] max-sm:leading-8 text-white max-md:text-2xl'>{item.title} {year}</h2>
              <ul className='list-disc pl-6 pt-3 max-md:pt-0'>
                <li className='montserrat text-lg max-md:text-base max-md:pb-0 leading-[32.4px] text-white/70 pb-3'>{item.optionOne}</li>
                <li className='montserrat text-lg max-md:text-base max-md:pb-0 leading-[32.4px] text-white/70 pb-3'>{item.optionTwo}</li>
                <li className={`${i === 1 ? "hidden" : ""} max-md:text-base max-md:pb-0 montserrat text-lg leading-[32.4px] text-white/70 pb-3`}>{item.optionThree}</li>
                <li className={`${i === 1 ? "hidden" : ""} max-md:text-base max-md:pb-0 montserrat text-lg leading-[32.4px] text-white/70 pb-3`}>{item.optionFour}</li>
              </ul>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Roadmap