"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";

import whyChooseUsImage from "@/assets/why-choose-us.png";

export function WhyChooseImage() {
  const { t } = useTranslation();
  return (
    <div className="w-full">
      {/* Image + Desktop Floating Cards */}
      <div className="relative">
        {/* Main Image */}
        <div
          className="
            relative
            aspect-[4/4.1]
            w-full
            overflow-hidden
            rounded-[24px]
          "
        >
          <Image
            src={whyChooseUsImage}
            alt="Professional movers loading furniture into a truck"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Desktop Floating Cards */}
        <div
          className="
    absolute
    right-[-20px]
    top-3/4
    hidden
    -translate-y-1/2
    flex
    flex-col
    gap-3
    lg:flex
  "
        >
          {/* 5000+ */}
          <div
            className="
      min-w-[220px]
      rounded-2xl
      border
      border-border
      bg-card
      px-5
      py-4
      shadow-[0_15px_40px_rgba(16,38,75,0.12)]
    "
          >
            <p className="text-2xl font-bold text-brand-navy">5000+</p>

            {t("whyChooseUs.successfulMoves")}
          </div>

          {/* 10+ */}
          <div
            className="
      min-w-[220px]
      rounded-2xl
      bg-primary
      px-5
      py-5
      shadow-[0_15px_35px_rgba(247,144,0,0.25)]
    "
          >
            <p className="text-2xl font-bold text-primary-foreground">10+</p>

            <p className="text-sm font-medium text-primary-foreground/90">
              {t("whyChooseUs.yearsInUae")}
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="mt-6 grid grid-cols-2 gap-4 lg:hidden">
        {/* 5000+ */}
        <div
          className="
            min-w-0
            rounded-2xl
            border
            border-border
            bg-card
            px-5
            py-5
            shadow-[0_15px_40px_rgba(16,38,75,0.08)]
          "
        >
          <p className="text-2xl font-bold text-brand-navy sm:text-3xl">
            5000+
          </p>

          <p className="mt-1 text-sm text-muted-foreground">Successful moves</p>
        </div>

        {/* 10+ */}
        <div
          className="
            min-w-0
            rounded-2xl
            bg-primary
            px-5
            py-5
            shadow-[0_15px_35px_rgba(247,144,0,0.25)]
          "
        >
          <p className="text-2xl font-bold text-primary-foreground sm:text-3xl">
            10+
          </p>

          <p className="mt-1 text-sm font-medium text-primary-foreground/90">
            Years in the UAE
          </p>
        </div>
      </div>
    </div>
  );
}
