import { movingSolutions } from "@/constant/moving-solutions";

import { MovingSolutionCard } from "./MovingSolutionCard";

export function MovingSolutions() {
  return (
    <section
      id="moving-solutions"
      className="
        bg-background
        py-20
        sm:py-24
        lg:py-28
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-6xl
          px-5
          sm:px-6
          lg:px-8
        "
      >
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p
            className="
              text-xs
              font-bold
              uppercase
              tracking-[0.2em]
              text-brand-blue
            "
          >
            Tailored Solutions
          </p>

          <h2
            className="
              mt-3
              text-3xl
              font-bold
              tracking-tight
              text-brand-navy
              sm:text-4xl
              lg:text-[40px]
            "
          >
            Residential & Commercial Moving
          </h2>

          <p
            className="
              mt-4
              text-sm
              leading-6
              text-muted-foreground
              sm:text-base
            "
          >
            Two dedicated teams, one consistent standard of service.
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-5
            md:mt-14
            lg:grid-cols-2
            lg:gap-6
          "
        >
          {movingSolutions.map((solution) => (
            <MovingSolutionCard
              key={solution.title}
              title={solution.title}
              description={solution.description}
              icon={solution.icon}
              items={solution.items}
              buttonText={solution.buttonText}
              variant={solution.variant}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
