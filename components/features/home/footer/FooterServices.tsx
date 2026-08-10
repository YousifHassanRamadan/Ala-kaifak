import { FOOTER_CONTENT } from "@/constant/footer";
import { ScrollToSection } from "../../scroll-to-section/scroll-to-section";

export function FooterServices() {
  return (
    <div>
      <h3
        className="
          text-sm
          font-bold
          tracking-[0.16em]
          text-white
        "
      >
        SERVICES
      </h3>

      <nav className="mt-7 flex flex-col items-start gap-4">
        {FOOTER_CONTENT.services.map((service) => (
          <ScrollToSection
            key={service.label}
            targetId={service.targetId}
            className="
              text-left
              text-sm
              text-white/60
              transition-colors
              duration-200
              hover:text-primary
              focus-visible:outline-none
              focus-visible:text-primary
            "
          >
            {service.label}
          </ScrollToSection>
        ))}
      </nav>
    </div>
  );
}
