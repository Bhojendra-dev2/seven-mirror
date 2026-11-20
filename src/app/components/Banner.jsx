import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function Banner({
  image = "/images/banner.png",
  name = "Jaipur",
  count = 56,
  desc = "Stay in thoughtfully selected homes that capture the character, comfort, and charm of Jaipur.",
  href = "/properties?city=Jaipur",
}) {
  return (
    <section className="pt-14 sm:pt-20">
      {/* Heading */}
      <h2 className="px-4 text-center font-serif text-[26px] font-bold  leading-[1.45] text-neutral-950 sm:text-[34px] lg:text-[48px]">
        Where We Stay
        <br />
        Two <span className="text-neutral-400">Cities Beautiful Homes</span>
        <br />
        <span className="text-neutral-400">Choose Yours</span>
      </h2>

      {/* Full width image */}
      <div className="relative mt-10 aspect-[4/5] w-full overflow-hidden sm:mt-14 sm:aspect-[16/10] md:aspect-[887/421]">
        <Image
          src={image}
          alt={`${name} stays`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Bottom info pill */}
        <div className="absolute inset-x-3 bottom-3 flex flex-col gap-4 rounded-3xl bg-white px-6 py-5 shadow-lg sm:inset-x-6 sm:bottom-6 md:inset-x-auto md:bottom-5 md:left-1/2 md:h-[52px] md:w-[63%] md:-translate-x-1/2 md:flex-row md:items-center md:gap-0 md:rounded-full md:px-0 md:py-0 lg:bottom-8 lg:h-[76px]">
          <h3 className="font-serif text-[22px] uppercase leading-none text-neutral-950 md:w-[17%] md:shrink-0 md:text-center md:text-[19px] lg:text-[30px]">
            {name}
          </h3>

          <span className="hidden h-[34px] w-px shrink-0 bg-neutral-300 md:block lg:h-[48px]" />

          <div className="min-w-0 flex-1 md:px-5 lg:px-8">
            <p className="text-[14px] font-semibold leading-tight text-neutral-950 md:text-[12px] lg:text-[16px]">
              {count} Exclusive Stays
            </p>
            <p className="mt-1 text-[12px] leading-tight text-neutral-600 md:truncate md:text-[9.5px] lg:mt-2 lg:text-[13px]">
              {desc}
            </p>
          </div>

          <Link
            href={href}
            className="flex h-11 w-full shrink-0 items-center justify-center gap-1.5 rounded-full bg-[#1a1a1a] px-6 text-[13px] text-white transition hover:bg-black md:mr-[10px] md:h-[30px] md:w-auto md:text-[9.5px] lg:mr-4 lg:h-[46px] lg:px-8 lg:text-[13px]"
          >
            See All Stay <FiArrowRight size={11} />
          </Link>
        </div>
      </div>
    </section>
  );
}
