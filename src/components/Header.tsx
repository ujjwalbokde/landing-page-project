'use client'

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setIsOpen(false); // Close the menu after clicking a link
    }
  };

  const handleSignUpClick = () => {
    setIsOpen(false); // Close the menu when Sign Up is clicked
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-black text-white p-4 sticky top-0 z-50 px-6 md:px-20 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section: Logo */}
        <div className="text-2xl font-bold transition duration-300 text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text">
          <Link href="/">Ujjwal Bokde</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Middle Section: Navigation Links */}
        <div
          ref={menuRef}
          className={`fixed md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent p-5 md:p-0 transition-all duration-300 ease-in-out md:flex md:space-x-6 items-center ${
            isOpen ? "block" : "hidden"
          }`}
          style={{ height: isOpen ? "calc(100vh - 4rem)" : "auto" }}
        >
          <Link
            href="/"
            className="block w-full text-left md:inline-block py-2 md:py-0 text-lg transition duration-300 hover:text-transparent hover:bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text"
          >
            Home
          </Link>
          {/* About Section */}
          <button
            onClick={() => scrollToSection('about')}
            className="block w-full text-left md:inline-block py-2 md:py-0 text-lg transition duration-300 hover:text-transparent hover:bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text"
          >
            About
          </button>
          
          {/* Features Section */}
          <button
            onClick={() => scrollToSection('features')}
            className="block w-full text-left md:inline-block py-2 md:py-0 text-lg transition duration-300 hover:text-transparent hover:bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text"
          >
            Features
          </button>

          {/* Services Section */}
          <button
            onClick={() => scrollToSection('services')}
            className="block w-full text-left md:inline-block py-2 md:py-0 text-lg transition duration-300 hover:text-transparent hover:bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text"
          >
            Services
          </button>

          {/* Contact Section */}
          <button
            onClick={() => scrollToSection('contact')}
            className="block w-full text-left md:inline-block py-2 md:py-0 text-lg transition duration-300 hover:text-transparent hover:bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text"
          >
            Contact
          </button>

          {/* Sign Up Button for Mobile */}
          <div className="md:hidden mt-4">
            <button
              onClick={handleSignUpClick}
              className="relative inline-flex h-12 w-full overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 text-sm font-medium text-white backdrop-blur-3xl">
                <Link href="/signup">Sign Up</Link>
              </span>
            </button>
          </div>
        </div>

        {/* Right Section: Sign Up Button for Desktop */}
        <div className="hidden md:block">
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 text-sm font-medium text-white backdrop-blur-3xl">
              <Link href="/login">Log In</Link>
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;