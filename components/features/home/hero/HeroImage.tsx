"use client";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import heroImage from "@/assets/hero-movers.png";

export function HeroImage() {
  const { t } = useTranslation();
  return (
    <div className="relative">
      {/* Main Image */}
      <div
        className="
          relative
          aspect-[4/4.4]
          overflow-hidden
          rounded-[28px]
          border
          border-border
          bg-surface-muted
          shadow-sm
          sm:aspect-[4/4.2]
          lg:aspect-[4/4.6]
        "
      >
        <Image
          src={heroImage}
          alt="Professional movers relocating furniture"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
          className="object-cover"
        />
      </div>

      {/* Floating Card */}
      <div
        className="
          absolute
          -bottom-7
          left-4
          w-[calc(100%-2rem)]
          max-w-[275px]
          rounded-2xl
          border
          border-border
          bg-card
          p-5
          shadow-[0_15px_40px_rgba(16,38,75,0.12)]
          sm:left-6
          lg:-left-7
          lg:bottom-[-35px]
        "
      >
        <h3 className="text-base font-bold text-brand-navy">
          {t("hero.imageCard.title")}
        </h3>

        <p className="mt-1 text-sm text-muted-foreground">
          {t("hero.imageCard.description")}
        </p>

        <div className="my-3 h-px bg-border" />

        <p className="text-xs font-medium">
          <span className="text-brand-blue">
            {t("hero.imageCard.fastResponse")}
          </span>

          <span className="text-muted-foreground"> • </span>

          <span className="text-brand-navy">
            {t("hero.imageCard.professionalService")}
          </span>
        </p>
      </div>
    </div>
  );
}
