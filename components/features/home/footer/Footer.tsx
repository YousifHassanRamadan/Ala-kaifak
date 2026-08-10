import { FooterBottom } from "./FooterBottom";
import { FooterBrand } from "./FooterBrand";
import { FooterContact } from "./FooterContact";
import { FooterLinks } from "./FooterLinks";
import { FooterServices } from "./FooterServices";

export function Footer() {
  return (
    <footer
      id="contact"
      className="
        bg-brand-navy
        text-white
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1300px]
          px-5
          py-16
          sm:px-8
          lg:px-10
          lg:py-20
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-12
            md:grid-cols-2
            lg:grid-cols-[1.6fr_0.9fr_0.9fr_1fr]
            lg:gap-12
            xl:gap-16
          "
        >
          <FooterBrand />

          <FooterLinks />

          <FooterServices />

          <FooterContact />
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
}
