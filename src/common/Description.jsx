import React from 'react'

const Description = ({ text, myClass }) => {
    return (
        <p className={`${myClass} text-xl leading-8 text-white/70 max-lg:text-lg max-md:leading-7 max-md:text-base`}>{text}</p>
    )
}

export default Description