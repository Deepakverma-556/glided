import React from 'react'
import Heading from '../common/Heading'
import Description from '../common/Description'
import hero from "../assets/images/webp/nft-hero.webp"

const Nft = () => {
  return (
      <div className='bg-[url(./assets/images/webp/nft-bg.webp)] bg-cover bg-no-repeat pt-[123px] max-lg:pt-0 pb-[194px] max-lg:py-12'>
          <div className='max-w-[1238px] mx-auto px-4 flex items-center justify-between max-md:flex-wrap'>
              <div>
                  <Heading myClass="pb-4 max-lg:pb-2 max-md:text-center" primaryText="NFT" text="Utility" />
                  <Description myClass="md:max-w-[649px] max-md:text-center" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin curabitur iaculis id cursus dignissim. 
                  Volutpat placerat volutpat commodo id ultricies volutpat vestibulum. Egestas venenatis dignissim fames maecenas. Blandit orci consectetur mauris, ipsum viverra quisque. 
                  Vulputate sollicitudin tellus eget consequat lectus dignissim integer in vitae. 
                  Commodo integer dis tortor cras maecenas sit. Et nunc et platea elementum, cursus morbi. Placerat molestie nibh parturient lectus magna sed fusce diam urna. Quam magna duis imperdiet posuere iaculis."/>
              </div>
        <img src={hero} alt="nft-hero" className='h-[639px] max-lg:h-[550px]  max-md:h-[400px] max-md:mx-auto max-md:pt-9 max-sm:pt-6 pointer-events-none' />
          </div>
    </div>
  )
}

export default Nft