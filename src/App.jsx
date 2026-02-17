import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/layout'
import Home from './pages/Home'
import Fallowing from './pages/Fallowing'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>

        {/* Routes */}
        <Route index element={<Home />} />
        <Route path='/fallowing' element={<Fallowing />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
