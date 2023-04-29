import React from 'react'
import Axios from 'axios';
import { useState,useEffect } from 'react';
import { useContext } from 'react';
import { myContext } from '../context/Context';
import { TailSpin } from 'react-loader-spinner'
;
import { FaRupeeSign } from 'react-icons/fa';
function Items() {

  const {addToCart,itemQuantity, setItemQuantity} = useContext(myContext)
  console.log(useContext(myContext))
console.log(addToCart)
  const[product, setProduct] = useState([])
  const [ load ,setLoad] = useState(true)
  const fetchPhotos = async () => {
    const {data} = await Axios.get("https://fakestoreapi.com/products?limit=5")
    console.log(data)
    setProduct(data)
    setLoad(!load)

    const quantity = data.reduce((obj, item) => {
      obj[item.id] = 1;
      return obj;
    }, {});
    setItemQuantity(quantity)
  }

  useEffect( () => {
    fetchPhotos()
  },[]);

if(load){
  return(
   <div className='flex justify-center items-center h-[70vh] '>
     
     <TailSpin
    height="50"
    width="50"
    color="blue"
    ariaLabel="tail-spin-loading"
    radius="3"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    
  />
    

   </div>
  )
}



  return (
    <div>
      
      {
        product === [] ? <div>Data Not Found</div> : 
       <div className='md:flex md:flex-wrap  '> 
        
       { product.map((pro ) => {
          return(
            <div key={pro.id} className='md:mx-[1rem] md:w-[30%] w-[70%] m-auto my-[3rem]'>
              
              
<div className=" bg-white  border-2 rounded-lg shadow ">
    <div className=''> 
    <div>
        <img className="md:p-5 py-4 rounded-t-lg md:h-[15rem] h-[12rem] m-auto" src={pro.image} alt="product image" />
    </div>
    </div>
    <div className="px-5 pb-5">
      
            <h5 className="md:text-xl font-semibold tracking-tight text-gray-900  overflow-hidden whitespace-nowrap text-ellipsis ">{pro.title}</h5>
        
        <div className="flex items-center mt-2.5 mb-5">
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded   ml-3">5.0</span>
        </div>
        <div className="flex items-center justify-between">
            <span className="md:text-3xl font-bold text-gray-900 "> Rs:{parseInt(pro.price)}</span>
            <button onClick={() => {addToCart(pro)}} className="text-white bg-blue-700 hover:bg-blue-800 e  font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Add to cart</button>
        </div>
    </div>
</div>


            </div>
          )

        })}
        
        
        
        
         </div>
        
      }

      
    </div>
  )
}

export default Items
