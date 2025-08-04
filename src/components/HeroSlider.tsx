'use client';

import { useState, useEffect, useCallback } from 'react';

interface Slide {
  src: string;
  title: string;
}

const slides: Slide[] = [
  {
    src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    title: 'Цэцэг дээрх эрвээхэй',
  },
  {
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    title: 'Big Buck Bunny трейлер',
  },
  {
    src: 'https://www.w3schools.com/html/movie.mp4',
    title: 'Демо видео',
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
    <section className="relative h-64 md:h-96 overflow-hidden" aria-label="Херог">
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden={i !== index}
        >
          <video
            src={slide.src}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            aria-label={slide.title}
          />
          <div className="absolute inset-0 bg-blue-900/60 flex items-center justify-center">
            <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
              Иргэдийг хүчирхэгжүүлж, илүү хүчтэй маргаашийг бүтээе
            </h1>
          </div>
        </div>
      ))}
      <button
        aria-label="Өмнөх слайд"
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 hover:bg-white transition focus:outline-none focus:ring"
      >
        &#9664;
      </button>
      <button
        aria-label="Дараагийн слайд"
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 hover:bg-white transition focus:outline-none focus:ring"
      >
        &#9654;
      </button>
    </section>
  );
}
