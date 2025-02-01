"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">MyWebsite</Link>
        </div>

        {/* Navbar (Desktop) */}
        <nav className="hidden sm:flex space-x-6">
          <ul className="flex space-x-6">
            <li className="group">
              <Link href="/" className="hover:text-blue-500 transition-colors duration-300">
                Home
              </Link>
              <span className="block h-1 w-0 group-hover:w-full bg-blue-500 transition-all duration-300"></span>
            </li>
            <li className="group">
              <Link href="#about" className="hover:text-blue-500 transition-colors duration-300">
                About
              </Link>
              <span className="block h-1 w-0 group-hover:w-full bg-blue-500 transition-all duration-300"></span>
            </li>
            <li className="group">
              <Link href="#services" className="hover:text-blue-500 transition-colors duration-300">
                Services
              </Link>
              <span className="block h-1 w-0 group-hover:w-full bg-blue-500 transition-all duration-300"></span>
            </li>
            <li className="group">
              <Link href="#contact" className="hover:text-blue-500 transition-colors duration-300">
                Contact
              </Link>
              <span className="block h-1 w-0 group-hover:w-full bg-blue-500 transition-all duration-300"></span>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="sm:hidden text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-black text-white p-4 space-y-4">
          <Link href="/" className="block">Home</Link>
          <Link href="#about" className="block">About</Link>
          <Link href="#services" className="block">Services</Link>
          <Link href="#contact" className="block">Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
