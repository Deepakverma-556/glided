import React, { useState, useEffect } from 'react'
import glidedLogo from "../assets/images/png/glided-logo.png"
import CustomButton from './CustomButton'
import { HEADER_LIST } from '../utils/helper'
import { Discord } from '../utils/icons'

const Header = () => {
    const [open, setOpen] = useState()
    useEffect(() => {
        const handleOverflow = () => {
            if (open && window.innerWidth < 1030) {
                document.body.classList.add("overflow-hidden");
            } else {
                document.body.classList.remove("overflow-hidden");
            }
        };
        handleOverflow();
        window.addEventListener("resize", handleOverflow);
        return () => {
            window.removeEventListener("resize", handleOverflow);
        };
    }, [open]);
    return (
        <div className='bg-black/80'>
            <div className='max-w-[1348px] px-4 mx-auto'>
                <div className='flex w-full items-center justify-between py-[19px] max-md:py-3 max-sm:py-2'>
                    <a href="#logo"><img src={glidedLogo} alt="glided-logo" className='h-[57.58px] pointer-events-none max-xl:h-12 max-md:!h-10 max-sm:!h-8' /></a>
                    <ul className='flex items-center gap-10 max-xl:gap-5 max-lg:hidden'>
                        {HEADER_LIST.map(function (item, i) {
                            return <li key={i}><a href={item.link} className='text-white josefin text-[22px] leading-[22px] max-xl:text-xl transition-all duration-300 hover:text-lightSky'>{item.title}</a></li>
                        })}
                        <li><CustomButton text="Discord" icon={<Discord />} myClass="bg-gradient-to-b from-purple to-lightSky hover:shadow-none gap-[10px] px-[34px] py-[13.7px]" /></li>
                    </ul>
                    <div
                        className={`lg:hidden z-50 cursor-pointer`}
                        onClick={() => setOpen(!open)}
                    >
                        <button className="overflow-hidden relative z-50 lg:hidden size-6 max-sm:h-5 flex flex-col justify-between items-center" >
                            <span className={`bg-white rounded-md w-6 h-0.5 block transition-all duration-300 ${open ? "translate-x-10" : ""}`}></span>
                            <span className={`bg-white rounded-md after:rounded-lg w-6 h-0.5 block relative after:bg-transparent after:absolute after:top-0 after:left-0 after:w-full after:h-0.5 after:transition-all after:duration-300 transition-all duration-300 ${open ? "rotate-45 after:rotate-90 after:!bg-white" : ""}`}></span>
                            <span className={`bg-white rounded-md w-6 h-0.5 block transition-all duration-300 ${open ? "-translate-x-10" : ""}`}></span>
                        </button>
                    </div>
                </div>
                <div className={`w-full h-full bg-black transition-all duration-500 left-0 lg:-top-full z-40 fixed flex flex-col justify-center items-center ${open ? "top-0 left-0" : "-top-full"
                    }`}>
                    <ul className='flex items-center flex-col gap-10 max-sm:gap-7'>
                        {HEADER_LIST.map(function (item, i) {
                            return <li key={i}><a onClick={() => setOpen(false)} href={item.link} className='text-white josefin text-[22px] leading-[22px] max-xl:text-xl max-sm:lg transition-all duration-300 hover:text-lightSky'>{item.title}</a></li>
                        })}
                        <li><CustomButton CustomOnClick={() => setOpen(false)} text="Discord" icon={<Discord />} myClass="bg-gradient-to-b from-purple to-lightSky gap-[10px] !px-[34px] !py-[13.7px]" /></li>
                    </ul>
                </div>
            </div >
        </div>
    )
}

export default Header