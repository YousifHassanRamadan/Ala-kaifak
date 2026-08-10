import { Review } from "@/constant/reviews";

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article
      className="
        flex h-full min-h-[235px] flex-col
        rounded-2xl
        border border-border
        bg-surface-muted
        p-6
        shadow-[0_8px_25px_rgba(16,38,75,0.06)]
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-[0_12px_30px_rgba(16,38,75,0.1)]
        sm:p-7
      "
    >
      {/* Quote icon */}
      <div
        aria-hidden="true"
        className="
          mb-2
          text-3xl
          font-bold
          leading-none
          text-primary
        "
      >
        &rdquo;
      </div>

      {/* Rating */}
      <div
        aria-label={`${review.rating} out of 5 stars`}
        className="mb-3 flex gap-0.5"
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            className="text-lg leading-none text-primary"
            aria-hidden="true"
          >
            ★
          </span>
        ))}
      </div>

      {/* Review */}
      <p className="text-sm leading-5 text-foreground">
        &quot;{review.content}&quot;
      </p>

      {/* Divider */}
      <div className="my-5 h-px w-full bg-border" />

      {/* User */}
      <div className="mt-auto flex items-center gap-3">
        <div
          className="
            flex size-9 shrink-0
            items-center justify-center
            rounded-full
            bg-secondary
            text-xs
            font-bold
            text-secondary-foreground
          "
        >
          {review.initials}
        </div>

        <div className="min-w-0">
          <p className="truncate text-xs font-bold text-foreground sm:text-sm">
            {review.name}
          </p>

          <p className="mt-0.5 text-[11px] text-muted-foreground sm:text-xs">
            {review.location}
          </p>
        </div>
      </div>
    </article>
  );
}
