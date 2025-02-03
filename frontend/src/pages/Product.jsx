// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  
  const {productId} = useParams();
  const {products,currency,addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
   
  const [image, setImage] = useState('');
  const [size,setSize] = useState('');


  const fetchProductData = async () => {
    products.map((item)=>{
      if(item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })
  }

  useEffect(()=>{
   fetchProductData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[productId,products])

  return productData ?(
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product data  */}
    <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
      {/* Prodect Images */}
      <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
        <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full '>
          {
            productData.image.map((item,index)=>(
              <img onClick={()=>setImage(item)} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' src={item} key={index}  alt="" />
            ))
          }
        </div>
        <div className='w-full sm:w-[80%]'>
          <img className='w-full h-auto' src={image} alt="" />
        </div>
      </div>

      {/* ----------Product Image---- */}
      <div className='flex-1'>
        <h1 className='font-meduim text-2xl mt-2'>{productData.name}</h1>
        <div className='flex items-center mt-2 gap-1'>
          <img src={assets.star_icon} alt="" className="w-3 5" />
          <img src={assets.star_icon} alt="" className="w-3 5" />
          <img src={assets.star_icon} alt="" className="w-3 5" />
          <img src={assets.star_icon} alt="" className="w-3 5" />
          <img src={assets.star_dull_icon} alt="" className="w-3 5" />
          <p className='pl-2'>(122)</p>
        </div>
        <p className='mt-5 text-3xl font-medium '> {currency} {productData.price} </p>
        <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
        <div className='flex flex-col gap-4 my-8'>
          <p>Select Size</p>
          <div className='flex gap-2'>
           {productData.sizes.map((item,index)=>(
            <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' :''}`} key={index}>{item}</button>
           ))}
          </div>
        </div>
        <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
        <hr className='mt-8 sm:w-4/5' />
        <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
          <p>100% Original Product.</p>
          <p>Cash on delivery is available on this product.</p>
          <p>Easy return and exchange policy within 7 days. </p>
        </div>
      </div>
    </div>

       {/* -----Description & Review Section---- */}
     <div className='mt-20'>
       <div className='flex'>
        <b className='border px-5 py-3 text-sm'> Description</b>
        <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
       </div>
       <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, similique ex praesentium laudantium nihil dolores odit, explicabo magnam sunt dignissimos harum. Sapiente, aut delectus pariatur error nostrum enim quis fuga?
       Ex quod labore pariatur, iure praesentium hic laborum nostrum amet cupiditate accusamus voluptates omnis minima odio tempora harum libero velit. A eveniet similique eaque tenetur vero, suscipit nulla nam unde.</p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dignissimos inventore voluptates deserunt nesciunt aspernatur at a quod iusto obcaecati, mollitia eum accusantium reprehenderit iure cumque veritatis esse ducimus quaerat.</p>
       </div>
     </div>

     {/* --------Display related products---- */}
     <RelatedProducts  category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : <div className='opacity-0'> hello kutta man</div>
}

export default Product
