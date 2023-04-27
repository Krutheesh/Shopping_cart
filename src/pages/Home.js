import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Items from './Items'
function Home() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      
    </div>
  )
}

export default Home
