import { useSelector, useDispatch } from 'react-redux';
import {toast} from "react-toastify";
import { addCart,removeCart } from '../Redux/Slices/CartSlice';
import { useEffect, useState } from 'react';


function Product({data}) {
  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addCart(data));
    toast.success("Item added to Cart")
  }

  const removeFromCart = () => {
    dispatch(removeCart(data.id));
    toast.error("Item Removed From Cart");
  }

 
  return (
    <div className='flex flex-col justify-center items-center hover:scale-[1.02] transition duration-300 ease-in  mt-10 ml-5 rounded-lg shadow-xl border border-gray-300'>
      <p className='text-gray-900 font-semibold text-lg text-left truncate w-40 mt-2 mb-1'> {data.title} </p>

      <p className='w-40 text-slate-600 font-normal text-[11px] text-left mb-2'> {data.description.split(" ").slice(0,10).join(" ") + "..."} </p>

      <img className='w-[110px] h-[130px]' src={data.image} alt="Products Data" />

      <div className='flex justify-center gap-12 items-center w-full mt-1'>
        <p className='text-green-600 font-semibold'> ${data.price} </p> 
        <div className='mb-4 mt-4'>
          {
            cart.some((p) => p.id === data.id) ?
            (<button 
              className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in'
              onClick={removeFromCart}> 
              Remove Item 
            </button>):
            (<button 
              className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in'
              onClick={addToCart}>
              Add to Cart 
            </button>)
          }
        </div>
      </div>

    </div>
  )
}

export default Product;


