"use client";
import { useState } from "react";
import { FaGoogle, FaTwitter } from 'react-icons/fa'; 
const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 md:px-0">
      <div
        className={`relative w-full max-w-[768px] min-h-[480px] text-white border-2 border-gray-600 shadow-2xl rounded-lg overflow-hidden transition-all duration-500 ease-in-out ${isSignUp ? "right-panel-active" : ""}`}
      >
        {/* SignUp Form */}
        <div
          className={`absolute top-0 w-full md:w-1/2 h-full transition-all duration-500 ${isSignUp ? "translate-x-full opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          <form className="flex flex-col items-center justify-center h-full p-8 text-center">
            <h1 className="text-2xl font-bold transition duration-300 text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text">Create Account</h1>
            <div className="flex gap-2 my-4">
            <a href="#" className="p-2 border border-[#db4437] bg-[#db4437]  hover:bg-red-700 rounded-full"><FaGoogle/></a>
            <a href="#" className="p-2 border border-[#1da1f2] bg-[#1da1f2]  hover:bg-blue-600 rounded-full"><FaTwitter/></a>
            </div>
            <span className="text-sm">or use your email for registration</span>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 mt-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mt-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 mt-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="mt-4 px-6 py-2 text-white rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Sign Up
            </button>
          </form>
        </div>

        {/* SignIn Form */}
        <div
          className={`absolute top-0 w-full md:w-1/2 h-full transition-all duration-500 ${isSignUp ? "translate-x-full opacity-0 z-0" : "translate-x-0 opacity-100 z-10"}`}
        >
          <form className="flex flex-col items-center justify-center h-full p-8 text-center">
            <h1 className="text-2xl font-bold transition duration-300 text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text">Sign in</h1>
            <div className="flex gap-2 my-4">
            <a href="#" className="p-2 border border-[#db4437] bg-[#db4437]  hover:bg-red-700 rounded-full"><FaGoogle/></a>
            <a href="#" className="p-2 border border-[#1da1f2] bg-[#1da1f2]  hover:bg-blue-600 rounded-full"><FaTwitter/></a>
            </div>
            <span className="text-sm">or use your account</span>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mt-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 mt-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <a href="#" className="text-sm mt-2 text-gray-500">Forgot your password?</a>
            <button className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-full">
              Sign In
            </button>
          </form>
        </div>

        {/* Panel - Hidden on small screens */}
        <div
          className={`hidden md:flex ${!isSignUp?"rounded-l-full":"rounded-r-full"} absolute top-0 left-1/2 w-full md:w-1/2 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white flex flex-col items-center justify-center transition-all duration-500 ${isSignUp ? "-translate-x-full" : "translate-x-0"}`}
        >
          <div className="text-center p-8">
            {isSignUp ? (
              <>
                <h1 className="text-xl font-bold">Welcome Back!</h1>
                <p className="mt-2">To keep connected with us please login with your personal info</p>
                <button
                  onClick={() => setIsSignUp(false)}
                  className="mt-4 px-6 py-2 border border-white rounded-full"
                >
                  Sign In
                </button>
              </>
            ) : (
              <>
                <h1 className="text-xl font-bold">Hello, Friend!</h1>
                <p className="mt-2">Enter your personal details and start your journey with us</p>
                <button
                  onClick={() => setIsSignUp(true)}
                  className="mt-4 px-6 py-2 border border-white rounded-full"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>

        {/* Toggle Button - Visible only on small screens */}
        <button
          onClick={() => setIsSignUp(!isSignUp)}
          className="md:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-full"
        >
          {isSignUp ? "Sign In" : "Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default AuthForm;