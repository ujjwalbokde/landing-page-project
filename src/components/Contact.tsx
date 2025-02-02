"use client";
import React, { FormEvent, useState } from "react";
import Globe from "./Globe";

export function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send to an API)
    console.log(formData);
  };

  return (
    <div
      className="w-full h-full py-20 lg:py-36 bg-black text-white"
      id="contact"
    >
      {/* Gradient Title */}
      <h2 className="max-w-7xl pl-4 mx-auto text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text text-center">
        Contact Us
      </h2>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-7xl mx-auto px-6 lg:px-12 mt-8 lg:mt-12">
        {/* Globe Component */}
        <div className="w-full lg:w-1/2 flex justify-center lg:mb-36 h-auto lg:h-96">
          <Globe />
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-[40%] ">
          <form className="space-y-4" onSubmit={handleSubmit}>
            {" "}
            {/* Reduced space-y-6 to space-y-4 */}
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-400 mb-1">
                {" "}
                {/* Reduced margin-bottom */}
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="py-2 px-4 bg-transparent border border-gray-500 rounded-md text-white"
                placeholder="Your Name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-400 mb-1">
                {" "}
                {/* Reduced margin-bottom */}
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="py-2 px-4 bg-transparent border border-gray-500 rounded-md text-white"
                placeholder="Your Email"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-gray-400 mb-1">
                {" "}
                {/* Reduced margin-bottom */}
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="py-2 px-4 bg-transparent border border-gray-500 rounded-md text-white"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-md mt-4 hover:bg-gradient-to-l"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
