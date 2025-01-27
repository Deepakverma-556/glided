import React, { useState, useEffect } from 'react'
import Header from '../common/Header'
import CustomButton from '../common/CustomButton';
import { MoneyInHand } from '../utils/icons';
const Hero = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const targetTime = new Date();
        targetTime.setHours(10, 0, 0, 0);

        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetTime - now;

            if (difference <= 0) {
                clearInterval(interval);
            } else {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / (1000 * 60)) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className='bg-[url(./assets/images/webp/glided-bg.webp)] bg-no-repeat bg-cover pb-[129px] max-md:pb-20 max-sm:pb-14'>
            <Header />
            <div className='max-w-[1320px] px-4 mx-auto pt-[254px] max-lg:pt-40 max-md:pt-20 max-sm:pt-14'>
                <h1 className='text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl max-sm:leading-12 max-md:leading-14 max-lg:leading-16 leading-[91.8px] text-white text-center max-w-[1100px] mx-auto'>There are games... And then
                    there are <span className='text-lightSky'>Glided</span> Games</h1>
                <p className='josefin font-semibold text-4xl max-md:text-3xl max-sm:text-2xl max-sm:pt-1 max-sm:leading-8 max-md:pt-2 leading-[45px] text-white text-center pt-5'><span className='text-lightSky'>{`${timeLeft.days}d`}</span> {`: ${timeLeft.hours}hr : ${timeLeft.minutes}min : ${timeLeft.seconds}sec`}</p>
                <p className='text-white josefin text-lg leading-[22.95px] text-center max-sm:text-base'>Remaining Presale Time</p>
                <div className='flex items-center gap-6 justify-center pt-[22px]'>
                    <CustomButton icon={<MoneyInHand/>} text="Presale" myClass="bg-gradient-to-r from-purple to-lightSky hover:shadow-none px-[33.13px] py-[14px] gap-[10px]"/>
                    <CustomButton text="Join Now" myClass="border border-white px-[33.42px] text-nowrap py-[13.34px] shadow-none hover:bg-lightSky hover:shadow-[0px_8px_30px_0px] hover:shadow-lightSky" />
                </div>
            </div>
        </div>
    )
}

export default Hero