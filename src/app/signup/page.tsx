import { Input } from "@/components/ui/input"; // Correct import for Input
import {Button} from "@/components/ui/button"; // Correct import for Button
import Image from "next/image";
import { motion } from "framer-motion";

export default function Signup() {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-8">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-gray-900 rounded-lg shadow-lg overflow-hidden">
        {/* Left Side - Signup Form */}
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-3xl font-bold text-white mb-6">Sign Up</h1>
          <form className="space-y-6">
            <Input type="text" placeholder="Name" className="bg-gray-800 text-white" aria-label="Name" />
            <Input type="email" placeholder="Email" className="bg-gray-800 text-white" aria-label="Email" />
            <Input type="password" placeholder="Password" className="bg-gray-800 text-white" aria-label="Password" />
            <Button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90">
              Sign Up
            </Button>
          </form>
          <p className="text-gray-400 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-purple-500 hover:underline">
              Login
            </a>
          </p>
        </div>

        {/* Right Side - Animated Image */}
        <div className="w-full md:w-1/2 relative flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center"
          >
            <Image
              src="/signup-image.png" // Replace with your image path
              alt="Signup Image"
              width={400}
              height={400}
              className="rounded-lg"
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}