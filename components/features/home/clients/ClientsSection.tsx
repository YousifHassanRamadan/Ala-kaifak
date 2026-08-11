"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

import { clients } from "@/constant/clients";

export function ClientsSection() {
  const { t } = useTranslation();

  return (
    <section
      id="clients"
      className="border-y border-border bg-surface-muted py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-orange">
            {t("clients.eyebrow")}
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            {t("clients.title")}
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
            {t("clients.description")}
          </p>
        </div>

        {/* Clients */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-6">
          {clients.map((client) => (
            <div
              key={client.id}
              className="
                group
                flex
                min-h-32
                flex-col
                items-center
                justify-center
                gap-3
                rounded-2xl
                border
                border-border
                bg-card
                px-4
                py-5
                text-center
                transition-all
                duration-200
                hover:-translate-y-1
                hover:border-brand-orange/30
                hover:shadow-[0_10px_30px_rgba(16,38,75,0.06)]
              "
            >
              <div className="flex h-14 w-full items-center justify-center">
                <Image
                  src={client.logo}
                  alt={t(client.nameKey)}
                  width={140}
                  height={60}
                  className="
                    max-h-14
                    w-auto
                    max-w-[130px]
                    object-contain
                    opacity-80
                    transition-opacity
                    duration-200
                    group-hover:opacity-100
                  "
                />
              </div>

              <span className="text-xs font-semibold leading-4 text-brand-navy">
                {t(client.nameKey)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
