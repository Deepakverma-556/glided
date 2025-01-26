import React from 'react'
import Heading from '../common/Heading'
import { UNISWAP_LIST } from '../utils/helper'
import CustomButton from '../common/CustomButton'
import { Unicorn } from '../utils/icons'
import goldBox from "../assets/images/webp/gold-box.webp"

const Uniswap = () => {
  return (
    <div className='bg-[url("./assets/images/webp/uniswap-bg.webp")] bg-cover bg-no-repeat pt-[300px] pb-[220px] max-lg:py-16 max-md:py-10 max-sm:py-6 relative'>
      <div className='absolute h-[539px] rounded-tl-full rounded-bl-full max-lg:hidden bg-white/10 w-[50%] right-0 top-[25%]'></div>
      <div className='max-w-[1352px] mx-auto px-4 flex items-center justify-between max-sm:flex-wrap gap-10 max-sm:gap-14'>
        <div className='w-full'>
          <Heading text="Buy On" secondaryText="Uniswap" myClass="pb-[21px] max-md:pb-4 max-sm:text-center" />
          <ul className='list-disc pl-6'>
            {UNISWAP_LIST.map(function (item, i) {
              return <li key={i} className='josefin text-xl max-md:text-lg max-md:pb-2 max-sm:pb-1 leading-[25.5px] text-white pb-[11px]'>{item}</li>
            })}
          </ul>
          <CustomButton icon={<Unicorn/>} text="Buy Now" myClass="mt-[30px] max-md:mt-5 gap-[10px] px-[19.3px] py-[13.7px] bg-gradient-to-r from-purple to-lightSky hover:shadow-none transition-all duration-300 max-sm:mx-auto"/>
        </div>
        <img src={goldBox} alt="gold-box" className='h-[365px] max-lg:h-72 max-md:h-60 object-cover pointer-events-none mr-[188px] max-xl:mr-0 max-sm:mx-auto' />
      </div>
    </div>
  )
}

export default Uniswap