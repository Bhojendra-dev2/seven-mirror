"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa6";
import { SiAirbnb } from "react-icons/si";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const reviews = [
  {
    image: "/images/reviews/r1.jpg",
    title: "“A Beautiful Stay with an Amazing Experience”",
    text: "We had a wonderful stay at Seven Mirror Stays. The property was beautifully maintained, comfortable, and exactly as shown in the photos. The location was convenient, and the entire check-in experience was smooth.",
    name: "Priya S.",
    rating: "5.0",
    stay: "Stayed for 2 nights · September 2026",
  },
  {
    image: "/images/reviews/r2.jpg",
    title: "“A Beautiful Stay with an Amazing Experience”",
    text: "We had a wonderful stay at Seven Mirror Stays. The property was beautifully maintained, comfortable, and exactly as shown in the photos. The location was convenient, and the entire check-in experience was smooth.",
    name: "Priya S.",
    rating: "5.0",
    stay: "Stayed for 2 nights · September 2026",
  },
  {
    image: "/images/reviews/r3.jpg",
    title: "“A Beautiful Stay with an Amazing Experience”",
    text: "We had a wonderful stay at Seven Mirror Stays. The property was beautifully maintained, comfortable, and exactly as shown in the photos. The location was convenient, and the entire check-in experience was smooth.",
    name: "Priya S.",
    rating: "5.0",
    stay: "Stayed for 2 nights · September 2026",
  },
  {
    image: "/images/reviews/r1.jpg",
    title: "“A Beautiful Stay with an Amazing Experience”",
    text: "We had a wonderful stay at Seven Mirror Stays. The property was beautifully maintained, comfortable, and exactly as shown in the photos. The location was convenient, and the entire check-in experience was smooth.",
    name: "Priya S.",
    rating: "5.0",
    stay: "Stayed for 2 nights · September 2026",
  },
];

