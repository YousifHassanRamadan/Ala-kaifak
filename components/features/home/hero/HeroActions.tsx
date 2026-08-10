import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ScrollToSection } from "../../scroll-to-section/scroll-to-section";

const phoneNumber = "+971 508 199 942";

export function HeroActions() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      {/* Get a Free Quote */}
      <Button
        asChild
        size="lg"
        className="
          h-14
          rounded-xl
          bg-primary
          px-8
          text-base
          font-semibold
          text-primary-foreground
          shadow-[0_10px_25px_rgba(247,144,0,0.25)]
          hover:bg-primary/90
        "
      >
        <ScrollToSection targetId="quote">Get a Free Quote</ScrollToSection>
      </Button>

      {/* Call Us */}
      <Button
        asChild
        size="lg"
        variant="outline"
        className="
          h-14
          rounded-xl
          border-border-light
          bg-card
          px-8
          text-base
          font-semibold
          text-brand-navy
          shadow-sm
          hover:bg-surface-muted
        "
      >
        <a href={`tel:${phoneNumber.replace(/\s/g, "")}`}>
          <Phone className="mr-2 h-[18px] w-[18px]" />
          Call Us Now
        </a>
      </Button>
    </div>
  );
}
