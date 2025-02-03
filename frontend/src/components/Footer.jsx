// eslint-disable-next-line no-unused-vars
import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
       <div>
        <img src={assets.logo} className='mb-5 w-32' alt="" />
        <p className='w-full sm:w-2/3 text-gray-600'>StyleHub offers the latest trends in fashion with a seamless shopping experience. Explore our collections and enjoy exclusive offers. Stay connected and sign up for updates, new arrivals, and more. We’re here to bring you style that suits every occasion. Happy shopping!</p>
       </div>
      <div>
        <p className='text-xl font-medium mb-5'>COMPANY</p>
        <ul className='flex flex-col gray-600'>
          <li>Home</li>
          <li>About</li>
          <li>Delivery</li>
          <li>Privacy policy</li>
        </ul>
      </div>
       
       <div>  
        <p className='text-xl font-medium mb-5'> GET IN TOUCH</p>
        <ul className='flex flex-col gray-600'>
          <li>+1 800-123-4567 </li>
          <li>stylehub@gmail.com</li>
        </ul>
       </div>
      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ stylehub.com - All Right Reserved. - Created by Gaurav Yadav</p>

      </div>
    </div>
  )
}

export default Footer
