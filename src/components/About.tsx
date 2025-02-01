"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function About() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 bg-black text-white" id="about">
      {/* Gradient Title */}
      <h2 className="max-w-7xl pl-4 mx-auto text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text text-center">
        Get to Know About Us
      </h2>

      {/* Description */}
      <p className="text-gray-400 max-w-3xl text-center mx-auto mt-6 px-6 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam magni odit rerum repellendus? Nesciunt, obcaecati dolorem eligendi nihil animi rerum voluptates consequuntur, quibusdam unde, doloribus nisi. Eum vitae magnam veniam voluptatibus nulla deleniti iusto sint assumenda voluptatem, accusamus minima, ducimus quisquam non aspernatur quibusdam dignissimos explicabo eveniet delectus optio. Laudantium?
      </p>

      {/* Carousel */}
      <div className="mt-12">
        <Carousel items={cards} />
      </div>
    </div>
  );
}

/* Dummy Content */
const DummyContent = () => {
  return (
    <div className="bg-neutral-900 p-8 md:p-14 rounded-3xl shadow-lg text-center" id="about">
      <p className="text-gray-300 text-base md:text-xl max-w-3xl mx-auto">
        <span className="font-bold text-white">
          &quot;The first rule of Apple club is that you boast about Apple club&quot;
        </span>{" "}
        Capture every thought with precision. Enhance productivity and creativity effortlessly.
      </p>
      <Image
        src="https://assets.aceternity.com/macbook.png"
        alt="Macbook mockup"
        height={400}
        width={400}
        className="w-full md:w-1/2 mx-auto object-contain mt-6"
      />
    </div>
  );
};

/* Data for Carousel */
const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Innovation",
    title: "Launch the new Apple Vision Pro.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Innovation",
    title: "Launch the new Apple Vision Pro.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
];

