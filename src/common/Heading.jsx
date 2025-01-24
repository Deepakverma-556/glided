import React from 'react'

const Heading = ({ primaryText, secondaryText, gradientText, text, myClass }) => {
    return (
        <h2 className={`${myClass} josefin font-bold text-5xl max-md:text-4xl max-md:leading-9 max-sm:text-3xl leading-[61.2px] text-white`}>
            <span className='bg-gradient-to-r from-darkPurple to-blue bg-clip-text text-transparent'>{primaryText}</span> <span className='bg-gradient-to-r from-darkPurple to-blue bg-clip-text text-transparent'>{gradientText}</span>{text} <span className='bg-gradient-to-r from-purple to-lightSky bg-clip-text text-transparent'>{secondaryText}</span>
        </h2>
    )
}

export default Heading