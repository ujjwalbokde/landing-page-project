"use client";
import React from "react";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa"; // Import react-icons

export function Footer() {
  return (
    <div className="bg-black text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Flex container for footer sections */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-8">

          {/* Left Section - Company Name and Links */}
          <div className="flex flex-col items-center sm:items-start sm:w-1/3">
            <div className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                Ujjwal Bokde
              </span>
            </div>
            <div className="flex gap-6 mb-4 sm:mb-0">
              <a href="#home" className="text-gray-400 hover:text-white transition duration-300">
                Home
              </a>
              <a href="#about" className="text-gray-400 hover:text-white transition duration-300">
                About
              </a>
              <a href="#services" className="text-gray-400 hover:text-white transition duration-300">
                Services
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white transition duration-300">
                Contact
              </a>
            </div>
          </div>

          {/* Center Section - Social Media Icons */}
          <div className="flex justify-center gap-6 mb-4 sm:mb-0 sm:w-1/3">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaTwitter className="text-2xl" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaFacebook className="text-2xl" />
            </a>
          </div>

          {/* Right Section - Copyright */}
          <div className="text-gray-400 text-sm sm:w-1/3 text-center sm:text-right">
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
