import Image from "next/image";

export default function CityBanner({
  image = "/images/citybanner.png",
  brand = "GURUGRAM",
  title = "56 Exclusive Stays",
  description = "Discover handpicked homes blending modern comfort with refined design.",
  buttonText = "See All Stay",
  avatar,
  onClick,
}) {
  return (
    <section className="w-full px-4 py-8 sm:px-6">
      <div className="relative mx-auto w-full max-w-[1400px] overflow-hidden h-[920px] rounded-[30px] ">
        {/* Hero Image */}
        <div className="relative aspect-[1.52/1] w-full">
          <Image
            src={image}
            alt="Luxury stay with city view"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 840px"
          />
        </div>

        {/* Avatar */}
        {avatar && (
          <div className="absolute right-[22%] top-[7%] z-10">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border-[3px] border-white shadow-lg sm:h-12 sm:w-12">
              <Image src={avatar} alt="Profile" fill className="object-cover" />
            </div>
          </div>
        )}

        {/* Bottom Banner */}
        <div className="absolute bottom-[5.5%] left-1/2 z-10 w-[1200px] -translate-x-1/2 sm:w-[86%]">
          <div className="flex items-center gap-3 rounded-[20px] bg-white px-4 py-3 shadow-xl sm:gap-5 sm:rounded-full sm:px-7 sm:py-4">
            {/* Brand */}
            <div className="shrink-0">
              <h2 className="font-serif text-[18px] font-bold tracking-[-1px] sm:text-[24px]">
                {brand}
              </h2>
            </div>

            {/* Divider */}
            <div className="hidden h-10 w-px shrink-0 bg-gray-300 sm:block" />

            {/* Content */}
            <div className="min-w-0 flex-1">
              <h3 className="text-[11px] font-semibold text-black sm:text-xs">
                {title}
              </h3>

              <p className="mt-1 hidden text-[10px] leading-4 text-gray-600 sm:block">
                {description}
              </p>

              <p className="mt-1 block truncate text-[9px] text-gray-600 sm:hidden">
                {description}
              </p>
            </div>

            {/* Button */}
            <button
              onClick={onClick}
              className="shrink-0 rounded-full bg-[#222] px-4 py-3 text-[9px] font-medium text-white transition-all cursor-pointer duration-300 hover:bg-black sm:px-6 sm:py-3.5 sm:text-[10px]"
            >
              {buttonText}
              <span className="ml-1">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
