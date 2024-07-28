import React from 'react'
import { AiOutlineDelete } from "react-icons/ai";
import {removeCart } from '../Redux/Slices/CartSlice';
import {useDispatch } from 'react-redux';
import {toast} from "react-toastify"

function CartItem({data}) {

    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(removeCart(data.id));
        toast.error("Item Removed");
    }
  return (
    <div className='grid sm:grid-cols-1  md:flex justify-evenly items-center  sm:gap-6 m-auto md:gap-[100px] rounded-xl shadow-xl border border-gray-300 px-5 py-3 mb-4'>
        <div>
            <img className='w-[120px] h-[150px]' src={data.image} alt="Item-Img" />
        </div>
 
        <div>
            <div>
                <h1 className='text-gray-900 font-semibold text-lg text-left w-40 mt-2 mb-[7px] leading-6'> {data.title} </h1>
                <p className='w-40 text-slate-700 font-semibold text-[11px] text-left mb-2'> {data.description.split(" ").slice(0,10).join(" ") + "..."} </p>
            </div>

            <div className='md:flex md:justify-between md:items-center grid sm:grid-cols-1'>
                <p className='text-green-600 font-bold'> ${data.price} </p>
                <div className='cursor-pointer bg-red-500 hover:bg-red-600 transition-all duration-200 w-7 h-7 rounded-full flex justify-center items-center' onClick={removeFromCart}>
                    <AiOutlineDelete/>
                </div>

            </div>

        </div> 
    </div>
  )
}

export default CartItem