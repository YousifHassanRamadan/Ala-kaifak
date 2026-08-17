"use client";

import { useTranslation } from "react-i18next";
import { CTA_CONTENT } from "@/constant/cta";

export function CTAPhone() {
  const { t } = useTranslation();

  return (
    <div className="mt-10 flex flex-col items-center">
      <div className="flex flex-col items-center gap-1">
        {CTA_CONTENT.phones.map((phone) => (
          <a
            key={phone.href}
            href={phone.href}
            dir="ltr"
            className="
              text-2xl
              font-bold
              tracking-tight
              text-white
              transition-opacity
              hover:opacity-80
              sm:text-3xl
            "
          >
            {phone.number}
          </a>
        ))}
      </div>

      <div
        className="
          mt-4
          flex
          flex-wrap
          items-center
          justify-center
          gap-x-2
          text-[10px]
          font-bold
          uppercase
          tracking-[0.2em]
          text-white/55
          sm:text-[11px]
        "
      >
        <span>{t(CTA_CONTENT.availability)}</span>

        {CTA_CONTENT.locations.map((location) => (
          <span key={location} className="flex items-center gap-2">
            <span aria-hidden="true">•</span>
            {t(location)}
          </span>
        ))}
      </div>
    </div>
  );
}
