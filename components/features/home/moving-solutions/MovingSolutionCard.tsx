import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ScrollToSection } from "../../scroll-to-section/scroll-to-section";

interface MovingSolutionCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  items: readonly string[];
  buttonText: string;
  variant: "light" | "dark";
}

export function MovingSolutionCard({
  title,
  description,
  icon: Icon,
  items,
  buttonText,
  variant,
}: MovingSolutionCardProps) {
  const isDark = variant === "dark";

  return (
    <article
      className={`
        flex
        min-h-[340px]
        flex-col
        rounded-2xl
        border
        p-8
        transition-all
        duration-200
        hover:-translate-y-1
        hover:shadow-[0_18px_40px_rgba(16,38,75,0.10)]
        sm:p-8
        lg:p-8
        ${
          isDark
            ? "border-brand-navy bg-brand-navy"
            : "border-border bg-surface-muted"
        }
      `}
    >
      {/* Icon */}
      <div
        className={`
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          ${isDark ? "bg-primary text-brand-navy" : "bg-brand-navy text-white"}
        `}
      >
        <Icon className="h-5 w-5" strokeWidth={2} />
      </div>

      {/* Content */}
      <div className="mt-5">
        <h3
          className={`
            text-xl
            font-bold
            tracking-tight
            ${isDark ? "text-white" : "text-brand-navy"}
          `}
        >
          {title}
        </h3>

        <p
          className={`
            mt-2
            max-w-xl
            text-sm
            leading-6
            ${isDark ? "text-white/70" : "text-muted-foreground"}
          `}
        >
          {description}
        </p>
      </div>

      {/* Features */}
      <div className="mt-5 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-2">
            <span
              className={`
                flex
                h-4
                w-4
                shrink-0
                items-center
                justify-center
                rounded-full
                ${
                  isDark
                    ? "bg-primary/20 text-primary"
                    : "bg-brand-blue/10 text-brand-blue"
                }
              `}
            >
              <Check className="h-2.5 w-2.5" strokeWidth={3} />
            </span>

            <span
              className={`
                text-xs
                font-medium
                sm:text-sm
                ${isDark ? "text-white/90" : "text-brand-navy"}
              `}
            >
              {item}
            </span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-auto pt-7">
        <ScrollToSection
          targetId="quote"
          className={`
    inline-flex
    items-center
    justify-center
    h-10
    rounded-lg
    px-5
    text-xs
    font-semibold
    transition-colors
    ${
      isDark
        ? "bg-primary text-brand-navy hover:bg-primary/90"
        : "bg-brand-navy text-white hover:bg-brand-navy/90"
    }
  `}
        >
          {buttonText}

          <ArrowRight className="ml-2 h-4 w-4" />
        </ScrollToSection>
      </div>
    </article>
  );
}
