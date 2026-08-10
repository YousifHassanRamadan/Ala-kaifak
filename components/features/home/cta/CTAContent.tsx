"use client";

import { useTranslation } from "react-i18next";
import { CTA_CONTENT } from "@/constant/cta";

export function CTAContent() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center">
      <h2
        className="
          max-w-[900px]
          text-4xl
          font-bold
          leading-[1.05]
          tracking-[-0.035em]
          text-white
          sm:text-5xl
          lg:text-[54px]
          xl:text-[58px]
        "
      >
        {t(CTA_CONTENT.title)}
      </h2>

      <p
        className="
          mt-5
          text-base
          font-medium
          leading-7
          text-white/80
          sm:text-lg
        "
      >
        {t(CTA_CONTENT.description)}
      </p>
    </div>
  );
}
