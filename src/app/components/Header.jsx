"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { label: "Stays", href: "/" },
  { label: "Properties", href: "/properties" },
  { label: "Add Your Property", href: "/add-property" },
  { label: "Our Story", href: "/our-story" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Stays");

  return (
    <header className="relative z-40 bg-white">
      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-10">
        <div className="flex items-center ">
          <Link href="/" className="shrink-0 ">
            <Image
              src="/images/Logo.png"
              alt="Seven Mirror Stays"
              width={48.88}
              height={56}
              priority
              className="h-10 w-auto sm:h-12 lg:h-14"
            />
          </Link>
          <div className="flex flex-col pl-3">
            <h1 className="capitalize font-bold">SEVEN MIRROR STAYS</h1>
            <h6 className="capitalize">LUXURY HOMES</h6>
          </div>
        </div>

        <nav className="hidden items-center gap-1 rounded-full bg-[#f3ecdc] p-1.5 md:flex lg:gap-2 border-amber-950">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setActive(l.label)}
              className={`rounded-full px-4 py-2 text-[13px] transition-colors lg:px-6 ${
                active === l.label
                  ? "bg-[#2a2420] text-white"
                  : "text-neutral-700 hover:bg-black/5"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 ">
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white transition hover:scale-105 sm:h-11 sm:w-11"
          >
            <FaWhatsapp size={22} />
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f3ecdc] sm:h-11 sm:w-11"
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="absolute   [right-4 top-[76px] w-64 rounded-2xl bg-[#f3ecdc] p-3 shadow-xl sm:right-6 lg:right-10">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => {
                setActive(l.label);
                setOpen(false);
              }}
              className="block rounded-xl px-4 py-3 text-sm hover:bg-white/60"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
