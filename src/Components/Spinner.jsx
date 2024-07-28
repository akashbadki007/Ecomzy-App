import React from 'react';
import '../App.css'

function Spinner() {
  return (
    <div className='h-[85vh] flex flex-col justify-center items-center'>
        <span className="loader"></span>
    </div>
  )
}

export default Spinner