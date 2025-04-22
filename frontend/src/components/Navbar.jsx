import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
  const [visible, setVisible] = useState(false)
  const { setShowSearch, showSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext)

  const logOut = () => {
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
  }

  return (
    <>
      <div className='fixed top-0 left-0 right-0 z-50 bg-[#faf0e4] shadow-sm border-b border-[#e5dbce]'>
        <div className='flex items-center justify-between py-6 px-4 sm:px-8 text-[#4B3A2F]'>
          <Link to='/'>
            <img src={assets.logo} className="w-12 h-12" alt="HauteHue Logo" />
          </Link>

          {/* Desktop Nav */}
          <ul className='hidden sm:flex gap-8 text-base font-light tracking-wide'>
            {['/', '/collection', '/about', '/contact'].map((path, index) => (
              <NavLink key={index} to={path} className='flex flex-col items-center gap-1 hover:text-black transition'>
                <p className='capitalize'>{path === '/' ? 'Home' : path.replace('/', '')}</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-[#4B3A2F] hidden' />
              </NavLink>
            ))}
          </ul>

          {/* Icons */}
          <div className="flex items-center gap-5">
            <img
              onClick={() => setShowSearch(!showSearch)}
              src={assets.search_icon}
              className='w-6 cursor-pointer hover:opacity-80 transition'
              alt="Search"
            />

            {/* Profile Dropdown */}
            <div className="group relative">
              <img
                onClick={() => token ? null : navigate('/login')}
                src={assets.profile_icon}
                className='w-6 cursor-pointer hover:opacity-80 transition'
                alt="Account"
              />
              {token && (
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-10'>
                  <div className="flex flex-col gap-2 w-40 py-5 px-6 bg-[#F3EEE8] text-[#6B5B50] rounded-lg shadow-lg">
                    <p className='cursor-pointer hover:text-black'>My Profile</p>
                    <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                    <p onClick={logOut} className='cursor-pointer hover:text-black'>Logout</p>
                  </div>
                </div>
              )}
            </div>

            {/* Cart */}
            <Link to='/cart' className='relative'>
              <img src={assets.cart_icon} alt="Cart" className="w-6" />
              <p className="absolute right-[-6px] bottom-[-6px] w-5 text-center text-[10px] leading-5 bg-black text-white rounded-full">
                {getCartCount()}
              </p>
            </Link>

            {/* Mobile menu icon */}
            <img
              onClick={() => setVisible(true)}
              src={assets.menu_icon}
              className='w-6 cursor-pointer sm:hidden'
              alt="Menu"
            />
          </div>
        </div>

        {/* Sidebar for mobile */}
        <div className={`absolute top-0 right-0 bottom-0 bg-[#fdf9f3] shadow-2xl transition-all duration-300 ease-in-out ${visible ? "w-full" : "w-0"} overflow-hidden`}>
          <div className="flex flex-col text-[#4B3A2F] pt-6">
            <div onClick={() => setVisible(false)} className="flex items-center gap-4 px-6 pb-4 cursor-pointer">
              <img src={assets.dropdown_icon} alt="Back" className="h-4 rotate-180" />
              <p className="text-sm">Back</p>
            </div>
            <NavLink onClick={() => setVisible(false)} className='py-3 pl-6 border-b border-[#e9e0d4]' to='/'>Home</NavLink>
            <NavLink onClick={() => setVisible(false)} className='py-3 pl-6 border-b border-[#e9e0d4]' to='/collection'>Collection</NavLink>
            <NavLink onClick={() => setVisible(false)} className='py-3 pl-6 border-b border-[#e9e0d4]' to='/about'>About</NavLink>
            <NavLink onClick={() => setVisible(false)} className='py-3 pl-6 border-b border-[#e9e0d4]' to='/contact'>Contact</NavLink>
          </div>
        </div>
      </div>

      {/* Responsive spacer to avoid content behind navbar */}
      <div className="h-[84px] sm:h-[88px] md:h-[96px] lg:h-[104px]"></div>
    </>
  )
}

export default Navbar
