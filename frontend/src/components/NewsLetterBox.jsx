import React from 'react'

const NewsLetterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault()
  }

  return (
    <div className='bg-[#faf0e4] text-[#4B3A2F] py-16 px-4 sm:px-8 text-center'>
      <h3 className='text-2xl sm:text-3xl md:text-4xl prata-regular mb-4'>Join Our Inner Circle</h3>
      <p className='max-w-xl mx-auto text-sm sm:text-base md:text-lg font-light text-[#6B5B50]'>
        Be the first to know about new arrivals, exclusive collections, and insider deals crafted for those who adore luxury.
      </p>
      <form 
        className='w-full max-w-xl mx-auto mt-8 flex flex-col sm:flex-row gap-4 sm:gap-2 items-center justify-center'
        onSubmit={onSubmitHandler}
      >
        <input
          className='w-full sm:flex-1 px-4 py-3 border border-[#D2C6BC] rounded-full outline-none text-sm text-[#4B3A2F]'
          type='email'
          placeholder='Enter your email address'
          required
        />
        <button
          className='bg-[#4B3A2F] text-white px-6 py-3 rounded-full text-sm hover:bg-[#3B2F26] transition'
          type='submit'
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}

export default NewsLetterBox
