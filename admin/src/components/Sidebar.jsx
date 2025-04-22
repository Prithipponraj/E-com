import React from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen bg-[#FDF9F3] border-r border-gray-200 shadow-sm'>
      <div className='flex flex-col gap-6 pt-10 pl-[20%] text-[15px] text-[#414141]'>

        {/* Menu Section */}
        <div className='flex flex-col gap-2'>
          <p className='text-xs uppercase text-[#A79B91] prata-regular tracking-wider mb-1'>Menu</p>
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-l-lg border-l-4 ${
                isActive ? 'border-[#EAD7C3] bg-[#fff8f2]' : 'border-transparent'
              } hover:bg-[#fff3e8] transition-all prata-regular`
            }
            to='/add'
          >
            <img className='w-5 h-5' src={assets.add_icon} alt="" />
            <p className='hidden md:block'>Add Items</p>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-l-lg border-l-4 ${
                isActive ? 'border-[#EAD7C3] bg-[#fff8f2]' : 'border-transparent'
              } hover:bg-[#fff3e8] transition-all prata-regular`
            }
            to='/list'
          >
            <img className='w-5 h-5' src={assets.order_icon} alt="" />
            <p className='hidden md:block'>List Items</p>
          </NavLink>
        </div>

        {/* Manage Section */}
        <div className='flex flex-col gap-2'>
          <p className='text-xs uppercase text-[#A79B91] prata-regular tracking-wider mb-1'>Manage</p>
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-l-lg border-l-4 ${
                isActive ? 'border-[#EAD7C3] bg-[#fff8f2]' : 'border-transparent'
              } hover:bg-[#fff3e8] transition-all prata-regular`
            }
            to='/users'
          >
            <img className='w-5 h-5' src={assets.user_icon} alt="" />
            <p className='hidden md:block'>Users</p>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-l-lg border-l-4 ${
                isActive ? 'border-[#EAD7C3] bg-[#fff8f2]' : 'border-transparent'
              } hover:bg-[#fff3e8] transition-all prata-regular`
            }
            to='/inventory'
          >
            <img className='w-5 h-5' src={assets.inventory_icon} alt="" />
            <p className='hidden md:block'>Inventory</p>
          </NavLink>
        </div>

        {/* Track Section */}
        <div className='flex flex-col gap-2'>
          <p className='text-xs uppercase text-[#A79B91] prata-regular tracking-wider mb-1'>Track</p>
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-l-lg border-l-4 ${
                isActive ? 'border-[#EAD7C3] bg-[#fff8f2]' : 'border-transparent'
              } hover:bg-[#fff3e8] transition-all prata-regular`
            }
            to='/orders'
          >
            <img className='w-5 h-5' src={assets.order_icon} alt="" />
            <p className='hidden md:block'>Orders</p>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-l-lg border-l-4 ${
                isActive ? 'border-[#EAD7C3] bg-[#fff8f2]' : 'border-transparent'
              } hover:bg-[#fff3e8] transition-all prata-regular`
            }
            to='/analytics'
          >
            <img className='w-5 h-5' src={assets.order_icon} alt="" />
            <p className='hidden md:block'>Analytics</p>
          </NavLink>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
