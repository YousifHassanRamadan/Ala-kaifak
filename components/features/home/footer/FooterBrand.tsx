import Image from "next/image";

import footerLogo from "@/assets/alakeifak-logo.png";

import { FOOTER_CONTENT } from "@/constant/footer";
import { ScrollToSection } from "../../scroll-to-section/scroll-to-section";

export function FooterBrand() {
  const { brand } = FOOTER_CONTENT;

  return (
    <div>
      {/* Logo */}
      <ScrollToSection
        targetId="home"
        className="flex w-fit items-center gap-3"
      >
        <Image
          src={footerLogo}
          alt="Ala Kaifak Furniture Movers"
          className="h-auto w-[55px] rounded-xl object-contain"
          priority
        />

        <div>
          <h2 className="text-lg font-bold leading-none text-white flex justify-start">
            {brand.name}
          </h2>

          <p
            className="
              mt-1
              text-[10px]
              font-semibold
              tracking-[0.18em]
              text-white/55
            "
          >
            {brand.tagline}
          </p>
        </div>
      </ScrollToSection>

      {/* Description */}
      <p
        className="
          mt-6
          max-w-[390px]
          text-sm
          leading-6
          text-white/65
        "
      >
        {brand.description}
      </p>
    </div>
  );
}
