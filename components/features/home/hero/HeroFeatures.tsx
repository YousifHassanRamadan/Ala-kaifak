"use client";

import { useTranslation } from "react-i18next";
import { heroFeatures } from "@/constant/hero-section";

export function HeroFeatures() {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
      {heroFeatures.map((feature) => {
        const Icon = feature.icon;

        return (
          <div key={feature.translationKey} className="flex items-center gap-3">
            <div
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-border
                bg-card
                text-brand-blue
                shadow-sm
              "
            >
              <Icon className="h-[17px] w-[17px]" />
            </div>

            <span className="text-sm font-medium text-brand-navy sm:text-[15px]">
              {t(feature.translationKey)}
            </span>
          </div>
        );
      })}
    </div>
  );
}
