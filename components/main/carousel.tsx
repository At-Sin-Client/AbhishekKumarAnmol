"use client"
import {
    CarouselComponent,
    CarouselItemsDirective,
    CarouselItemDirective,
  } from "@syncfusion/ej2-react-navigations";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const images = [
  '/c1.png',
  '/c2.png',
  '/c3.png',
  '/c4.png',
  '/c5.png',
  '/c6.png',
  '/c7.png',
  '/c9.png'
];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full max-w-screen-lg bg-white border border-gray-200 rounded-lg overflow-hidden">
        <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className="w-full h-auto rounded-lg z-[2] max-w-full max-h-full"
      />

      <button
        className="absolute top-1/2 left-4 font-bold transform -translate-y-1/2 bg-black  text-white rounded-full p-2"
        onClick={prevImage}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 right-4 transform font-bold -translate-y-1/2 bg-black  text-white rounded-full p-2"
        onClick={nextImage}
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
