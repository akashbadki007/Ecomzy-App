import React, { useEffect, useState } from 'react';
import {NavLink} from "react-router-dom";
import { useSelector} from 'react-redux';
import CartItem from './CartItem';

function Cart() {
  const {cart} = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => 
    setTotalAmount(cart.reduce((prevValue, currValue) => Math.round(prevValue + currValue.price),0 )))

 
  return (
  
  <div>
    
    {
      cart.length > 0 ?
      (<div className='xs:grid xs:grid-cols-1 md:flex md:justify-center md:items-center gap-80 mt-10 '>
        <div className=''>
          {
            cart.map((data, index) => (
            <CartItem key={data.id} data={data} itemIndex={index} /> ))
          } 
        </div>

        <div className='flex flex-col gap-14 md:gap-y-[350px] mb-10'>

          <div>
            <h2 className='text-[30px] text-green-500  font-bold text-center md:text-left'>Your Cart</h2>
            <h1 className='text-[40px] text-green-500 font-extrabold mt-[-16px] text-center md:text-left'>Summary</h1>
            <p className='text-lg text-gray-700 font-bold text-center md:text-left'> Total Items : {cart.length} </p>
          </div> 

          <div>
            <p> 
              <span className='text-lg text-gray-800 font-bold text-center md:text-left'> Total Amount : <span className='text-green-500'> ${totalAmount} </span> </span>
             </p>
            <button className='w-[400px] h-10 p-3 flex justify-center items-center font-bold text-white bg-green-600 hover:bg-green-700 transition-all duration-200 mt-4 rounded-md'> CheckOut Now </button>
          </div>

        </div>

      </div>) :

      (<div className='h-[80vh] flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-semibold text-gray-800 italic mb-4'> Empty Cart </h1>
        <NavLink to={'/'}> 
          <button className='text-white bg-blue-600  rounded-full font-semibold text-[12px] p-2 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in'> Shop Now </button>
        </NavLink>
      </div>)

    }

    </div>

  )
}

export default Cart;