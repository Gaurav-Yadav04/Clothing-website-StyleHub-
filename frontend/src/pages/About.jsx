// eslint-disable-next-line no-unused-vars
import React from 'react'
import Title from '../components/Title';
import  { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div>
        <div className='text-2xl text-center pt-8 border-t'>
         <Title text1={'ABOUT'} text2={'US'} />
        </div>

        <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Welcome to StyleHub, your one-stop destination for the latest and trendiest fashion. We are an e-commerce platform dedicated to bringing you high-quality, stylish, and affordable clothing for all.</p>
            <p>At StyleHub, we believe fashion is more than just clothing – it’s an expression of personality, confidence, and creativity. Our team curates a collection that blends comfort, elegance, and the latest fashion trends, ensuring you always step out in style.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>At StyleHub, our mission is simple: to make fashion accessible, stylish, and affordable for everyone. We believe that clothing is more than just fabric – it’s a way to express yourself, boost confidence, and embrace your individuality.</p>
          </div>
        </div>

        <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
        </div>
        
       <div className='flex flex-col md:flex-row text-sm mb-20'>
           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b className='text-gray-600' >Quality Assurance:</b>
              <p>At StyleHub, we bring you the latest fashion trends, high-quality clothing, and a seamless shopping experience. Our platform is designed to make online fashion faster, smarter, and more accessible for everyone!</p>
           </div>
           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b className='text-gray-600' >Convenience:</b>
              <p>At StyleHUb, we make fashion shopping effortless with a user-friendly website, fast checkout, quick delivery, and hassle-free returns. Shop anytime, anywhere, and enjoy a seamless experience with 24/7 customer support. Fashion made simple!</p>
           </div>
           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b className='text-gray-600'  >Exceptional Customer Service:</b>
              <p>At StyleHub, your satisfaction is our priority. Our dedicated support team ensures quick responses, hassle-free returns, and a seamless shopping experience.  We are here for you—because you deserve the best!</p>
           </div>
        </div>

        <NewsletterBox />
    </div>
  )
}

export default About