export default function GuestReviews() {
  const trackRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const updateProgress = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const p = ((el.scrollLeft + el.clientWidth) / el.scrollWidth) * 100;
    setProgress(Math.min(100, Math.max(0, p)));
  }, []);

  useEffect(() => {
    updateProgress();
    window.addEventListener("resize", updateProgress);
    return () => window.removeEventListener("resize", updateProgress);
  }, [updateProgress]);

  const scrollByCard = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const a = el.children[0];
    const b = el.children[1];
    const step = b ? b.offsetLeft - a.offsetLeft : a.offsetWidth;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="@container mx-auto max-w-[1920px] overflow-hidden py-12 sm:py-16 lg:py-[4cqw]">
      {/* ---------- Header ---------- */}
      <div className="flex flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-[5.3cqw]">
        <div className="flex items-start gap-3 lg:gap-[1.2cqw]">
          <FaQuoteLeft className="mt-1 h-10 w-10 shrink-0 text-[#e8e0d3] lg:mt-[0.3cqw] lg:h-[5.2cqw] lg:w-[5.2cqw]" />
          <div>
            <h2 className="font-serif text-[22px] font-semibold leading-tight text-neutral-950 sm:text-[26px] lg:text-[2.15cqw]">
              Why Our Guests Love Staying With Us
            </h2>
            <p className="mt-2 text-[10px] text-neutral-800 sm:text-[11px] lg:mt-[1.3cqw] lg:text-[0.8cqw]">
              Not A Room In A Building We Manage From A Distance A Home Someone
              From Our Team Actually Looks After.
            </p>
          </div>
        </div>

        <div className="lg:text-center">
          <p className="font-serif text-[13px] font-semibold text-neutral-950 lg:text-[1.05cqw] lg:text-right">
            Consistently Highly Rated Across
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 lg:mt-[1.4cqw] lg:gap-[1.9cqw]">
            {/* 5 green stars */}
            <div className="flex gap-[3px] text-[#1fb351] lg:gap-[0.25cqw]">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="h-4 w-4 lg:h-[1.5cqw] lg:w-[1.5cqw]" />
              ))}
            </div>

            {/* Google */}
            <span className="text-[15px] font-medium tracking-tight lg:text-[1.45cqw]">
              <span className="text-[#4285f4]">G</span>
              <span className="text-[#ea4335]">o</span>
              <span className="text-[#fbbc05]">o</span>
              <span className="text-[#4285f4]">g</span>
              <span className="text-[#34a853]">l</span>
              <span className="text-[#ea4335]">e</span>
            </span>

            {/* Trustpilot */}
            <span className="flex items-center gap-1 text-[14px] font-semibold text-neutral-950 lg:gap-[0.3cqw] lg:text-[1.3cqw]">
              <FaStar className="h-4 w-4 text-[#00b67a] lg:h-[1.4cqw] lg:w-[1.4cqw]" />
              Trustpilot
            </span>

            {/* airbnb */}
            <span className="flex items-center gap-1 text-[14px] font-medium text-[#ff5a5f] lg:gap-[0.3cqw] lg:text-[1.3cqw]">
              <SiAirbnb className="h-4 w-4 lg:h-[1.4cqw] lg:w-[1.4cqw]" />
              airbnb
            </span>
          </div>
        </div>
      </div>

      {/* ---------- Reviews track ---------- */}
      <div
        ref={trackRef}
        onScroll={updateProgress}
        className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 sm:px-6 lg:mt-[2.8cqw] lg:gap-[2.6cqw] lg:px-[5.3cqw] lg:scroll-pl-[5.3cqw]"
      >
        {reviews.map((r, i) => (
          <article
            key={i}
            className="flex w-[88vw] shrink-0 snap-start gap-3 border-neutral-300 sm:w-[460px] lg:w-[37.2cqw] lg:gap-[0.5cqw] lg:border-r"
          >
            <div className="relative h-[150px] w-[120px] shrink-0 overflow-hidden rounded-2xl bg-neutral-200 sm:h-[170px] sm:w-[135px] lg:h-[15.7cqw] lg:w-[13.1cqw] lg:rounded-[1.4cqw]">
              <Image
                src={r.image}
                alt={r.name}
                fill
                sizes="(max-width: 1024px) 135px, 13cqw"
                className="object-cover"
              />
            </div>

            <div className="flex min-w-0 flex-1 flex-col lg:pl-[0.5cqw] lg:pr-[2.2cqw]">
              <h3 className="text-[12px] font-bold leading-snug text-neutral-950 lg:text-[1.05cqw]">
                {r.title}
              </h3>
              <p className="mt-1 text-[11px] leading-[1.45] text-neutral-800 lg:mt-[0.3cqw] lg:text-[0.95cqw] lg:leading-[1.55cqw]">
                {r.text}
              </p>

              <div className="mt-auto pt-3 text-[11px] text-neutral-950 lg:pt-0 lg:text-[0.9cqw]">
                <p className="font-semibold">- {r.name}</p>
                <p className="mt-0.5 lg:mt-[0.2cqw]">
                  <span className="tracking-tight">★★★★★</span> {r.rating}
                </p>
                <p className="mt-0.5 font-semibold lg:mt-[0.2cqw]">{r.stay}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* ---------- Controls ---------- */}
      <div className="mt-8 flex items-center justify-center gap-5 lg:mt-[2.6cqw] lg:gap-[2cqw]">
        <button
          onClick={() => scrollByCard(-1)}
          aria-label="Previous"
          className="cursor-pointer text-neutral-900"
        >
          <FiChevronLeft className="h-6 w-6 lg:h-[1.8cqw] lg:w-[1.8cqw]" />
        </button>

        <div className="h-[2px] w-[180px] bg-[#e9e5d8] lg:w-[18.8cqw]">
          <div
            className="h-full bg-neutral-900 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <button
          onClick={() => scrollByCard(1)}
          aria-label="Next"
          className="cursor-pointer text-neutral-900"
        >
          <FiChevronRight className="h-6 w-6 lg:h-[1.8cqw] lg:w-[1.8cqw]" />
        </button>
      </div>
    </section>
  );
}