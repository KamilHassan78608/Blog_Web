import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {

    const { darkMode } = useContext(AppContext);

  return (
    <div className={`flex flex-col min-h-screen transition-colors duration-300 font-sans ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-200 text-gray-900'}`}>
      <Navbar />

      <main className='flex-1'>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default Layout
