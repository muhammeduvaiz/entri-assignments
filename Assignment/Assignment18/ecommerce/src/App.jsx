import { useState } from 'react'

import { Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import Products from './components/Products'
import AdminLogin from './components/Admin/AdminLogin/adminLogin'
import AdminHome from './components/Admin/AdminHome/adminHome'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/adminhome" element={<AdminHome />} />
      </Routes>
    </>
  )
}

export default App
