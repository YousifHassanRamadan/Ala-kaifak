"use client";

import { useTranslation } from "react-i18next";
export function ServicesHeader() {
  const { t } = useTranslation();
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span>{t("services.badge")}</span>

      <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
        {t("services.title")}
      </h2>

      <p className="mt-4 text-sm text-muted-foreground sm:text-base">
        {t("services.description")}
      </p>
    </div>
  );
}
