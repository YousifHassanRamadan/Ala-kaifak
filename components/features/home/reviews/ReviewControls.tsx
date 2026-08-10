interface ReviewControlsProps {
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
  onPageChange: (page: number) => void;
}

export function ReviewControls({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
  onPageChange,
}: ReviewControlsProps) {
  return (
    <div className="flex items-center gap-2">
      {/* Previous */}
      <button
        type="button"
        onClick={onPrevious}
        disabled={currentPage === 0}
        aria-label="Previous reviews"
        className="
          flex size-8 items-center justify-center
          rounded-lg
          border border-border
          bg-background
          text-foreground
          shadow-sm
          transition-all
          hover:border-secondary
          hover:bg-muted
          disabled:pointer-events-none
          disabled:opacity-40
          sm:size-9
        "
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="size-4"
          aria-hidden="true"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      {/* Next */}
      <button
        type="button"
        onClick={onNext}
        disabled={currentPage === totalPages - 1}
        aria-label="Next reviews"
        className="
          flex size-8 items-center justify-center
          rounded-lg
          bg-secondary
          text-secondary-foreground
          shadow-sm
          transition-all
          hover:bg-brand-navy-light
          disabled:pointer-events-none
          disabled:opacity-40
          sm:size-9
        "
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="size-4"
          aria-hidden="true"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

      {/* Mobile page indicator */}
      <span className="ml-1 text-xs text-muted-foreground md:hidden">
        {currentPage + 1} / {totalPages}
      </span>
    </div>
  );
}
