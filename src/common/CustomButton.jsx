import React from 'react'

const CustomButton = ({ icon, text, myClass, CustomOnClick }) => {
    return (
        <button onClick={CustomOnClick} className={`${myClass} text-white transition-all duration-300 flex items-center cursor-pointer rounded-full max-md:text-xl max-md:px-5 max-md:py-3 max-sm:text-lg max-sm:py-2 max-sm:px-3 shadow-[0px_8px_30px_0px] shadow-lightSky josefin text-2xl leading-6`}>{icon}{text}</button>
    )
}

export default CustomButton