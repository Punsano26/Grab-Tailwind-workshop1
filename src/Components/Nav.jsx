import React, { useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black p-4">
      <div className="flex items-center justify-between">
        <div className="text-white text-2xl font-semibold">Grab Food Coppy</div>

        {/* toggle menu */}
        <div className="md:hidden">
          <button id="menu-toggle" className="text-white" onClick={toggleMenu}>
            
            
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden md:flex space-x-4">
          <li>
            <a href="#" className="text-white"></a>Home
          </li>
          <li>
            <a href="#" className="text-white"></a>Service
          </li>
          <li>
            <a href="#" className="text-white"></a>About
          </li>
          <li>
            <a href="#" className="text-white"></a>Report
          </li>
        </ul>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen ? (
      <ul className="flex-col md:hidden">
          <li className="py-3"> 
            <a href="#" className="text-white"></a>Home
          </li>
          <li className="py-3">
            <a href="#" className="text-white"></a>Service
          </li >
          <li className="py-3">
            <a href="#" className="text-white"></a>About
          </li>
          <li className="py-3">
            <a href="#" className="text-white"></a>Report
          </li>
        </ul>
       )  : null}
    </nav>
  );
};

export default Nav;
