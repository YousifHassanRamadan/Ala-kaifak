"use client";

import { useTranslation } from "react-i18next";
import { insideMoveItems } from "@/constant/inside-move";
import { InsideMoveGallery } from "./InsideMoveGallery";

export function InsideMoveSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-surface-muted py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue">
            {t("insideMove.eyebrow")}
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            {t("insideMove.title")}
          </h2>

          <p className="mt-4 text-base text-muted-foreground">
            {t("insideMove.description")}
            {t("insideMove.description")}
          </p>
        </div>

        {/* Gallery */}
        <div className="mt-12">
          <InsideMoveGallery items={insideMoveItems} />
        </div>
      </div>
    </section>
  );
}
