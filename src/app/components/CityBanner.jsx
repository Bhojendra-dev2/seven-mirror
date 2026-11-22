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
    <section className="w-full px-4 py-6 sm:px-6 sm:py-8">
      <div className="relative mx-auto h-[480px] w-full max-w-[1400px] overflow-hidden rounded-[20px] sm:h-[640px] sm:rounded-[30px] lg:h-[920px]">
        {/* Hero Image */}
        <Image
          src={image}
          alt="Luxury stay with city view"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1400px) 100vw, 1400px"
        />

        {/* Avatar */}
        {avatar && (
          <div className="absolute right-[22%] top-[7%] z-10">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border-[3px] border-white shadow-lg sm:h-12 sm:w-12">
              <Image src={avatar} alt="Profile" fill className="object-cover" />
            </div>
          </div>
        )}

        {/* Bottom Banner */}
        <div className="absolute bottom-4 left-1/2 z-10 w-[calc(100%-24px)] max-w-[1200px] -translate-x-1/2 sm:bottom-[5.5%] sm:w-[86%]">
          <div className="flex flex-col gap-3 rounded-[20px] bg-white px-4 py-4 shadow-xl sm:flex-row sm:items-center sm:gap-5 sm:rounded-full sm:px-7 sm:py-4">
            {/* Brand */}
            <div className="shrink-0">
              <h2 className="font-serif text-[20px] font-bold tracking-[-1px] sm:text-[24px]">
                {brand}
              </h2>
            </div>

            {/* Divider */}
            <div className="hidden h-10 w-px shrink-0 bg-gray-300 sm:block" />

            {/* Content */}
            <div className="min-w-0 flex-1">
              <h3 className="text-xs font-semibold text-black">{title}</h3>
              <p className="mt-1 line-clamp-2 text-[11px] leading-4 text-gray-600 sm:text-[10px]">
                {description}
              </p>
            </div>

            {/* Button */}
            <button
              onClick={onClick}
              className="w-full shrink-0 cursor-pointer rounded-full bg-[#222] px-6 py-3 text-[11px] font-medium text-white transition-all duration-300 hover:bg-black sm:w-auto sm:py-3.5 sm:text-[10px]"
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
