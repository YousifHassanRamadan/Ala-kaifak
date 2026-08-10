"use client";
import { HeroActions } from "./HeroActions";
import { HeroBadge } from "./HeroBadge";
import { HeroFeatures } from "./HeroFeatures";
import { useTranslation } from "react-i18next";

export function HeroContent() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col">
      <HeroBadge />

      <h1
        className="
          mt-7
          max-w-3xl
          text-4xl
          font-bold
          leading-[1.05]
          tracking-[-1.5px]
          text-brand-navy
          sm:text-5xl
          lg:text-[64px]
          lg:tracking-[-2.5px]
        "
      >
        {t("hero.titleLine1")}
        <br />
        {t("hero.titleLine2")}
        <br />
        <span className="text-blue-800/90">{t("hero.titleHighlight")}</span>
      </h1>

      <p
        className="
          mt-6
          max-w-2xl
          text-base
          leading-7
          text-muted-foreground
          sm:text-lg
          sm:leading-8
        "
      >
        {t("hero.description")}
      </p>

      <div className="mt-8">
        <HeroActions />
      </div>

      <div className="mt-10">
        <HeroFeatures />
      </div>
    </div>
  );
}
