import React from 'react'
import Heading from '../common/Heading'
import { POWERED_LIST } from '../utils/helper'

const PoweredBy = () => {
  return (
    <div id='nodes' className='pt-[58px] max-lg:pt-0'>
      <div className='max-w-[1349px] mx-auto px-4 mt-[58px]'>
        <Heading primaryText="Powered" text="By:" myClass="text-center pb-[68px] max-lg:pb-6 max-sm:pb-2" />
        <div className='flex flex-wrap -mx-3 justify-center'>
          {POWERED_LIST.map(function (item, i) {
            return <div key={i} className='w-1/4 max-xl:w-1/3 max-md:!w-1/2 max-sm:!w-full px-[10.5px] max-2xl:pt-[21px] max-sm:pt-4'>
              <div className='bg-gradient-to-r h-full from-white/20 to-white/10 p-[1px] rounded-[13px]'>
                <div className='bg-gradient-to-r px-5 from-gray to-darkGray h-[181px] max-sm:h-36 hover:bg-gradient-to-br cursor-pointer hover:from-purple hover:to-lightSky max-h-[181px] flex items-center justify-center py-[18px] rounded-[13px] hover:shadow-[0px_8px_30px_0px] hover:shadow-lightSky'>
                  <img src={item.image} alt={item.imageAlt} className={`${i === 0 ? "h-20 max-lg:h-14" : i === 1 ? "h-24 max-lg:h-16" : i === 2 ? "h-[65px] max-lg:h-12" : "h-11 max-lg:h-9"} object-cover pointer-events-none`} />
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default PoweredBy