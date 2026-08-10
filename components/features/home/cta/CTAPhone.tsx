import { CTA_CONTENT } from "@/constant/cta";

export function CTAPhone() {
  return (
    <div className="mt-10 flex flex-col items-center">
      <a
        href={CTA_CONTENT.phoneHref}
        className="
          text-2xl
          font-bold
          tracking-tight
          text-white
          transition-opacity
          hover:opacity-80
          sm:text-3xl
        "
      >
        {CTA_CONTENT.phone}
      </a>

      <div
        className="
          mt-2
          flex
          flex-wrap
          items-center
          justify-center
          gap-x-2
          text-[10px]
          font-bold
          uppercase
          tracking-[0.2em]
          text-white/55
          sm:text-[11px]
        "
      >
        <span>{CTA_CONTENT.availability}</span>

        {CTA_CONTENT.locations.map((location) => (
          <span key={location} className="flex items-center gap-2">
            <span aria-hidden="true">•</span>
            {location}
          </span>
        ))}
      </div>
    </div>
  );
}
