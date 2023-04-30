import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { useContext } from 'react'
import { myContext } from '../context/Context'
import {FaCrop,FaCropAlt,FaCartPlus} from 'react-icons/fa'
function Header() {
  const {cartItem} = useContext(myContext)
  const [nav,setNav]= useState(false)

  return (
    
     

     
<nav className="bg-blue-600 md:px-[2rem] ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
     
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white"><Link to="/">ShoppingCartApp</Link></span>
  
    <button data-collapse-toggle="navbar-default" type="button"   onClick={() => {setNav(!nav)}} className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden  border-blue-600 " aria-controls="navbar-default" aria-expanded="false">
      <FaCropAlt className={`${nav? "hidden" :""} w-6 h-6 text-white`}/>
      {/* <svg  aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" ><path  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" ></path></svg> */}
      <FaCrop className={`${nav? "":"hidden"} w-6 h-6 text-white`}/>
    </button>
    <div className={`${nav ? "":"hidden"} w-full md:block md:w-auto`} id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 text-center mt-4 md:space-y-0 space-y-4 md:px-[5rem] bg-blue-500 md:bg-blue-600 rounded-lg  md:flex-row md:space-x-[5rem] md:mt-0 md:border-0  ">
        <li>
        <Link to="/" className='hover:border-b-2 text-white'>Home</Link>
        </li>
        <li className='relative '>
        <Link to="/cart" className='  text-white text-center '> <FaCartPlus className=' h-full w-[1.6rem] m-auto '/>  </Link>
        <span className='text-red-600 text-[0.7rem] absolute font-bold top-[-40%] bg-white h-[1rem] w-[1rem] rounded-xl text-center'>{cartItem.length}</span>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

   
  )
}

export default Header
