import { howItWorksSteps } from "@/constant/how-it-works";

import { HowItWorksStep } from "./HowItWorksStep";

export function HowItWorksSteps() {
  return (
    <div className="relative mt-12">
      {/* Horizontal line - medium screens and above */}
      <div
        className="
          absolute
          left-0
          right-0
          top-[21px]
          hidden
          h-px
          bg-border
          md:block
        "
      />

      {/* Vertical line - small screens */}
      <div
        className="
          absolute
          bottom-8
          left-[21px]
          top-[21px]
          w-px
          bg-border
          md:hidden
        "
      />

      <div
        className="
          relative
          grid
          grid-cols-1
          gap-0
          md:grid-cols-4
          md:gap-x-6
          lg:gap-x-8
        "
      >
        {howItWorksSteps.map((step) => (
          <HowItWorksStep
            key={step.number}
            number={step.number}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </div>
  );
}
