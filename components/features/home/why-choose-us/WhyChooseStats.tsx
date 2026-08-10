"use client";

import { useTranslation } from "react-i18next";
import { stats } from "@/constant/why-choose-us";

export function WhyChooseStats() {
  const { t } = useTranslation();
  return (
    <div className="mt-8 grid grid-cols-2 overflow-hidden rounded-2xl border border-border bg-card sm:grid-cols-4">
      {stats.map((stat, index) => (
        <div
          key={stat.key}
          className={`
            px-4 py-5 text-center
            ${index !== 0 ? "border-border sm:border-l" : ""}
            ${index === 2 ? "border-t sm:border-t-0" : ""}
            ${index === 3 ? "border-t sm:border-t-0" : ""}
          `}
        >
          <p className="text-xl font-bold text-brand-navy">{stat.value}</p>

          <p className="mt-1 text-xs leading-4 text-muted-foreground">
            {t(`whyChooseUs.stats.${stat.key}`)}
          </p>
        </div>
      ))}
    </div>
  );
}
