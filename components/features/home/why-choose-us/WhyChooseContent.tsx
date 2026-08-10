"use client";

import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";

import { WhyChooseStats } from "./WhyChooseStats";
import { benefits } from "@/constant/why-choose-us";

export function WhyChooseContent() {
  const scrollToQuote = () => {
    document.getElementById("quote")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div>
      {/* Eyebrow */}
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">
        About EmiratesMove
      </p>

      {/* Heading */}
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
        Why Choose Us?
      </h2>

      {/* Description */}
      <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
        From single-room apartments to full villa and corporate relocations, our
        trained crews handle every move across Abu Dhabi, Dubai and the wider
        UAE with care and precision.
      </p>

      {/* Benefits */}
      <div className="mt-7 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
        {benefits.map((benefit) => {
          return (
            <div key={benefit.label} className="flex items-center gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-blue/10">
                <Check className="h-3.5 w-3.5 text-brand-blue" />
              </span>

              <span className="text-sm font-medium text-brand-navy">
                {benefit.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Stats */}
      <WhyChooseStats />

      {/* CTA */}
      <div className="mt-7">
        <Button
          type="button"
          onClick={scrollToQuote}
          className="
            h-11
            rounded-xl
            bg-brand-navy
            px-6
            text-sm
            font-semibold
            text-white
            shadow-sm
            hover:bg-brand-navy/90
          "
        >
          Get a Free Quote
        </Button>
      </div>
    </div>
  );
}
