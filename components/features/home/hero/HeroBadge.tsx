"use client";

import { useTranslation } from "react-i18next";
import { Sparkles } from "lucide-react";

export function HeroBadge() {
  const { t } = useTranslation();
  return (
    <div className="w-fit flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-brand-navy shadow-sm">
      <Sparkles className="h-4 w-4 text-brand-orange" />

      <span>{t("hero.badge")}</span>
    </div>
  );
}
