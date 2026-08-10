import { CTA_CONTENT } from "@/constant/cta";
import { ScrollToSection } from "../../scroll-to-section/scroll-to-section";

export function CTAActions() {
  return (
    <div
      className="
        mt-10
        flex
        w-full
        flex-col
        items-center
        gap-3
        sm:w-auto
        sm:flex-row
        sm:gap-4
      "
    >
      <ScrollToSection
        targetId="quote"
        className="
          inline-flex
          h-14
          w-full
          items-center
          justify-center
          rounded-2xl
          bg-primary
          px-8
          text-sm
          font-bold
          text-primary-foreground
          shadow-[0_10px_30px_rgba(247,144,0,0.25)]
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:bg-brand-orange-dark
          hover:shadow-[0_14px_35px_rgba(247,144,0,0.32)]
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-primary
          focus-visible:ring-offset-2
          focus-visible:ring-offset-brand-navy
          sm:w-auto
          sm:min-w-[208px]
        "
      >
        Get a Free Quote
      </ScrollToSection>

      <a
        href={CTA_CONTENT.phoneHref}
        className="
          inline-flex
          h-14
          w-full
          items-center
          justify-center
          gap-2.5
          rounded-2xl
          border
          border-white/30
          bg-white/5
          px-8
          text-sm
          font-bold
          text-white
          backdrop-blur-sm
          transition-all
          duration-300
          hover:border-white/50
          hover:bg-white/10
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-white
          focus-visible:ring-offset-2
          focus-visible:ring-offset-brand-navy
          sm:w-auto
          sm:min-w-[196px]
        "
      >
        <PhoneIcon />

        <span>Call Us Now</span>
      </a>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="size-[18px]"
      aria-hidden="true"
    >
      <path
        d="
          M22 16.92v3a2 2 0 0 1-2.18 2
          19.79 19.79 0 0 1-8.63-3.07
          19.5 19.5 0 0 1-6-6
          19.79 19.79 0 0 1-3.07-8.67
          A2 2 0 0 1 4.11 2h3
          a2 2 0 0 1 2 1.72
          12.84 12.84 0 0 0 .7 2.81
          2 2 0 0 1-.45 2.11L8.09 9.91
          a16 16 0 0 0 6 6l1.27-1.27
          a2 2 0 0 1 2.11-.45
          12.84 12.84 0 0 0 2.81.7
          A2 2 0 0 1 22 16.92z
        "
      />
    </svg>
  );
}
