import React from 'react'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div className="text-gray-700 dark:text-gray-300 font-[Parata]">
      <div className="text-center text-4xl font-semibold pt-16 tracking-wider">
        About Haute-Hue
      </div>

      <div className='my-12 flex flex-col md:flex-row gap-16 px-6'>
        <img className='w-full md:max-w-[500px] rounded-2xl shadow-lg' src={assets.about_img} alt="About Haute-Hue" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4">
          <p className="leading-relaxed">
            Haute-Hue isn't just a store — it's a statement. Founded on the principles of timeless elegance and modern sophistication,
            we offer curated fashion and lifestyle essentials that celebrate individuality with a touch of refined luxury.
          </p>
          <p className="leading-relaxed">
            Our collections are designed for those who appreciate quality, detail, and distinction — from contemporary silhouettes
            to wardrobe classics, each piece is crafted to elevate your everyday style effortlessly.
          </p>
          <b className='text-gray-900 dark:text-white text-lg'>Our Ethos</b>
          <p className="leading-relaxed">
            At Haute-Hue, we believe luxury should feel personal. We blend premium craftsmanship with seamless technology
            to bring you a shopping experience that's both elevated and effortless.
          </p>
        </div>
      </div>

      <div className="text-center text-4xl font-semibold pt-16 pb-16 tracking-wider">
        Why Haute-Hue
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 mb-24 text-sm">
        <div className="border rounded-2xl p-8 shadow-md bg-white dark:bg-gray-900 hover:shadow-xl transition">
          <b className="text-lg text-gray-800 dark:text-white">Curated Elegance</b>
          <p className="text-gray-600 dark:text-gray-400 mt-3">
            Every collection is hand-selected by style curators to reflect a balance of trend and timelessness.
          </p>
        </div>
        <div className="border rounded-2xl p-8 shadow-md bg-white dark:bg-gray-900 hover:shadow-xl transition">
          <b className="text-lg text-gray-800 dark:text-white">Effortless Experience</b>
          <p className="text-gray-600 dark:text-gray-400 mt-3">
            From browsing to delivery, we’ve refined every step to ensure your shopping journey is intuitive and indulgent.
          </p>
        </div>
        <div className="border rounded-2xl p-8 shadow-md bg-white dark:bg-gray-900 hover:shadow-xl transition">
          <b className="text-lg text-gray-800 dark:text-white">Luxury, Responsibly</b>
          <p className="text-gray-600 dark:text-gray-400 mt-3">
            We partner with ethical artisans and premium suppliers to ensure quality that feels good — inside and out.
          </p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  )
}

export default About
