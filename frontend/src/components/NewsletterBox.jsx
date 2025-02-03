// eslint-disable-next-line no-unused-vars
import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler =(event) => {
        event.preventDefault();
    }

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
      <p className='text-gray-400 mt-3'> 
      Subscribe now to StyleHub and get 20% off your first order! Stay ahead of the trends with our exclusive styles delivered right to your inbox. Don’t miss out—sign up today!  
      </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required />
        <button className='bg-black text-white text-xs px-10 py-4' type='submit'>SUBSCRIBE</button>
       </form>
    </div>
  )
}

export default NewsletterBox
