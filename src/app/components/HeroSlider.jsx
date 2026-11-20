"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  FiChevronLeft,
  FiChevronRight,
  FiVolume2,
  FiVolumeX,
  FiMaximize,
} from "react-icons/fi";
import { FaPlay, FaPause } from "react-icons/fa6";
import SearchBar from "./SearchBar";

const slides = [
  "/images/hero1.png",
  "/images/hero-2.jpg",
  "/images/hero-3.jpg",
  "/images/hero-4.jpg",
  "/images/hero-5.jpg",
];

export default function HeroSlider() {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const goTo = useCallback((i) => {
    const el = trackRef.current;
    if (!el) return;
    const n = (i + slides.length) % slides.length;
    el.children[n].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, []);

  const onScroll = () => {
    const el = trackRef.current;
    const step = el.children[0].offsetWidth + 12; // gap-3 = 12px
    setIndex(
      Math.max(
        0,
        Math.min(slides.length - 1, Math.round(el.scrollLeft / step)),
      ),
    );
  };

  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => goTo(index + 1), 5000);
    return () => clearInterval(t);
  }, [playing, index, goTo]);

  return (
    <section className="relative">
      {/* Mobile: search bar slider ke upar */}
      <div className="px-4 pb-4 md:hidden">
        <SearchBar />
      </div>

      {/* Slider track */}
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth
        before:w-[calc(4%-12px)] before:shrink-0 after:w-[calc(4%-12px)] after:shrink-0
        md:before:w-[calc(11%-12px)] md:after:w-[calc(11%-12px)]"
      >
        {slides.map((src, i) => (
          <div
            key={src}
            className="relative aspect-[4/5] w-[92%] shrink-0 snap-center overflow-hidden rounded-[28px] sm:aspect-[16/10] md:aspect-auto md:h-[360px] md:w-[78%] lg:h-[420px] xl:h-[480px]"
          >
            <Image
              src={src}
              alt={`Luxury villa ${i + 1}`}
              fill
              priority={i === 0}
              sizes="(max-width: 768px) 92vw, 78vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />

            {/* Text: search bar ke NEECHE */}
            <div className="absolute inset-x-0 top-8 px-6 text-center text-white md:top-[120px] lg:top-[130px]">
              <p className="text-[11px] uppercase tracking-wide sm:text-sm">
                Private Villa Stays Across India
              </p>
              <h1 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
                Stay In The Extraordinary
              </h1>
              <p className="mx-auto mt-3 max-w-xl text-xs text-white/90 sm:text-sm">
                Curated Private Villas Across India&apos;s Most Coveted
                Destinations - Exclusively Yours.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: search bar slide ke upar (overlay) */}
      {/* Desktop: search bar slide ke upar (overlay) */}
      <div className="pointer-events-none absolute inset-x-0 top-6 z-20 hidden justify-center px-4 md:flex">
        <div className="pointer-events-auto w-full max-w-[1000px]">
          <SearchBar />
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={() => goTo(index - 1)}
        aria-label="Previous"
        className="absolute left-[12%] top-1/2 z-10 hidden -translate-y-1/2 cursor-pointer text-white md:block"
      >
        <FiChevronLeft size={28} />
      </button>
      <button
        onClick={() => goTo(index + 1)}
        aria-label="Next"
        className="absolute right-[12%] top-1/2 z-10 hidden -translate-y-1/2 cursor-pointer text-white md:block"
      >
        <FiChevronRight size={28} />
      </button>

      {/* Play / Pause */}
      <button
        onClick={() => setPlaying((p) => !p)}
        aria-label={playing ? "Pause" : "Play"}
        className="absolute bottom-4 left-[12%] z-10 hidden h-10 w-[70px] items-center justify-center rounded-full bg-white text-black md:flex"
      >
        {playing ? <FaPause size={14} /> : <FaPlay size={14} />}
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 z-10 hidden -translate-x-1/2 gap-1.5 md:flex">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-3 bg-white" : "w-1.5 bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Volume + Fullscreen */}
      <div className="absolute bottom-4 right-[12%] z-10 hidden h-10 w-[76px] items-center justify-evenly rounded-full bg-white text-black md:flex">
        <button onClick={() => setMuted((m) => !m)} aria-label="Toggle sound">
          {muted ? <FiVolumeX size={16} /> : <FiVolume2 size={16} />}
        </button>
        <button
          onClick={() => document.documentElement.requestFullscreen?.()}
          aria-label="Fullscreen"
        >
          <FiMaximize size={16} />
        </button>
      </div>
    </section>
  );
}
