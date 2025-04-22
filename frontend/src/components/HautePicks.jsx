import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import PorductItem from './PorductItem';

const BestSeller = () => {
    const {products} = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() =>{
        const bestProduct = products.filter((item) =>(item.bestSeller));
        setBestSeller(bestProduct.slice(0,5));
    },[products])
  return (
    <div className='my-10'>
        <div className="text-center py-14 px-4 sm:px-6 lg:px-8 bg-[#faf0e4] text-[#4B3A2F]">
  <h2 className="text-[32px] sm:text-[40px] md:text-[48px] prata-regular tracking-wide mb-4">
   Haute <span className="italic">Picks</span>
  </h2>
  <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg font-light leading-relaxed text-[#6B5B50]">
    Discover the most coveted pieces our clientele can’t get enough of. 
    From timeless essentials to signature styles — elevate your wardrobe with our top picks that define understated elegance.
  </p>
</div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
            {bestSeller.map((item, index) =>(
                <PorductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))}
        </div>
    </div>
  )
}

export default BestSeller