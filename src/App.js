import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Cart from './pages/Cart'
import { myContext } from './context/Context';
import Items from './pages/Items';
import toast, { Toaster } from 'react-hot-toast';
// import "react-toastify/dist/ReactToastify.css";
const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    children:[
      {
        path:"/",
        element:<Items/>
      },
      {

        path: "/cart",
        element:<Cart/>
      }
    ]
  }
])

function App() {

  
const [cartItem, setCartItem] = useState([]);

const [itemQuantity,setItemQuantity] = useState({})

//adding items to cart
const decr = (ele) => {
  const update = {...itemQuantity}
  update[ele.id]= (update[ele.id] || 0) - 1
  if(update[ele.id]<1){
    removeFromCart(ele)
  }
  setItemQuantity(update)

}

const incr = (ele) => {

  const update = {...itemQuantity}
  update[ele.id]= (update[ele.id] || 0) + 1
  setItemQuantity(update)
  
}

const addToCart = item => {
  const isAlreadyExist = cartItem.findIndex((ele) => ele.id === item.id)
  console.log(isAlreadyExist)
  if (isAlreadyExist !== -1){
    // toast("already exist in the cart", {
    //   type:"error"
    // });
    incr(item)
    toast.success(" added to cart again ")
    return;
  }
 
  setCartItem([...cartItem,item]);
  toast.success("item added to cart successfully")
};

//remove from cart

const removeFromCart = (item) => {
  setCartItem(cartItem.filter(ele => ele.id !== item.id));
}

//buy cart items

const buyNow = () => {
  setCartItem([]);
  toast("purchased successfully",{
    type:"success"
  });
}



  return (
    <div>
    <myContext.Provider value = {{addToCart,removeFromCart,buyNow,cartItem,itemQuantity,setItemQuantity,incr,decr}}>
    <RouterProvider router={appRouter}/>
    <Toaster />
    </myContext.Provider>
          
      
      
    </div>
  )
}

export default App
