import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const posts = [
  {
    slug: "four-days-in-jaipur",
    image: "/images/j2.png.",
    title: "Four Days in Jaipur: A Local's Guide to the Pink City",
    desc: "Where to eat, wander and watch the sunset, mapped around a stay at Rossiero.",
  },
  {
    slug: "fully-managed-second-home",
    image: "/images/j3.png",
    title: 'What "Fully Managed" Actually Means for Your Second Home',
    desc: "A behind-the-scenes look at how we care for a property between guest stays.",
  },
  {
    slug: "corporate-stays-gurugram",
    image: "/images/j4.png",
    title: "Corporate Stays in Gurugram: Why Guests Are Choosing Residences",
    desc: "Inside the appeal of Lumen Royale for business travel, relocations and long stays.",
  },
  {
    slug: "fully-managed-second-home-2",
    image: "/images/j5.png",
    title: 'What "Fully Managed" Actually Means for Your Second Home',
    desc: "A behind-the-scenes look at how we care for a property between guest stays.",
  },
];

export default function StayJournal() {
  return (
    <section className="@container mx-auto max-w-[1920px] px-4 py-12 sm:px-6 sm:py-16 lg:px-[5.1cqw] lg:py-[6.5cqw]">
      {/* Heading */}
      <div className="text-center">
        <h2 className="font-serif text-[28px] font-bold leading-none text-neutral-950 sm:text-[32px] lg:text-[2.3cqw]">
          The Stay Journal
        </h2>
        <p className="mt-4 text-xs text-neutral-900 sm:text-[13px] lg:mt-[2.2cqw] lg:text-[0.95cqw]">
          Travel Stories, Local Guides, And Thoughtful Inspiration For Your Next
          Escape
        </p>
      </div>

      {/* Cards */}
      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-[3cqw] lg:grid-cols-4 lg:gap-[2.2cqw]">
        {posts.map((p) => (
          <article key={p.slug} className="flex flex-col">
            <Link
              href={`/blog/${p.slug}`}
              className="relative block aspect-[202/151] w-full overflow-hidden rounded-2xl bg-neutral-200 lg:rounded-[1.5cqw]"
            >
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 22vw"
                className="object-cover"
              />
            </Link>

            <h3 className="mt-4 font-serif text-[17px] font-bold leading-snug text-neutral-950 lg:mt-[1.4cqw] lg:text-[1.35cqw] lg:leading-[1.9cqw]">
              {p.title}
            </h3>

            <p className="mt-3 text-[13px] leading-snug text-neutral-800 lg:mt-[1.3cqw] lg:text-[0.85cqw] lg:leading-[1.25cqw]">
              {p.desc}
            </p>

            <Link
              href={`/blog/${p.slug}`}
              className="mt-4 flex h-10 w-fit items-center justify-center gap-1.5 rounded-full border border-neutral-400 px-6 text-xs text-neutral-900 transition hover:bg-neutral-100 lg:mt-[1.1cqw] lg:h-[2.7cqw] lg:w-[8cqw] lg:gap-[0.3cqw] lg:px-0 lg:text-[0.85cqw]"
            >
              Read More{" "}
              <FiArrowRight className="lg:h-[0.85cqw] lg:w-[0.85cqw]" />
            </Link>
          </article>
        ))}
      </div>

      {/* See all */}
      <div className="mt-10 flex justify-center lg:mt-[3.1cqw]">
        <Link
          href="/blog"
          className="flex h-12 items-center justify-center gap-1.5 rounded-full bg-[#1a1a1a] px-9 text-[13px] font-semibold text-white transition hover:bg-black lg:h-[4.7cqw] lg:w-[13cqw] lg:gap-[0.3cqw] lg:px-0 lg:text-[1cqw]"
        >
          See All Blogs <FiArrowRight className="lg:h-[1cqw] lg:w-[1cqw]" />
        </Link>
      </div>
    </section>
  );
}
