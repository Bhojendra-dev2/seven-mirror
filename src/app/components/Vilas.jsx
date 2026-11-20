"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const tabs = [
  { label: "All Stays", city: "all" },
  { label: "Jaipur", city: "Jaipur", icon: "/images/hwamahal.png" },
  { label: "Gurugram", city: "Gurugram", icon: "/images/gurugram.png" },
];

// Yahan apni properties edit / add karo
const properties = [
  {
    slug: "ASHOK NAGAR, JAIPUR",
    city: "Jaipur",
    location: "ASHOK NAGAR, JAIPUR",
    title: "Rossiero",
    sub: "Floor 1",
    price: "₹6,000",
    lines: [
      "Private 4-Bedroom Villa",
      "4 Bedrooms · Private garden · Central location",
    ],
    images: ["/images/6th.jpg", "/images/2nd.jpg"],
  },
  {
    slug: "lumen-royale",
    city: "Gurugram",
    location: "DLF Phase 2, Gurugram",
    title: "Rossiero",
    price: "₹6,000",
    lines: [
      "One residence per floor · 4 in the building.",
      "Private Balcony · Elevator Access · Boutique Service",
    ],
    images: ["/images/8th.jpg", "/images/4th.jpg"],
  },
  {
    slug: "cozy-loft-floor-2",
    city: "Jaipur",
    location: "Malviya Nagar, Jaipur",
    title: "Rossiero",
    sub: "Floor 2",
    price: "₹6,000",
    lines: [
      "Private 4-Bedroom Villa",
      "4 Bedrooms · Private garden · Central location",
    ],
    images: ["/images/3rd.jpg", "/images/first.jpg"],
  },
  {
    slug: "cozy-loft-floor-3",
    city: "Jaipur",
    location: "Malviya Nagar, Jaipur",
    title: "Rossiero",
    sub: "Floor 3",
    price: "₹6,000",
    lines: [
      "Private 4-Bedroom Villa",
      "4 Bedrooms · Private garden · Central location",
    ],
    images: ["/images/first.jpg", "/images/4th.jpg"],
  },
];

/* ---------- Single card ---------- */
function PropertyCard({ p }) {
  const [img, setImg] = useState(0);

  return (
    <article className="w-[270px] shrink-0 snap-start sm:w-[300px] lg:w-[329px]">
      {/* Image + dots */}
      <div className="relative aspect-[329/343] overflow-hidden rounded-3xl bg-neutral-200">
        {p.images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={`${p.title} ${p.sub ?? ""} - photo ${i + 1}`}
            fill
            sizes="(max-width: 640px) 270px, 329px"
            className={`object-cover transition-opacity duration-500 ${
              i === img ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-1.5">
          {p.images.map((_, i) => (
            <button
              key={i}
              onClick={() => setImg(i)}
              aria-label={`Photo ${i + 1}`}
              className={`rounded-full transition-all ${
                i === img
                  ? "h-2.5 w-2.5 border-2 border-white bg-white/30"
                  : "h-1.5 w-1.5 bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Info */}
      <div className="mt-4">
        <p className="text-[11px] uppercase tracking-wide text-neutral-800">
          {p.location}
        </p>

        <div className="mt-2 flex items-center justify-between gap-3">
          <h3 className="text-[22px] font-semibold leading-tight tracking-tight text-neutral-950 lg:text-[26px]">
            {p.title}
            {p.sub && (
              <span className="text-[15px] font-semibold lg:text-[17px]">
                {" "}
                - {p.sub}
              </span>
            )}
          </h3>

          <div className="flex shrink-0 items-center gap-3">
            <div className="text-right leading-tight">
              <p className="text-[17px] font-semibold text-neutral-950">
                {p.price}
              </p>
              <p className="text-[10px] text-neutral-400">/night + tax</p>
            </div>
            <Link
              href={`/properties/${p.slug}`}
              aria-label={`View ${p.title}`}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#111] text-white transition hover:scale-105"
            >
              <FiArrowRight size={13} />
            </Link>
          </div>
        </div>

        <div className="mt-4 space-y-0.5 text-[12px] text-neutral-700">
          {p.lines.map((l) => (
            <p key={l}>{l}</p>
          ))}
        </div>
      </div>
    </article>
  );
}

/* ---------- Section ---------- */
export default function Vila() {
  const [active, setActive] = useState("all");
  const [progress, setProgress] = useState(0);
  const trackRef = useRef(null);

  const list =
    active === "all" ? properties : properties.filter((p) => p.city === active);

  const updateProgress = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const p = ((el.scrollLeft + el.clientWidth) / el.scrollWidth) * 100;
    setProgress(Math.min(100, Math.max(0, p)));
  }, []);

  // tab change hone par reset
  useEffect(() => {
    trackRef.current?.scrollTo({ left: 0 });
    updateProgress();
  }, [active, updateProgress]);

  useEffect(() => {
    window.addEventListener("resize", updateProgress);
    return () => window.removeEventListener("resize", updateProgress);
  }, [updateProgress]);

  const scrollByCard = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const first = el.children[0];
    const second = el.children[1];
    const step = second
      ? second.offsetLeft - first.offsetLeft
      : first.offsetWidth + 24;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="py-12 sm:py-16 ">
      {/* Intro */}
      <div className="mx-auto max-w-3xl px-4 text-center">
        <p className="text-xs sm:text-sm">
          A Small, Hand-picked Portfolio - Every Home Run By Our Own Resident
          Team.
        </p>
        <h2 className="mt-6 font-serif text-3xl font-semibold sm:text-4xl">
          Discover Places Worth <em className="font-normal">Going To</em>
        </h2>
        <p className="mt-5 text-xs text-neutral-500 sm:text-sm">
          This is the full portfolio today. New homes are added as they&apos;re
          onboarded - nothing shown here is a placeholder.
        </p>

        {/* Tabs */}
        <div className="no-scrollbar mt-10 flex justify-start gap-8 overflow-x-auto border-b border-neutral-300 sm:justify-center sm:gap-12">
          {tabs.map((t) => (
            <button
              key={t.label}
              onClick={() => setActive(t.city)}
              className={`-mb-px flex shrink-0 cursor-pointer items-center gap-2 border-b-2 pb-3 text-sm ${
                active === t.city
                  ? "border-black font-semibold"
                  : "border-transparent text-neutral-700"
              }`}
            >
              {t.icon && (
                <Image
                  src={t.icon}
                  alt=""
                  width={40}
                  height={36}
                  className="h-9 w-auto"
                />
              )}
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Cards track */}
      <div
        ref={trackRef}
        onScroll={updateProgress}
        className="no-scrollbar mt-10 flex snap-x snap-mandatory scroll-pl-6 gap-6 overflow-x-auto px-6 lg:scroll-pl-12 lg:gap-7 lg:px-12"
      >
        {list.map((p) => (
          <PropertyCard key={p.slug} p={p} />
        ))}
      </div>

      {/* Controls */}
      <div className="mt-8 flex items-center justify-center gap-5">
        <button
          onClick={() => scrollByCard(-1)}
          aria-label="Previous"
          className="cursor-pointer text-neutral-900"
        >
          <FiChevronLeft size={24} />
        </button>

        <div className="h-[2px] w-[200px] bg-[#efe7da] sm:w-[246px]">
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
          <FiChevronRight size={24} />
        </button>
      </div>
      <div className="flex items-center justify-center pt-[60px]">
        <button className="rounded-[99px] h-[69px] w-[202px] bg-[#202020] hover:bg-[#383535] cursor-pointer text-white ">
          See All Value→
        </button>
      </div>
    </section>
  );
}
