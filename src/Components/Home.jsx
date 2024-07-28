import React, { useEffect } from 'react'
import { useState } from 'react'
import {toast} from "react-toastify"
import Spinner from './Spinner';
import Product from './Product';

function Home() {

  const [loading, setLoading] = useState(false);
  const [ProductsData,setProductsData] = useState([]);
  const API_URL = "https://fakestoreapi.com/products";

  async function fetchProductsData() {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data);
      setProductsData(data);
    }
    catch(error) {
      toast.error("Fetching Error...........");
      setProductsData([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductsData();
  },[])

  return (
    <div className=''>

      {
        loading ? 
        (<Spinner/>) : 
        (ProductsData.length > 0 ?
           (
             <div className='grid xs:grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] '>
              {
                ProductsData.map((data) => (
                  <Product key={data.id} data={data}/>
                ))
              }
             </div>
            ) :
           
           (<div className='h-[80vh] flex justify-center items-center'> <p className='text-2xl font-semibold text-gray-800 italic'>No Data Found</p> </div>)

        )
      }

    </div>
  )
}

export default Home