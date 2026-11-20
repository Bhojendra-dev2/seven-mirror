"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const stay = {
  slug: "lumen-royale",
  location: "DLF Phase 2 · Gurugram",
  title: "Lumen Royale",
  tagline: "Timeless luxury in the heart of Gurugram.",
  chips: [
    "Corporate stays",
    "Wedding Stays",
    "Long stays",
    "Staycations",
    "International travel",
  ],
  description:
    "A Ralph Lauren-inspired designer residence where classic elegance meets contemporary comfort. Thoughtfully curated interiors, generous living spaces and private balconies create a home that feels sophisticated, warm and effortlessly comfortable.",
  distances: [
    { place: "Cyber Hub", info: "~4 km · 10-15 min" },
    { place: "MG Road", info: "~3 km · 10 min" },
    { place: "Golf Course Road", info: "~2 km · 10 min" },
    { place: "New Delhi Airport", info: "~18 km · 30-40 min" },
  ],
  price: "₹6,000",
  images: ["/images/Lumen.jpg"],
};

export default function LumenRoyale() {
  const [img, setImg] = useState(0);
  const total = stay.images.length;
  const go = (i) => setImg((i + total) % total);

  return (
    <section className="@container mx-auto max-w-[1920px] overflow-x-clip px-4 py-10 sm:px-6 lg:px-0 lg:py-[3.5cqw]">
      <div className="flex flex-col gap-5 lg:relative lg:block lg:h-[37.8cqw]">
        {/* IMAGE (1000 x 660) */}
        <div className="relative aspect-[1000/660] w-full overflow-hidden rounded-[24px] lg:absolute lg:left-0 lg:top-[1.75cqw] lg:z-10 lg:aspect-auto lg:h-[34.4cqw] lg:w-[52.1cqw] lg:rounded-l-none lg:rounded-r-[2cqw]">
          {stay.images.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt={`${stay.title} - photo ${i + 1}`}
              fill
              priority={i === 0}
              sizes="(max-width: 1024px) 100vw, 52vw"
              className={`object-cover transition-opacity duration-500 ${
                i === img ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          <button
            onClick={() => go(img - 1)}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer text-white lg:left-[1.9cqw]"
          >
            <FiChevronLeft
              strokeWidth={1.3}
              className="h-7 w-7 lg:h-[1.9cqw] lg:w-[1.9cqw]"
            />
          </button>
          <button
            onClick={() => go(img + 1)}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-white lg:right-[1.9cqw]"
          >
            <FiChevronRight
              strokeWidth={1.3}
              className="h-7 w-7 lg:h-[1.9cqw] lg:w-[1.9cqw]"
            />
          </button>

          <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-1.5 lg:bottom-[1.5cqw] lg:gap-[0.45cqw]">
            {stay.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setImg(i)}
                aria-label={`Photo ${i + 1}`}
                className={`rounded-full transition-all ${
                  i === img
                    ? "h-2.5 w-2.5 border-2 border-white bg-white/30 lg:h-[0.9cqw] lg:w-[0.9cqw]"
                    : "h-1.5 w-1.5 bg-white/70 lg:h-[0.5cqw] lg:w-[0.5cqw]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CARD */}
        <div className="flex flex-col justify-center rounded-3xl border-[1.5px] border-[#e7e3d6] p-6 sm:p-8 lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-[65.9cqw] lg:rounded-l-[2.2cqw] lg:rounded-r-none lg:border-r-0 lg:p-0 lg:pl-[20.6cqw]">
          <div className="lg:w-[38.8cqw]">
            <p className="text-xs uppercase tracking-wide text-neutral-900 lg:text-[1.05cqw]">
              {stay.location}
            </p>

            <h2 className="mt-3 text-3xl font-semibold leading-none tracking-tight text-neutral-950 sm:text-4xl lg:mt-[1.4cqw] lg:text-[2.8cqw]">
              {stay.title}
            </h2>

            <p className="mt-3 text-sm text-neutral-900 lg:mt-[1.05cqw] lg:text-[1.13cqw]">
              {stay.tagline}
            </p>

            <div className="mt-4 flex flex-wrap gap-2 lg:mt-[1.6cqw] lg:gap-[0.5cqw]">
              {stay.chips.map((c) => (
                <span
                  key={c}
                  className="rounded-full bg-[#f5efe3] px-3.5 py-2 text-[11px] text-neutral-800 lg:px-[1.05cqw] lg:py-0 lg:text-[0.92cqw] lg:leading-[2.27cqw]"
                >
                  {c}
                </span>
              ))}
            </div>

            <p className="mt-4 text-[13px] leading-relaxed text-neutral-800 lg:mt-[1.65cqw] lg:w-[38cqw] lg:text-[0.92cqw] lg:leading-[1.27cqw]">
              {stay.description}
            </p>

            <div className="mt-5 grid grid-cols-2 gap-4 rounded-2xl border border-neutral-300 p-4 lg:mt-[1.45cqw] lg:flex lg:h-[5.15cqw] lg:w-[38cqw] lg:items-stretch lg:gap-0 lg:rounded-[1.4cqw] lg:p-0">
              {stay.distances.map((d, i) => (
                <Fragment key={d.place}>
                  {i > 0 && (
                    <span className="hidden w-px bg-neutral-300 lg:my-[0.8cqw] lg:block" />
                  )}
                  <div className="lg:flex lg:flex-auto lg:flex-col lg:justify-center lg:px-[1cqw]">
                    <p className="text-xs text-neutral-900 lg:text-[0.92cqw]">
                      {d.place}
                    </p>
                    <p className="mt-1 text-[11px] text-neutral-400 lg:mt-[0.45cqw] lg:text-[0.82cqw]">
                      {d.info}
                    </p>
                  </div>
                </Fragment>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-x-3 gap-y-4 lg:mt-[2.2cqw] lg:w-[38cqw] lg:flex-nowrap">
              <div className="flex items-baseline gap-2 lg:gap-[0.5cqw]">
                <span className="text-2xl font-semibold text-neutral-950 lg:text-[1.9cqw]">
                  {stay.price}
                </span>
                <span className="text-xs text-neutral-400 lg:text-[0.95cqw]">
                  /night + tax
                </span>
              </div>

              <div className="flex items-center gap-3 lg:gap-[0.9cqw]">
                <Link
                  href={`/properties/${stay.slug}`}
                  className="flex h-11 items-center justify-center gap-1.5 rounded-full border border-neutral-900 px-6 text-xs text-neutral-900 transition hover:bg-neutral-100 lg:h-[3.6cqw] lg:w-[8.5cqw] lg:gap-[0.3cqw] lg:px-0 lg:text-[0.92cqw]"
                >
                  Explore Stay{" "}
                  <FiArrowRight className="lg:h-[0.9cqw] lg:w-[0.9cqw]" />
                </Link>

                <Link
                  href={`/reserve?stay=${stay.slug}`}
                  className="flex h-11 items-center justify-center gap-1.5 rounded-full bg-[#1a1a1a] px-7 text-xs font-semibold text-white transition hover:bg-black lg:h-[3.6cqw] lg:w-[10.8cqw] lg:gap-[0.3cqw] lg:px-0 lg:text-[0.92cqw]"
                >
                  Reserve Now{" "}
                  <FiArrowRight className="lg:h-[0.9cqw] lg:w-[0.9cqw]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
