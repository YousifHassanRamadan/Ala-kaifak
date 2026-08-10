import { HeroActions } from "./HeroActions";
import { HeroBadge } from "./HeroBadge";
import { HeroFeatures } from "./HeroFeatures";

export function HeroContent() {
  return (
    <div className="flex flex-col">
      <HeroBadge />

      <h1
        className="
          mt-7
          max-w-3xl
          text-4xl
          font-bold
          leading-[1.05]
          tracking-[-1.5px]
          text-brand-navy
          sm:text-5xl
          lg:text-[64px]
          lg:tracking-[-2.5px]
        "
      >
        Moving Made
        <br />
        Simple.
        <br />
        <span className="text-blue-800/90">We Move. You Relax.</span>
      </h1>

      <p
        className="
          mt-6
          max-w-2xl
          text-base
          leading-7
          text-muted-foreground
          sm:text-lg
          sm:leading-8
        "
      >
        Professional home and office relocation services across Abu Dhabi, Dubai
        and the UAE.
      </p>

      <div className="mt-8">
        <HeroActions />
      </div>

      <div className="mt-10">
        <HeroFeatures />
      </div>
    </div>
  );
}
