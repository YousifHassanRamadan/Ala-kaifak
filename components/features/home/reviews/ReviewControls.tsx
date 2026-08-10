"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ReviewControlsProps {
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
  onPageChange: (page: number) => void;
}

export function ReviewControls({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
  onPageChange,
}: ReviewControlsProps) {
  const { t, i18n } = useTranslation();

  const isRTL = i18n.dir() === "rtl";
  return (
    <div className="flex items-center gap-2">
      {/* Previous */}
      <button
        type="button"
        onClick={onPrevious}
        disabled={currentPage === 0}
        aria-label={t("reviews.controls.previous")}
        className="
          flex size-8 items-center justify-center
          rounded-lg
          border border-border
          bg-background
          text-foreground
          shadow-sm
          transition-all
          hover:border-secondary
          hover:bg-muted
          disabled:pointer-events-none
          disabled:opacity-40
          sm:size-9
        "
      >
        {isRTL ? (
          <ChevronRight className="size-4" />
        ) : (
          <ChevronLeft className="size-4" />
        )}
      </button>

      {/* Next */}
      <button
        type="button"
        onClick={onNext}
        disabled={currentPage === totalPages - 1}
        aria-label={t("reviews.controls.next")}
        className="
          flex size-8 items-center justify-center
          rounded-lg
          bg-secondary
          text-secondary-foreground
          shadow-sm
          transition-all
          hover:bg-brand-navy-light
          disabled:pointer-events-none
          disabled:opacity-40
          sm:size-9
        "
      >
        {isRTL ? (
          <ChevronLeft className="size-4" />
        ) : (
          <ChevronRight className="size-4" />
        )}
      </button>

      {/* Mobile page indicator */}
      <span className="ml-1 text-xs text-muted-foreground md:hidden">
        {currentPage + 1} / {totalPages}
      </span>
    </div>
  );
}
