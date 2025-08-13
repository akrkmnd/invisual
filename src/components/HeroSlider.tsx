// src/components/HeroSlider.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';

const slides = [
  {
    image: '/assets/slide1.png',
    title: 'Contemporizing Jakarta\'s Art Center',
    subtitle: 'Taman Ismail Marzuki',
  },
  {
    image: '/assets/slide2.png',
    title: 'The Salted Egg-spert',
    subtitle: 'Sec Bowl',
  },
  {
    image: '/assets/slide3.png',
    title: 'Digital Campaign for Music Festival',
    subtitle: 'Nama Acara: Rhapsody Fest',
  },
  {
    image: '/assets/slide4.png',
    title: 'Branding & Identity Redesign',
    subtitle: 'Klien: Kopi Sejuk',
  },
];

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="relative w-full h-full">
        <Image 
          src={currentSlideData.image} 
          alt={currentSlideData.title}
          fill
          style={{ objectFit: 'cover' }}
          priority
          className="transition-opacity duration-500 ease-in-out"
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>
      
      <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
        <div className="max-w-2xl text-white ml-24 mb-32">
          <h1 className="text-6xl font-bold mb-4">{currentSlideData.title}</h1>
          <p className="text-xl opacity-80">{currentSlideData.subtitle}</p>
        </div>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 right-16 flex flex-col space-y-4 z-30">
        <button onClick={prevSlide} className="text-white text-5xl transition-colors duration-300 hover:text-primary">
          &lt;
        </button>
        <button onClick={nextSlide} className="text-white text-5xl transition-colors duration-300 hover:text-primary">
          &gt;
        </button>
      </div>

      <div className="absolute bottom-16 right-16 flex items-center space-x-4 z-30">
        <span className="text-white text-lg font-mono">{`0${currentSlide + 1}`}</span>
        <div className="w-12 h-[1px] bg-white opacity-50"></div>
        <span className="text-white text-lg font-mono opacity-50">{`0${slides.length}`}</span>
      </div>
    </section>
  );
};