import { HowItWorksSteps } from "./HowItWorksSteps";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="
        bg-surface-muted
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
        {/* Section Header */}
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
            How It Works
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
            Your Move In Four Simple Steps
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              text-sm
              leading-6
              text-muted-foreground
              sm:text-base
            "
          >
            A clear, predictable process from first call to final box.
          </p>
        </div>

        {/* Steps */}
        <HowItWorksSteps />
      </div>
    </section>
  );
}
