import React from 'react';
import { Card } from './ui/card-feature';
const Features = () => {
  return (

    <div className="text-white py-12 px-6 text-center" id='features'>
      {/* Gradient Heading */}
      <h2 className="max-w-7xl pl-4 mb-20 mx-auto text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text text-center">
        Our Features
      </h2>

      {/* Flex Container for Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Features;
