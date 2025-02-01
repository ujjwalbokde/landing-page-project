"use client";
import React from "react";

export function Footer() {
  return (
    <div className="bg-black text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Footer Logo */}
        <div className="text-4xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Your Company
          </span>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6">
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

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <i className="fab fa-facebook text-2xl"></i>
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}