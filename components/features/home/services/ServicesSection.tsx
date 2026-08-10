"use client";

import { useTranslation } from "react-i18next";
import { services } from "@/constant/servies-section";
import { ServiceCard } from "./ServiceCard";
import { ServicesHeader } from "./ServicesHeader";

export function ServicesSection() {
  const { t } = useTranslation();
  return (
    <section
      id="services"
      className="bg-surface-muted px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <ServicesHeader />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.key}
              title={t(`services.items.${service.key}.title`)}
              description={t(`services.items.${service.key}.description`)}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
