import { CTA_CONTENT } from "@/constant/cta";
import { CTAActions } from "./CTAActions";
import { CTABackground } from "./CTABackground";
import { CTAContent } from "./CTAContent";
import { CTAPhone } from "./CTAPhone";

export function CTASection() {
  return (
    <section
      id="contact"
      className="
        relative
        isolate
        overflow-hidden
        bg-brand-navy
      "
    >
      <CTABackground />

      <div
        className="
          mx-auto
          flex
          min-h-[520px]
          w-full
          max-w-[1100px]
          flex-col
          items-center
          justify-center
          px-5
          py-20
          text-center
          sm:px-8
          lg:py-24
        "
      >
        <CTAContent />
        <CTAActions />
        <CTAPhone />
      </div>
    </section>
  );
}
