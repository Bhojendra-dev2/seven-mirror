import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";

const company = [
  { label: "Properties", href: "/properties" },
  { label: "Destinations", href: "/destinations" },
  { label: "About Us", href: "/our-story" },
  { label: "Add Your Property", href: "/add-property" },
  { label: "Contact Us", href: "/contact" },
];

const policy = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Payments Terms", href: "/payments-terms" },
  { label: "Cancellation / Refund Policy", href: "/refund-policy" },
];

const explore = [
  {
    city: "Villas in Jaipur",
    stays: [
      { label: "Rossiero, Ashok Nagar", href: "/properties/rossiero" },
      { label: "Cozy Loft, Malviya Nagar", href: "/properties/cozy-loft" },
    ],
  },
  {
    city: "Villas in Gurugram",
    stays: [
      { label: "Lumen Royale, DLF Phase 2", href: "/properties/lumen-royale" },
    ],
  },
];

const head = "text-[13px] font-semibold uppercase text-white lg:text-[0.9cqw]";
const link =
  "text-[13px] text-white/90 transition hover:text-white lg:text-[0.88cqw]";

export default function Footer() {
  return (
    <footer className="@container bg-[#1f1f1f] text-white">
      {/* ---------- Top: story ---------- */}
      <div className="mx-auto max-w-[1920px] px-4 pb-10 pt-12 text-center sm:px-6 lg:px-0 lg:pb-[5.6cqw] lg:pt-[3.1cqw]">
        <h2 className="font-serif text-2xl font-semibold leading-none sm:text-[28px] lg:text-[1.85cqw]">
          Seven Mirror Stays
        </h2>
        <p className="mx-auto mt-5 max-w-[420px] text-sm leading-relaxed text-white/95 lg:mt-[2.4cqw] lg:max-w-[31cqw] lg:text-[1.1cqw] lg:leading-[1.55cqw]">
          A small, currently limited portfolio of managed stays across Jaipur
          and Gurugram, with a resident team behind every home.
        </p>
        <Link
          href="/our-story"
          className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-white px-8 text-xs text-neutral-950 transition hover:bg-neutral-100 lg:mt-[1.6cqw] lg:h-[3.3cqw] lg:w-[10.9cqw] lg:px-0 lg:text-[0.9cqw]"
        >
          Discover our Story
        </Link>
      </div>

      {/* ---------- Columns ---------- */}
      <div className="mx-auto max-w-[1920px] px-4 pb-10 sm:px-6 lg:px-0 lg:pb-[2.8cqw] lg:pl-[9.9cqw]">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:flex lg:items-start lg:gap-0">
          {/* Company */}
          <div className="lg:w-[16.8cqw]">
            <h3 className={head}>Company</h3>
            <ul className="mt-4 space-y-2 lg:mt-[2.4cqw] lg:space-y-[0.4cqw]">
              {company.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className={link}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policy */}
          <div className="lg:w-[19.9cqw]">
            <h3 className={head}>Policy</h3>
            <ul className="mt-4 space-y-2 lg:mt-[2.4cqw] lg:space-y-[0.4cqw]">
              {policy.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className={link}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Emblem */}
          <div className="order-first col-span-2 flex justify-center lg:order-none lg:col-span-1 lg:-mt-[0.5cqw] lg:mr-[12cqw] lg:w-[6.4cqw] lg:shrink-0">
            <div className="relative h-28 w-[84px] lg:h-[8.5cqw] lg:w-[6.4cqw]">
              <Image
                src="/images/flogo.png"
                alt="Seven Mirror Stays emblem"
                fill
                sizes="100px"
                className="object-contain"
              />
            </div>
          </div>

          {/* Explore */}
          <div className="lg:w-[16.8cqw]">
            <h3 className={head}>Explore Stays</h3>
            <div className="mt-4 space-y-5 lg:mt-[2.4cqw] lg:space-y-[1.6cqw]">
              {explore.map((g) => (
                <div key={g.city}>
                  <p className="text-[13px] font-semibold lg:text-[0.88cqw]">
                    {g.city}
                  </p>
                  <ul className="mt-2 space-y-1 lg:mt-[0.4cqw] lg:space-y-[0.4cqw]">
                    {g.stays.map((s) => (
                      <li key={s.label}>
                        <Link href={s.href} className={link}>
                          – {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className={head}>Social</h3>
            <div className="mt-4 flex items-center gap-4 lg:mt-[2.4cqw] lg:gap-[1.6cqw]">
              <a
                href="https://instagram.com/7_mirror_bnb"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fd5949_45%,#d6249f_60%,#285aeb_90%)] text-white lg:h-[1.55cqw] lg:w-[1.55cqw]"
              >
                <FaInstagram className="h-4 w-4 lg:h-[0.95cqw] lg:w-[0.95cqw]" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1877f2] text-white lg:h-[1.55cqw] lg:w-[1.55cqw]"
              >
                <FaFacebookF className="h-3.5 w-3.5 lg:h-[0.8cqw] lg:w-[0.8cqw]" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="flex h-5 w-7 items-center justify-center rounded-[5px] bg-[#ff0000] text-white lg:h-[1.15cqw] lg:w-[1.55cqw] lg:rounded-[0.3cqw]"
              >
                <FaYoutube className="hidden" />
                <span className="ml-0.5 block h-0 w-0 border-y-[4px] border-l-[7px] border-y-transparent border-l-white lg:border-y-[0.28cqw] lg:border-l-[0.5cqw]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Bottom bar ---------- */}
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-[1920px] flex-col items-center gap-5 px-4 py-8 text-center text-[11px] text-white/90 sm:px-6 lg:h-[10cqw] lg:flex-row lg:justify-between lg:gap-0 lg:px-[4.75cqw] lg:py-0 lg:text-left lg:text-[0.88cqw]">
          <p className="order-2 lg:order-none">
            © 2026 Seven Mirror Stays. All rights reserved.
          </p>

          <div className="relative order-1 h-12 w-[200px] opacity-60 lg:order-none lg:h-[4.1cqw] lg:w-[21.7cqw] lg:-translate-x-[1.5cqw]">
            <Image
              src="/images/namelogo.png"
              alt="Seven Mirror Stays Luxury Homes"
              fill
              sizes="220px"
              className="object-contain"
            />
          </div>

          <p className="order-3 lg:order-none">
            Design &amp; build by Kontent Kraft Digital
          </p>
        </div>
      </div>
    </footer>
  );
}
