import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-4 text-center py-20 px-4 bg-[#faf0e4] text-[#4B3A2F] text-xs sm:text-sm md:text-base">
  <div>
    <img className="w-12 m-auto mb-5" src={assets.exchange_icon} alt="Exchange Icon" />
    <p className="font-semibold tracking-wide">Seamless Exchanges</p>
    <p className="text-[#7D6E63]">Effortless exchange process crafted for your convenience.</p>
  </div>
  <div>
    <img className="w-12 m-auto mb-5" src={assets.quality_icon} alt="Return Icon" />
    <p className="font-semibold tracking-wide">10-Day Return Assurance</p>
    <p className="text-[#7D6E63]">Experience worry-free shopping with easy returns in HauteHue.</p>
  </div>
  <div>
    <img className="w-12 m-auto mb-5" src={assets.support_img} alt="Support Icon" />
    <p className="font-semibold tracking-wide">Dedicated Support</p>
    <p className="text-[#7D6E63]">Our style advisors are here for you 24/7.</p>
  </div>
</div>

  )
}

export default OurPolicy