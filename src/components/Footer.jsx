import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { TrendingUp, ArrowRight } from 'lucide-react';

const Footer = () => {

    const { darkMode, setdarkMode } = useContext(AppContext);

  return (
    <div className={`w-full shadow-2xl shadow-gray-500 ${darkMode ? "bg-gray-900 text-gray-400" : "bg-gray-100 text-gray-600"}`}>

      
      {/* Upper section */}
      <div className='relative max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-4 gap-10'>

        {/* COl - 1 : Logo and description */}
        <div className='flex flex-col gap-2'>
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer hover:text-indigo-600 group">
                <div className="h-8 w-8 flex items-center justify-center border rounded-lg transition-all duration-300 group-hover:rotate-12">
                    <TrendingUp size={18} strokeWidth={3} />
                </div>
                <span className={`text-xl font-extrabold tracking-tight ${darkMode ? "text-gray-200" : "text-gray-900"}`}>
                Blog<span className="text-indigo-300">.</span>
                </span>
            </div>
            {/* Description */}
            <div className='text-sm'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, porro.</p>
            </div>
        </div>

        {/* COl - 2 */}
        <div className='flex flex-col gap-2'>
            <h4 className={`font-bold ${darkMode ? "text-gray-200" : "text-gray-900"}`}>EXPLORE</h4>
            <ul className='text-sm space-y-1'>
                <li><a className='hover:text-indigo-500 cursor-pointer'>Home</a></li>
                <li><a className='hover:text-indigo-500 cursor-pointer'>About</a></li>
                <li><a className='hover:text-indigo-500 cursor-pointer'>Contact Us</a></li>
            </ul>
        </div>

        {/* COl - 3 */}
        <div className='flex flex-col gap-2'>
            <h4 className={`font-bold ${darkMode ? "text-gray-200" : "text-gray-900"}`}>EXPLORE</h4>
            <ul className='text-sm space-y-1'>
                <li><a className='hover:text-indigo-500 cursor-pointer'>Home</a></li>
                <li><a className='hover:text-indigo-500 cursor-pointer'>About</a></li>
                <li><a className='hover:text-indigo-500 cursor-pointer'>Contact Us</a></li>
            </ul>
        </div>

        {/* COl - 4 : NewsLetter */}
        <div className='flex gap-4 flex-col'>
            <div>
                <h4 className={`font-bold ${darkMode ? "text-gray-200" : "text-gray-900"}`}>NEWSLETTER</h4>
                <p className='text-sm mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, praesentium!</p>
            </div>
            <div className="flex gap-2">
                <input
                    type="email"
                    placeholder="Email address"
                    className={`flex-1 px-4 py-2 rounded-lg text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'}`}
                />
                <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
                    <ArrowRight size={18} />
                </button>
          </div>
        </div>
        
      </div>

      {/* Lower Section : Copyright Section */}
      <div className="max-w-7xl mx-auto mt-2 py-8 border-t border-gray-200/10 text-center text-xs">
        © 2024 Lumina Media Inc. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
