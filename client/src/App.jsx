import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbars from './component/Navbars'
import { Route, Routes } from 'react-router-dom'
import Homepage from './page/Homepage'
import Cart from './page/Cart'
import CategoryFilter from './component/CategoryFilter'
import ProductPage from './page/ProductPage'



function App() {

  return (
    <div className='flex flex-col gap-2'>
      <Navbars></Navbars>
      
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route  path='/cart' element={<Cart/>}></Route>
        <Route  path='/product/:id' element={<ProductPage/>}></Route>
      </Routes>
    </div>
  )
}

export default App
