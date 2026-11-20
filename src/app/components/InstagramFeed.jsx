import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";

const handle = "7_mirror_bnb";

export default function InstagramFeed({
  image = "/images/insta.png",
}) {
  return (
    <section className="@container mx-auto max-w-[1920px] px-4 py-12 sm:px-6 sm:py-16 lg:px-[4.75cqw] lg:py-[5.5cqw]">
      {/* Gradient definition for the Instagram glyph */}
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#feda75" />
            <stop offset="30%" stopColor="#fa7e1e" />
            <stop offset="55%" stopColor="#d62976" />
            <stop offset="80%" stopColor="#962fbf" />
            <stop offset="100%" stopColor="#4f5bd5" />
          </linearGradient>
        </defs>
      </svg>

      {/* Heading */}
      <div className="mx-auto max-w-[620px] text-center lg:max-w-[40cqw]">
        <h2 className="font-serif text-[26px] font-medium leading-none text-neutral-950 sm:text-[30px] lg:text-[2.3cqw]">
          Stay Inspired, Follow Along
        </h2>
        <p className="mt-4 text-xs leading-relaxed text-neutral-900 sm:text-[13px] lg:mt-[2.3cqw] lg:text-[0.85cqw] lg:leading-[1.25cqw]">
          Discover beautiful stays, hidden escapes, and unforgettable moments
          from Seven Mirror Stays. Follow us on Instagram for travel
          inspiration, new properties, guest experiences, and a glimpse into
          life at our stays.
        </p>
      </div>

      {/* Handle + Follow */}
      <div className="mt-6 flex items-center justify-center gap-3 lg:mt-[2.2cqw] lg:gap-[1.2cqw]">
        <a
          href={`https://instagram.com/${handle}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.12)] lg:h-[2.8cqw] lg:w-[2.8cqw]"
        >
          <FaInstagram
            className="h-6 w-6 lg:h-[1.8cqw] lg:w-[1.8cqw]"
            style={{ fill: "url(#ig-grad)" }}
          />
        </a>

        <span className="text-xs text-neutral-900 lg:text-[0.9cqw]">
          @{handle}
        </span>

        <Link
          href={`https://instagram.com/${handle}`}
          target="_blank"
          rel="noreferrer"
          className="flex h-10 items-center justify-center rounded-full bg-[#1a1a1a] px-7 text-xs font-semibold text-white transition hover:bg-black lg:ml-[0.4cqw] lg:h-[3.1cqw] lg:w-[8.5cqw] lg:px-0 lg:text-[0.9cqw]"
        >
          Follow us
        </Link>
      </div>

      {/* Single image strip */}
      <a
        href={`https://instagram.com/${handle}`}
        target="_blank"
        rel="noreferrer"
        className="mt-8 block overflow-hidden rounded-xl lg:mt-[2.4cqw] lg:rounded-[0.7cqw]"
      >
        {/* Mobile: image scroll hoti hai taaki chhoti na ho jaye */}
        <div className="no-scrollbar overflow-x-auto lg:overflow-visible">
          <div className="relative aspect-[870/232] min-w-[640px] lg:min-w-0">
            <Image
              src={image}
              alt="Seven Mirror Stays on Instagram"
              fill
              sizes="(max-width: 1024px) 640px, 91vw"
              className="object-cover"
            />
          </div>
        </div>
      </a>
    </section>
  );
}