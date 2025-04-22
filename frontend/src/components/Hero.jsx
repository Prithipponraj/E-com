import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
<div className='flex flex-col sm:flex-row border border-gary-400'>
      {/* Hero Left side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
  <div className="text-[#414141] px-4 sm:px-8">
    <h1 className="prata-regular text-4xl md:text-5xl lg:text-6xl leading-snug sm:py-3">
      Elevate Your Style
    </h1>

    <p className="mt-4 text-sm md:text-base max-w-sm text-[#555]">
      Discover the latest trends with HauteHue — luxury fashion made accessible.
    </p>

    <button
      className="mt-6 px-6 py-3 bg-[#EAD7C3] text-[#414141] font-semibold text-sm rounded-md shadow hover:scale-105 transition duration-300 ease-in-out"
    >
      Shop Now
    </button>
  </div>
</div>

      {/* Hero Right side */}
      <img src={assets.hero_img} alt="" className="w-full sm:w-1/2" />
    </div>
  )
}

export default Hero