import React from 'react'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div className="bg-[#faf0e4] text-[#3a2e2e] font-parata">
      <div className="text-center text-4xl font-semibold pt-16 tracking-wider">
        Get in Touch with Haute-Hue
      </div>

      <div className="my-16 flex flex-col justify-center items-center md:flex-row gap-14 px-6 md:px-20">
        <img
          className="w-full md:max-w-[480px] rounded-xl shadow-lg"
          src={assets.contact_img}
          alt="Haute-Hue boutique"
        />
        <div className="flex flex-col justify-center items-start gap-6 max-w-lg">
          <div>
            <p className="text-2xl font-medium mb-2">Flagship Boutique</p>
            <p className="text-[#5f4e4e] leading-relaxed">
              1024 Avenue des Champs-Élysées<br />
              Paris, Île-de-France, 75008
            </p>
          </div>
          <div>
            <p className="text-[#5f4e4e]">
              Tel: (123) 456-7890<br />
              Email: support@hautehue.com
            </p>
          </div>
          <div>
            <p className="text-2xl font-medium mb-2">Careers at Haute-Hue</p>
            <p className="text-[#5f4e4e]">
              Join a team that's redefining luxury fashion through timeless design.
            </p>
          </div>
          <button className="border border-[#3a2e2e] px-8 py-3 text-sm tracking-wide hover:bg-[#3a2e2e] hover:text-white transition-all duration-300 rounded-full">
            Explore Open Roles
          </button>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  )
}

export default Contact
