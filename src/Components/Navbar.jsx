import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoCart } from "react-icons/io5";
import { useSelector } from 'react-redux';
import EcommLogo from '../assets/EcommLogo.jpeg'

function Navbar() {
  const {cart} = useSelector((state) => state);

  return (
    <div className='w-full flex justify-around items-center gap-20 h-16 max-w-8xl shadow-xl bg-slate-700'>

        <div>
            <NavLink to='/' className=''>
             <img 
               className='w-[250px] h-[65px]' 
               src={EcommLogo}
              />
            </NavLink>
        </div> 

        <div className='flex gap-10 justify-center items-center'>
            <NavLink 
              to='/' 
              className="text-white text-lg font-[500] hover:text-blue-400 transition-all duration-200 indent-6">
              Home 
            </NavLink>
            <NavLink 
              to='/cart'
              className='relative'> 
              < IoCart className='w-[30px] h-[30px] text-white text-2xl hover:text-blue-200 transition-all duration-200' /> 
              {
                cart.length > 0&&
                <span className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center item-center animate-bounce rounded-full text-white'> {cart.length} </span>
              }
            </NavLink>
        </div>

       

    </div>

  )
}

export default Navbar