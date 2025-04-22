import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className="bg-[#faf0e4] text-[#4B3A2F] px-4 sm:px-8 pt-16 pb-8 text-sm">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mb-12">
        <div>
          <img className='mb-6 w-32' src={assets.logo} alt="Logo" />
          <p className='max-w-md text-[#6B5B50] font-light'>
            Welcome to Haute-Hue — where curated luxury meets modern artistry. Explore timeless pieces designed for those who appreciate style with substance and sophistication.
          </p>
        </div>
        <div>
          <p className="text-lg sm:text-xl font-medium mb-4">Company</p>
          <ul className="flex flex-col gap-2 text-[#6B5B50]">
            <li className="hover:text-[#4B3A2F] cursor-pointer">Home</li>
            <li className="hover:text-[#4B3A2F] cursor-pointer">About Us</li>
            <li className="hover:text-[#4B3A2F] cursor-pointer">Collection</li>
            <li className="hover:text-[#4B3A2F] cursor-pointer">Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className='text-lg sm:text-xl font-medium mb-4'>Get In Touch</p>
          <ul className="flex flex-col gap-2 text-[#6B5B50]">
            <li>+91-98765-43210</li>
            <li>support@hautehue.com</li>
          </ul>
        </div>
      </div>
      <hr className='border-[#D2C6BC]' />
      <p className='pt-6 text-center text-[#6B5B50]'>
        © 2025 Haute-Hue. All Rights Reserved.
      </p>
    </div>
  )
}

export default Footer
