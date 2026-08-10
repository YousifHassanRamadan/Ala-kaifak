"use client";
import { quoteBenefits } from "@/constant/quote-setion";
import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

export function QuoteInfo() {
  const { t } = useTranslation();
  return (
    <div className="bg-brand-navy px-7 py-8 text-white sm:px-10 sm:py-10 lg:px-11 lg:py-12">
      <div className="max-w-md">
        <h2 className="text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl">
          {t("quote.info.title")}
        </h2>

        <p className="mt-5 max-w-sm text-sm leading-6 text-white/70 sm:text-base">
          {t("quote.info.description")}
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

              <span>{t(benefit)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
