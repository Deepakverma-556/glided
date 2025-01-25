import React from 'react'
import Heading from '../common/Heading'
import Description from '../common/Description'
import gilded from "../assets/images/gif/gilded.gif"
import leftShadow from "../assets/images/png/left-shadow.png"
import rightShadow from "../assets/images/png/right-shadow.png"

const PlayToEarn = () => {
    return (
        <div id='presale' className='max-lg:pt-10 max-md:pt-7 max-sm:pt-5 pb-[110px] max-md:pb-16 max-sm:pb-8 overflow-hidden'>
            <div className='max-w-[1352px] px-4 mx-auto'>
                <Heading text="Play To" secondaryText="Earn" myClass="text-center" />
                <Description myClass="text-center pt-4 max-lg:pt-2 max-w-[1024px] mx-auto pb-8" text="Gilded World will be the first game released by Gilded Games. It is an MMORPG, browser based game that is unlike any other. We have taken inspiration from some of the most popular and successful MMORPG and RPG games and have boiled it down to the best online gameplay that people will actually want to play!" />
                <div className='relative'>
                    <div className='bg-gradient-to-r from-purple to-lightSky max-w-[1320px] mx-auto w-full rounded-[13px] p-[5px] max-sm:p-[3px] overflow-hidden relative z-20'>
                        <img src={gilded} alt="gilded" className='w-full rounded-[13px] max-h-[551px] object-cover pointer-events-none' />
                    </div>
                    <img src={leftShadow} alt="left-shadow" className='absolute -left-[38.5%] top-1/2 -translate-y-1/2 max-xl:hidden' />
                    <img src={rightShadow} alt="right-shadow" className='absolute -right-[39%] top-1/2 -translate-y-1/2 max-xl:hidden' />
                </div>
            </div>
        </div>
    )
}

export default PlayToEarn