import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <main className='flex-1'>

      </main>
      <Footer />
    </div>
  )
}

export default App
