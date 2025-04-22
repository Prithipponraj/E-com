import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
// import Title from './Title';
import PorductItem from './PorductItem';

const LatestCollection = () => {
    const {products} = useContext(ShopContext);
    const [latestProd, setLatestProd] =useState([]);

    useEffect(() =>{
        setLatestProd(products.slice(0,10));
    },[products])

    // console.log(products)
  return (
    <div className='my-10'>
        <div className="text-center py-14 px-4 sm:px-6 lg:px-8 bg-[#faf0e4] text-[#4B3A2F]">
  <h2 className="text-[32px] sm:text-[40px] md:text-[48px] prata-regular tracking-wide mb-4">
    House of <span className="italic">Elegance</span>
  </h2>
  <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg font-light leading-relaxed text-[#6B5B50]">
    Unveil the art of everyday elegance with our newest arrivals — a seamless blend of craftsmanship, minimalism, and sophistication.
    Designed for those who embrace quiet luxury and effortless distinction. Your timeless statement starts here.
  </p>
</div>


        {/* Renduring Products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
            {latestProd.map((item, index) =>(
                <PorductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))}
        </div>
    </div>
  )
}

export default LatestCollection