import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ScrollToSection } from "../../scroll-to-section/scroll-to-section";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  featured?: boolean;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  featured = false,
}: ServiceCardProps) {
  return (
    <article
      className={`
        group
        flex
        min-h-[225px]
        flex-col
        rounded-2xl
        border
        bg-card
        p-6
        transition-all
        duration-200
        hover:-translate-y-1
        hover:shadow-[0_15px_35px_rgba(16,38,75,0.08)]
        ${
          featured
            ? "border-brand-blue/30 shadow-[0_10px_30px_rgba(36,113,190,0.08)]"
            : "border-border"
        }
      `}
    >
      {/* Icon */}
      <div
        className={`
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          transition-colors
          ${
            featured
              ? "bg-brand-navy text-white"
              : "bg-brand-blue/10 text-brand-blue"
          }
          group-hover:bg-brand-navy
          group-hover:text-white
        `}
      >
        <Icon className="h-5 w-5" />
      </div>

      {/* Content */}
      <div className="mt-6">
        <h3 className="text-base font-bold text-brand-navy">{title}</h3>

        <p className="mt-3 max-w-sm text-sm leading-5 text-muted-foreground">
          {description}
        </p>
      </div>

      {/* Learn More */}
      <Button
        asChild
        variant="ghost"
        className="
          mt-auto
          h-auto
          w-fit
          p-0
          pt-5
          text-sm
          font-semibold
          text-brand-navy
          hover:bg-transparent
          hover:text-primary
        "
      >
        <ScrollToSection targetId="quote">
          <span>Learn More</span>

          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </ScrollToSection>
      </Button>
    </article>
  );
}
