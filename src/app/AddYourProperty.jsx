import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function AddYourProperty({ image = "/images/proparties.png" }) {
  return (
    <section className="@container relative w-full lg:aspect-[968/466]">
      {/* Background image */}
      <div className="relative aspect-[4/3] w-full sm:aspect-[16/9] lg:absolute lg:inset-0 lg:aspect-auto">
        <Image
          src={image}
          alt="Add your property"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Dark card */}
      <div className="relative z-10 -mt-12 mb-10 rounded-3xl bg-[#1f1f1f] p-6 text-white sm:mx-6 sm:p-8 mx-4 lg:absolute lg:left-[5.06cqw] lg:top-[5.8cqw] lg:m-0 lg:h-[36.6cqw] lg:w-[34.5cqw] lg:rounded-[2.5cqw] lg:p-0 lg:pl-[2.1cqw] lg:pr-[2.6cqw] lg:pt-[2.2cqw]">
        <p className="text-xs uppercase tracking-wide lg:text-[1cqw]">
          Add Your Property
        </p>

        <h2 className="mt-5 font-serif text-3xl font-bold leading-[1.4] sm:text-4xl lg:mt-[2.3cqw] lg:text-[2.7cqw] lg:leading-[4.2cqw]">
          Give Your Second Home
          <br />
          Its Best Life
        </h2>

        <p className="mt-5 text-[13px] leading-relaxed text-white/95 lg:mt-[2.3cqw] lg:text-[0.85cqw] lg:leading-[1.3cqw]">
          With Haveli &amp; Hearth, your property becomes more than an empty
          house between visits it&apos;s a well-kept, thoughtfully hosted stay,
          managed end to end by a team that treats it like their own.
        </p>

        <p className="mt-4 text-[13px] leading-relaxed lg:mt-[1.5cqw] lg:text-[0.85cqw] lg:leading-[1.3cqw]">
          <span className="font-semibold">Steady income, zero hassle</span>
          <br />
          Every detail - from housekeeping to guest handling - fully managed by
          our resident team.
        </p>

        <p className="mt-4 text-[13px] font-semibold lg:mt-[1.5cqw] lg:text-[0.85cqw]">
          Currently managing homes in Jaipur &amp; Gurugram
        </p>

        <Link
          href="/add-property"
          className="mt-6 flex h-12 w-full items-center justify-center gap-1.5 rounded-full bg-white px-8 text-xs font-semibold text-neutral-950 transition hover:bg-neutral-100 sm:h-14 sm:w-auto sm:self-start lg:mt-[3.3cqw] lg:h-[4.65cqw] lg:w-[14.8cqw] lg:gap-[0.3cqw] lg:px-0 lg:text-[0.9cqw]"
        >
          Enquire For Partner{" "}
          <FiArrowRight className="h-4 w-4 lg:h-[0.9cqw] lg:w-[0.9cqw]" />
        </Link>
      </div>
    </section>
  );
}
