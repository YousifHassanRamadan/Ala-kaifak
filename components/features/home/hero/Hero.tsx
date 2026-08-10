import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";

export function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        bg-surface-muted
      "
    >
      <div
        className="
          mx-auto
          grid
          max-w-[1200px]
          items-center
          gap-12
          px-5
          py-16
          sm:px-6
          sm:py-20
          lg:grid-cols-[1.05fr_0.95fr]
          lg:gap-16
          lg:px-6
          lg:py-[68px]
        "
      >
        {/* Content */}
        <HeroContent />

        {/* Visual */}
        <HeroImage />
      </div>
    </section>
  );
}
