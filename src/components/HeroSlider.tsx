'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';

interface Slide {
  src: string;
  alt: string;
}

const slides: Slide[] = [
  {
    src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=60',
    alt: 'Capitol Building at sunset',
  },
  {
    src: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1200&q=60',
    alt: 'People holding flags',
  },
  {
    src: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=1200&q=60',
    alt: 'Government meeting hall',
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  const prev = useCallback(() => {
    setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  }, []);

  const next = useCallback(() => {
    setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-64 md:h-96 overflow-hidden" aria-label="Hero" >
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden={i !== index}
        >
          <Image src={slide.src} alt={slide.alt} fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-blue-900/60 flex items-center justify-center">
            <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
              Empowering Citizens for a Stronger Tomorrow
            </h1>
          </div>
        </div>
      ))}
      <button
        aria-label="Previous Slide"
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 hover:bg-white transition focus:outline-none focus:ring"
      >
        &#9664;
      </button>
      <button
        aria-label="Next Slide"
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 hover:bg-white transition focus:outline-none focus:ring"
      >
        &#9654;
      </button>
    </section>
  );
}
