"use client";
import React, { FormEvent, useState } from "react";

export function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send to an API)
    console.log(formData);
  };

  return (
    <div className="w-full h-full py-20 bg-black text-white">
      {/* Gradient Title */}
      <h2 className="max-w-7xl pl-4 mx-auto text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text text-center">
        Contact Us
      </h2>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto mt-12 px-6">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="py-3 px-4 bg-transparent border border-gray-500 rounded-md text-white"
              placeholder="Your Name"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="py-3 px-4 bg-transparent border border-gray-500 rounded-md text-white"
              placeholder="Your Email"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleInputChange}
              className="py-3 px-4 bg-transparent border border-gray-500 rounded-md text-white"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-md mt-6 hover:bg-gradient-to-l"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
