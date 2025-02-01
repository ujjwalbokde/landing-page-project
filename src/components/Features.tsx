import React from 'react';
import { Card } from './ui/card-feature';

const Features = () => {
  return (
    <div className="text-white py-12 px-6 text-center" id='features'>
      {/* Gradient Heading */}
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-8">
        Our Features
      </h1>

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
