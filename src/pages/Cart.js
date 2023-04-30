import React from 'react'
import { useContext } from 'react';
import { myContext } from '../context/Context';
import { FaRupeeSign,FaTrash} from 'react-icons/fa'

function Cart() {
  
const {cartItem,removeFromCart,itemQuantity,incr,decr} = useContext(myContext)
  console.log(cartItem)
  let amount = 0;
  cartItem.forEach(item => {
    amount = parseInt(amount) + parseInt(item.price)*itemQuantity[item.id]
   
  })

 
  

  console.log(itemQuantity)
  return (
    <>

    <div className='bg-gray-100 min-h-[100vh]'>
      
    { cartItem.length !==0 ? <div className='md:flex  md:items-start md:justify-center m-3 md:m-0 '>
          
          <div className="   pt-16 pb-5 md:mr-[1rem] lg:max-w-7xl  md:w-[60%] ">
            {
              cartItem.map((ele) => (
                <div className="bg-gray-100 " key={ele.id}>
        <div >
          
          <form
            className=" " readonly>
            <section
              aria-labelledby="cart-heading"
              className="lg:col-span-8 bg-white ">
            
              <ul
                role="list"
                className="divide-y divide-gray-200 border-t border-b border-gray-200">
                <div className="px-4">
                  <li className="flex py-6 sm:py-6">
                    <div className="flex-shrink-0">
                      <img
                        src={ele.image}
                        alt="APPLE iPhone 11 (White, 128 GB)"
                        className="h-24 w-24 rounded-md object-contain object-center sm:h-38 sm:w-38" />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                      <div
                        className="relative pr-9  s sm:gap-x-6 sm:pr-0">
                        <div>
                          <div className="">
                            <h3 className="text-sm">
                              <span
                               
                                className="font-medium text-lg text-blue-600 ">
                                {ele.title}
                              </span>
                            </h3>
                          </div>
                          <div className="mt-1 flex text-sm">
                            <p className="text-gray-500 ">{ele.category}</p>
                            
                          </div>
                          <div className="mt-1 flex items-end">
                          <FaRupeeSign className='inline'/>
                            <p
                              className="text-sm font-medium text-gray-900 text-[1.1rem]">
                              {parseInt(ele.price)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <div className="flex mb-2">
                    <div className="flex min-w-24 ">
                      <button
                        type="button"
                        onClick={() => {decr(ele)}}
                        className="h-7 w-7 rounded-full border border-[#e0e0e0]">
                        -
                      </button>
                      <span
                        
                        className="h-7 w-9 text-center mx-1 border "
                        > {itemQuantity[ele.id]} </span>
                      <button
                        type="button"
                        onClick={() => {incr(ele)}}
                        className="h-7 w-7 rounded-full border border-[#e0e0e0] flex justify-center items-center">
                        +
                      </button>
                    </div>
                    <div className="ml-4 flex flex-1 sm:ml-6 ">
                     
                      <button className="font-medium text-gray-600" onClick={() => {removeFromCart(ele)}}>
                          <FaTrash className='hover:text-red-500'/>
                      </button>
                    </div>
                  </div>
                </div>
                
              </ul>
            </section>
          
          </form>
        </div>
      </div>
      
              )
                
              )
            }
  
  
            
  
          </div>
  
         {
   <section
  
          className=" rounded-md bg-white md:w-[30%] md:mt-[4rem]  md:ml-[1rem] ">
          <h2
            className="px-4 py-3 sm:p-4 border-b border-gray-200 text-lg font-medium text-gray-900 ">
            Price Details
          </h2>
          <div>
            <dl className="space-y-1 px-6 py-4 sm:p-6">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-800 ">
                  Price ({cartItem.length})
                </dt>
                <dd className="text-sm font-medium text-gray-900 ">
                  ₹ {amount}
                </dd>
              </div>
              <div
                className="flex items-center justify-between py-4 border-y border-dashed">
                <dt className="text-base font-medium text-gray-900 ">
                 <span className='text-green-600'> Total Amount</span>
                </dt>
                <dd className="text-base font-medium text-gray-900 ">
                  ₹ {amount}
                </dd>
              </div>
            </dl>
          </div>
          </section> 
         }
  
  
  
  
  
  
          </div> : <div className='text-center font-bold text-gray-600 py-8 bg-gray-100 h-[100vh]'>cart is empty</div>}

    </div>
    
    
    
    </>
  )
}

export default Cart


{/* <section
aria-labelledby="summary-heading"
className="mt-16 rounded-md bg-white  lg:col-span-4 lg:mt-0 lg:p-0">
<h2
  id="summary-heading"
  className="px-4 py-3 sm:p-4 border-b border-gray-200 text-lg font-medium text-gray-900 ">
  Price Details
</h2>
<div>
  <dl className="space-y-1 px-6 py-4 sm:p-6">
    <div className="flex items-center justify-between">
      <dt className="text-sm text-gray-800 ">
        Price (3 item)
      </dt>
      <dd className="text-sm font-medium text-gray-900 ">
        ₹ 52,398
      </dd>
    </div>
    <div
      className="flex items-center justify-between py-4 border-y border-dashed">
      <dt className="text-base font-medium text-gray-900 ">
        Total Amount
      </dt>
      <dd className="text-base font-medium text-gray-900 ">
        ₹ 48,967
      </dd>
    </div>
  </dl>
</div>
</section> */}