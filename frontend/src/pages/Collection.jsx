import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import PorductItem from '../components/PorductItem';

const Collection = () => {
  const { products, showSearch, search } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProd, setFilterProd] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavant');

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }
    setFilterProd(productsCopy)
  }

  const sortProducts = () => {
    let fpcopy = filterProd.slice();
    switch (sortType) {
      case 'low-high':
        setFilterProd(fpcopy.sort((a, b) => (a.price - b.price)));
        break;
      case 'high-low':
        setFilterProd(fpcopy.sort((a, b) => (b.price - a.price)));
        break;
      case 'newest':
        setFilterProd(fpcopy.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
        break;
      case 'trending':
        setFilterProd(fpcopy.sort((a, b) => (b.popularity - a.popularity)));
        break;
      default:
        applyFilter();
        break;
    }
  }

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch])

  useEffect(() => {
    sortProducts();
  }, [sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t bg-[#faf0e4][#faf0e4] text-[#4B3A2F] px-4 sm:px-8 min-h-screen'>
      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2 font-semibold text-[#4B3A2F]">Refine by
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>

        {/* Category Filter */}
        <div className={`border border-gray-200 pl-5 py-3 mt-6 ${showFilter ? "" : 'hidden'} sm:block bg-[#faf0e4]white rounded-md`}>
          <p className="mb-3 text-sm font-semibold text-[#6B5B50]">Audience</p>
          <div className="flex flex-col gap-2 text-sm font-light text-[#6B5B50]">
            <label className="flex gap-2">
              <input className='w-3' type="checkbox" value={"Men"} onChange={toggleCategory} /> Men
            </label>
            <label className="flex gap-2">
              <input className='w-3' type="checkbox" value={"Women"} onChange={toggleCategory} /> Women
            </label>
            <label className="flex gap-2">
              <input className='w-3' type="checkbox" value={"Kids"} onChange={toggleCategory} /> Kids
            </label>
          </div>
        </div>

        {/* Sub-Category Filter */}
        <div className={`border border-gray-200 pl-5 py-3 my-5 ${showFilter ? "" : 'hidden'} sm:block bg-[#faf0e4]white rounded-md`}>
          <p className="mb-3 text-sm font-semibold text-[#6B5B50]">Category</p>
          <div className="flex flex-col gap-2 text-sm font-light text-[#6B5B50]">
            <label className="flex gap-2">
              <input className='w-3' type="checkbox" value={"Topwear"} onChange={toggleSubCategory} /> Tops
            </label>
            <label className="flex gap-2">
              <input className='w-3' type="checkbox" value={"Bottomwear"} onChange={toggleSubCategory} /> Bottoms
            </label>
            <label className="flex gap-2">
              <input className='w-3' type="checkbox" value={"Winterwear"} onChange={toggleSubCategory} /> Outerwear
            </label>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1">
        <div className="flex justify-between items-center text-base sm:text-lg mb-4">
          <h3 className='text-2xl sm:text-3xl md:text-4xl prata-regular mb-4 text-[#4B3A2F]'>Haute-Hue Collection</h3>
          <select onChange={(e) => setSortType(e.target.value)} className='border border-gray-300 text-sm px-2 py-1 rounded-md bg-[#faf0e4]white text-[#4B3A2F]'>
            <option value="relavant">Sort by: Featured</option>
            <option value="low-high">Sort by: Price Low to High</option>
            <option value="high-low">Sort by: Price High to Low</option>
            <option value="newest">Sort by: New Arrivals</option>
            <option value="trending">Sort by: Trending Now</option>
          </select>
        </div>

        {/* Map Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {
            filterProd.map((item, index) => {
              return (
                <PorductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Collection;
