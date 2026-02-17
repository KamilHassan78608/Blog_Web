import { Menu, Moon, Search, Sun, TrendingUp, User } from "lucide-react";
import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Navbar = () => {

    const { darkMode, setdarkMode } = useContext(AppContext);

    const [isOpen, setisOpen] = useState(true);

    const NavItems = ["Journal", "Fallowing", "Favorite", "Dashboard"];
    const [selectedNav, setselectedNav] = useState(NavItems[0]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 shadow-2xl shadow-gray-500 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} `}>
      <div className="relative max-w-7xl mx-auto px-6 h-20 flex items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer hover:text-indigo-600 group">
          <div className="h-8 w-8 flex items-center justify-center border rounded-lg transition-all duration-300 group-hover:rotate-12">
            <TrendingUp size={18} strokeWidth={3} />
          </div>
          <span className="text-xl font-extrabold tracking-tight">
            Blog<span className="text-indigo-300">.</span>
          </span>
        </div>

        {/* Navbar Items */}
        <nav className="hidden md:flex items-center gap-8 font-bold absolute left-1/2 -translate-x-1/2">
          {NavItems.map((item) => (
            <a 
              key={item}
              onClick={() => setselectedNav(item)}
              className={`text-sm cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:scale-120 hover:text-indigo-600 ${selectedNav === item ? "text-indigo-500 -translate-y-0.5 scale-120" : ""}`}>
              {item}
            </a>
          ))}
        </nav>

        {/* Right Buttons */}
        <div className='ml-auto flex items-center gap-2 md:gap-4'>

          {/* Search Button */}
          <button className="p-2 rounded-full hover:text-indigo-500">
            <Search size={20} />
          </button>

          {/* Toogle dark Mode Button */}
          <button 
            className="p-2 rounded-full cursor-pointer hover:text-indigo-500"
            onClick={() => setdarkMode(prev => !prev)}
          >
            {
              darkMode ? <>
                <Sun size={20} />
              </> : <>
                <Moon size={20} />
              </>
            }
          </button>

          {/* Login Button */}
          <div>
            <button className="p-2 rounded-full cursor-pointer hover:text-indigo-500">
              <User size={20} />
            </button>
            {/* <img className='h-8 w-8 rounded-full' src="https://img.freepik.com/free-photo/white-brush-stroke-texture-background_53876-167180.jpg?semt=ais_user_personalization&w=740&q=80" alt="img" /> */}
          </div>

          {/* Mobile Category View Button */}
          <button 
            onClick={()=>setisOpen(prev => !prev)}
            className="md:hidden p-2 rounded-full cursor-pointer">
            <Menu size={20} />
          </button>

        </div>

      </div>

      {/* Mobile view */}
      { 
        isOpen && <>
            <div className={`w-full fixed md:hidden flex flex-col justify-center text-center shadow-lg ${darkMode ? "bg-gray-900/98 shadow-gray-500" : "bg-gray-100 shadow-gray-800"}`}>
                {
                    NavItems.map((item)=>(
                        <a
                          key={item} 
                          onClick={() => setselectedNav(item)}
                          className={`py-5 border-b border-gray-400  ${selectedNav === item ? "text-indigo-500 -translate-y-0.5 scale-110" : ""}`}
                        >
                            {item}
                        </a>
                    ))
                }
            </div>
        </>
      }
        

    </header>
  );
};

export default Navbar;
