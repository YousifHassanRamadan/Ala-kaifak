interface HowItWorksStepProps {
  number: string;
  title: string;
  description: string;
}

export function HowItWorksStep({
  number,
  title,
  description,
}: HowItWorksStepProps) {
  return (
    <div className="relative flex gap-5 md:block">
      {/* Number */}
      <div
        className="
          relative
          z-10
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-border
          bg-card
          text-sm
          font-bold
          text-brand-navy
          shadow-[0_8px_20px_rgba(16,38,75,0.06)]
          md:mb-6
        "
      >
        {number}
      </div>

      {/* Content */}
      <div className="pb-8 md:pb-0">
        <h3 className="text-base font-bold text-brand-navy sm:text-lg">
          {title}
        </h3>

        <p
          className="
            mt-2
            max-w-xs
            text-sm
            leading-6
            text-muted-foreground
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}
