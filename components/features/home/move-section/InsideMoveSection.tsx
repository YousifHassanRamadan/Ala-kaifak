import { insideMoveItems } from "@/constant/inside-move";
import { InsideMoveGallery } from "./InsideMoveGallery";

export function InsideMoveSection() {
  return (
    <section className="bg-surface-muted py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue">
            Inside the Move
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            From First Box To Final Assembly
          </h2>

          <p className="mt-4 text-base text-muted-foreground">
            Every stage handled by trained movers using professional equipment.
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
