import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Clock } from 'lucide-react'

const Hero = () => {

    const { darkMode } = useContext(AppContext);
    
  return (
    <section className='px-6 pt-30 pb-12'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>

          {/* Left Side - Text Side  */}
          <div className='space-y-2 md:space-y-4'>

            {/* Text - Section */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-500 text-xs font-bold uppercase tracking-wider">
                Featured Issue
            </div>
            <h1 className={`text-4xl md:text-6xl font-extrabold leading-[1.1] tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Designing for the <br />
              <span className="text-3xl md:text-5xl gradient-text">next billion users.</span>
            </h1>
            <p className={`text-2xs md:text-xl max-w-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Exploring the intersection of accessibility, performance, and human-centric design patterns in emerging markets.
            </p>

            {/* Buttons - AI  */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                className={`relative overflow-hidden px-4 md:px-8 py-2 md:py-3 rounded-full font-semibold border-2 cursor-pointer transition-all duration-300 group
                  ${darkMode ? 'border-gray-700 bg-white text-gray-900' : 'border-gray-950 bg-black text-white'}
                `}
                >
                  {/* Animated Background */}
                  <span
                    className={`absolute inset-0 w-0 group-hover:w-full transition-all duration-300 ease-in-out
                    ${darkMode ? 'bg-gray-900' : 'bg-white'  }
                `}
                  ></span>

                  {/* Button Text */}
                  <span className={`relative z-10 ${darkMode ? "group-hover:text-white" : "group-hover:text-black"} transition-colors duration-300`}>
                    Read me
                  </span>
                </button>
               <button
                className={`relative overflow-hidden px-4 md:px-8 py-2 md:py-3 rounded-full font-semibold border-2 cursor-pointer transition-all duration-300 group
                  ${darkMode ? 'border-gray-700 text-white' : 'border-gray-950 text-black'}
                `}
                >
                  {/* Animated Background */}
                  <span
                    className={`absolute inset-0 w-0 group-hover:w-full transition-all duration-300 ease-in-out
                    ${darkMode ? 'bg-white' : 'bg-black'}
                `}
                  ></span>

                  {/* Button Text */}
                  <span className={`relative z-10 ${darkMode ? "group-hover:text-black" : "group-hover:text-white"} transition-colors duration-300`}>
                    Archieve
                  </span>
                </button>
            </div>
          </div>

          {/* Right Side - Picture Side */}
          <div className="relative group cursor-pointer rounded-2xl overflow-hidden aspect-4/3 shadow-2xl">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-2" />
              <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop"
              alt="Hero"
              className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="flex items-center justify-between text-white">
                  <span className="text-sm font-medium bg-black/50 backdrop-blur-md px-3 py-1 rounded-full">Editor's Pick</span>
                  <span className="flex items-center gap-2 text-sm font-medium bg-black/50 backdrop-blur-md px-3 py-1 rounded-full"><Clock size={14} /> 12 min read</span>
                </div>
              </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero
