import React from 'react'
import { CloseQuotes, OpenQuotes } from '../utils/icons'

const GildedGames = () => {
  return (
      <div id='staking' className='bg-[url(./assets/images/webp/mountain.webp)] bg-cover bg-no-repeat py-[239px] max-lg:py-32 max-md:py-20'>
          <div className='px-4'>
              <p className='josefin text-[40px] max-lg:text-3xl max-sm:text-2xl max-sm:leading-9 max-lg:leading-11 leading-[62.4px] max-w-[940px] mx-auto text-center text-white relative'><span className='absolute -left-[78px] -top-[61px] max-lg:-top-[48px] max-lg:-left-8'><OpenQuotes myClass="max-lg:h-12" /></span>
              Gilded Games is a new type of gaming platform, partially owned and operated by its players. Earn Gild tokens by playing and use them to decide the future of the game! 
                  <span className='absolute right-[19%] max-lg:-bottom-8'><CloseQuotes myClass="max-lg:h-12" /></span></p>
          </div>
    </div>
  )
}

export default GildedGames