import React from 'react'
import { useContext } from 'react';
import { myContext } from '../context/Context';
function Cart() {
    
const {cartItem,removeFromCart,buyNow} = useContext(myContext)
  console.log(cartItem)
  let amount = 0;
  cartItem.forEach(item => {
    amount = parseFloat(amount) + parseFloat(item.price)
  })
  return (
    <div className="w-[100%]">
      <div className=" flex  justify-between mb-4">
        <h3 className=" font-bold  text-white bg-blue-600  mt-5 p-5 px-8 rounded-lg ml-[10%]">products in cart</h3>
        {cartItem.length >= 1 ? 
      <div className='flex justify-between items-center bg-blue-600  mt-5 mr-[10%] rounded-xl' >
        <h3 className='  p-5 rounded-xl text-white'>Total amount :<span className='text-white font-bold'>{amount}</span> </h3>
        <div className='text-center'>
        <button onClick={() => buyNow()} className='  my-1 bg-green-600 p-2 rounded-xl mr-3  text-white '>paynow</button>
        </div>

      </div> : 
      <div className='bg-green-600 p-5 mt-5 px-8 rounded-xl  text-white mr-[10%] font-bold'> cart is empty </div>}
        
   </div>
      {cartItem.map((cart) => {
        return(
          <div key={cart.id} className=" m-auto w-[80%] p-4 mt-3 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
    
   <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-[5rem] h-[5rem] rounded-full" src= {cart.image} alt="Neil image" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate ">
                            {cart.title}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {cart.category}
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                        RS:{cart.price}
                    </div>
                    <div>
                    <a onClick={() => {
                      removeFromCart(cart)
                    }} className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            remove
        </a>
                    </div>
                </div>
            </li>
            
        </ul>
   </div>
</div>
        )
      })}

     

    </div>
  )
}

export default Cart

