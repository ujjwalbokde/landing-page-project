/* eslint-disable react/no-unescaped-entities */
"use client";
import { useEffect, useState } from "react";
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from "next/navigation";

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  // Detecting screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Set 768px as the breakpoint for mobile screens
    };

    // Initial check
    handleResize();

    // Attach event listener
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        },
      },
    });

    if (signUpError) {
      setError(signUpError.message);
    } else {
      setIsSignUp(false); // Switch to sign-in section after successful sign-up
      setError(''); // Clear any previous errors
    }
    setLoading(false);
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      setError(signInError.message);
    } else {
      router.push("/profile");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center lg:justify-center min-h-screen px-4 md:px-0">
      {/* Large screen UI */}
      {!isMobile && (
        <div
          className={`relative w-full max-w-[768px] min-h-[480px] text-white border-2 border-gray-600 shadow-2xl rounded-lg overflow-hidden transition-all duration-500 ease-in-out ${isSignUp ? "right-panel-active" : ""}`}
        >
          {/* SignUp Form */}
          <div
            className={`absolute top-0 w-full md:w-1/2 h-full transition-all duration-500 ${isSignUp ? "translate-x-full opacity-100 z-10" : "opacity-0 z-0"}`}
          >
            <form onSubmit={handleSignUp} className="flex flex-col items-center justify-center h-full p-8 text-center">
              <h1 className="text-4xl font-bold transition duration-300 text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text mb-5">Create Account</h1>
              
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 mt-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 mt-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 mt-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              <button
                type="submit"
                className="mt-4 px-6 py-2 text-white rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Sign Up'}
              </button>
            </form>
          </div>

          {/* SignIn Form */}
          <div
            className={`absolute top-0 w-full md:w-1/2 h-full transition-all duration-500 ${isSignUp ? "translate-x-full opacity-0 z-0" : "translate-x-0 opacity-100 z-10"}`}
          >
            <form onSubmit={handleSignIn} className="flex flex-col items-center justify-center h-full p-8 text-center">
              <h1 className="text-4xl font-bold transition duration-300 text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text mb-5">Sign in</h1>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 mt-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 mt-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              <a href="#" className="text-sm mt-2 text-gray-500">Forgot your password?</a>
              <button
                type="submit"
                className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-full"
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Sign In'}
              </button>
            </form>
          </div>

          {/* Panel - Hidden on small screens */}
          <div
            className={`hidden md:flex ${!isSignUp ? "rounded-l-full" : "rounded-r-full"} absolute top-0 left-1/2 w-full md:w-1/2 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white flex flex-col items-center justify-center transition-all duration-500 ${isSignUp ? "-translate-x-full" : "translate-x-0"}`}
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
        </div>
      )}

      {/* Mobile UI */}
      {isMobile && (
        <div className="w-full">
          <div className="flex flex-col items-center justify-center min-h-screen px-4">
            {/* SignUp Form */}
            {isSignUp && (
              <form onSubmit={handleSignUp} className="flex flex-col items-center justify-center w-full p-8 text-center border rounded-lg">
                <h1 className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text mb-5">Create Account</h1>
                
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full text-black p-2 mt-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 mt-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-2 mt-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                <button
                  type="submit"
                  className="mt-4 px-6 py-2 text-white rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                  disabled={loading}
                >
                  {loading ? 'Loading...' : 'Sign Up'}
                </button>
              </form>
            )}

            {/* SignIn Form */}
            {!isSignUp && (
              <form onSubmit={handleSignIn} className="flex flex-col items-center justify-center w-full p-8 text-center border rounded-lg">
                <h1 className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text mb-5">Sign in</h1>
                
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 mt-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-2 mt-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                <a href="#" className="text-sm mt-2 text-gray-500">Forgot your password?</a>
                <button
                  type="submit"
                  className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-full"
                  disabled={loading}
                >
                  {loading ? 'Loading...' : 'Sign In'}
                </button>
              </form>
            )}
            {/* Toggle button */}
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-white mt-5"
            >
              {isSignUp ? <p>Already have a account? <span className="text-red-400">Sign In</span></p> : <p>Don't have a account? <span className="text-red-400">Sign Up</span></p>}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthForm;