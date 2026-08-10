import { quoteBenefits } from "@/constant/quote-setion";
import { CheckCircle2 } from "lucide-react";

export function QuoteInfo() {
  return (
    <div className="bg-brand-navy px-7 py-8 text-white sm:px-10 sm:py-10 lg:px-11 lg:py-12">
      <div className="max-w-md">
        <h2 className="text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl">
          Get Your Free Moving Quote
        </h2>

        <p className="mt-5 max-w-sm text-sm leading-6 text-white/70 sm:text-base">
          Tell us a few details and our team will get back to you shortly.
        </p>

        <ul className="mt-8 space-y-4">
          {quoteBenefits.map((benefit) => (
            <li
              key={benefit}
              className="flex items-center gap-3 text-sm text-white/90 sm:text-base"
            >
              <CheckCircle2
                className="h-[18px] w-[18px] shrink-0 text-primary"
                strokeWidth={2}
              />

              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
