import { services } from "@/constant/servies-section";
import { ServiceCard } from "./ServiceCard";
import { ServicesHeader } from "./ServicesHeader";

export function ServicesSection() {
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
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
