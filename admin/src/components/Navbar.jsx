import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const AdminNavbar = ({ setToken }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken('');
    localStorage.removeItem('token'); // Optional if using token in localStorage
    navigate('/login');
  };

  return (
    <>
      <div className='fixed top-0 left-0 right-0 z-50 bg-[#FDF9F3] shadow-sm border-b border-[#EAD7C3]'>
        <div className='flex items-center justify-between py-6 px-4 sm:px-8 text-[#4B3A2F]'>
          {/* Logo */}
          <div className='flex items-center gap-3'>
            <img src={assets.logo} alt="Admin Logo" className='w-12 h-12' />
            <h1 className='text-xl sm:text-2xl prata-regular tracking-wide'>HauteHue Admin</h1>
          </div>

          {/* Navigation Links */}
          <div className='hidden sm:flex gap-6 text-base prata-regular'>
            <button
              onClick={() => navigate('/admin/orders')}
              className='hover:text-black transition'
            >
              Orders
            </button>
            <button
              onClick={() => navigate('/admin/products')}
              className='hover:text-black transition'
            >
              Products
            </button>
            <button
              onClick={() => navigate('/admin/users')}
              className='hover:text-black transition'
            >
              Users
            </button>
            <button
              onClick={() => navigate('/admin/analytics')}
              className='hover:text-black transition'
            >
              Analytics
            </button>
          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className='bg-[#EAD7C3] hover:bg-[#e4cdb5] text-[#4B3A2F] px-5 py-2 rounded-md text-sm font-medium transition duration-300 shadow-sm prata-regular'
          >
            Logout
          </button>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-[84px] sm:h-[88px] md:h-[96px] lg:h-[104px]"></div>
    </>
  );
};

export default AdminNavbar;
