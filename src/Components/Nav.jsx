import React, { useState } from "react";
import UserProfile from "./UserProfile";
import RegiterButton from "./RegiterButton";
import LoginButton from "./LoginButton";
import { useAuthContext } from "../context/AuthContext";

const Nav = () => {
  const { user } = useAuthContext();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black p-4 md:p-6">
      <div className="flex items-center justify-between">
        <img
          src="https://create.grabmerchantshop.com/theme/static/images/grabmart-logo.png"
          alt="Logo"
          className="w-32 h-8 md:w-40 md:h-10"
        />

        {/* Toggle menu */}
        <div className="md:hidden">
          <button
            id="menu-toggle"
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium">
          <li>
            <a href="/" className="text-white hover:text-gray-300">
              Home
            </a>
          </li>
         {user &&
             (user.roles.includes("ROLE_MODERATOR") ||
              user.roles.includes("ROLE_ADMIN")) && (
          <li>
            <a href="/add" className="text-white hover:text-gray-300">
              Add Restaurant
            </a>
          </li>
        )}
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Report
            </a>
          </li>
        </ul>

        {/* User Profile or Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
        {user && (
            <div className="space-x-2 flex mr-2">
              Welcome, <span className="text-red-700">{user.username}</span>
              {user.roles.map((role, index) => {
                return (
                  <div key={index} className="badge badge-accent">
                    {role}
                  </div>
                );
              })}
            </div>
          )}
          {user ? (
            <UserProfile />
          ) : (
            <div className="space-x-2">
              <RegiterButton />
              <LoginButton />
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="flex flex-col mt-4 space-y-3 md:hidden">
          <li>
            <a href="/" className="text-white hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="/add" className="text-white hover:text-gray-300">
              Add Restaurant
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Report
            </a>
          </li>
          {user ? (
            <li>
              <UserProfile />
            </li>
          ) : (
            <li className="flex space-x-2">
              <RegiterButton />
              <LoginButton />
            </li>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Nav;
