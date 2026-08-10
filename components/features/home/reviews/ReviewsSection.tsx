"use client";

import { useMemo, useState } from "react";

import { ReviewCard } from "./ReviewCard";
import { ReviewControls } from "./ReviewControls";
import { reviews } from "@/constant/reviews";

const DESKTOP_ITEMS_PER_PAGE = 3;
const MOBILE_ITEMS_PER_PAGE = 1;

export function ReviewsSection() {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(reviews.length / DESKTOP_ITEMS_PER_PAGE);

  const currentReviews = useMemo(() => {
    const start = page * DESKTOP_ITEMS_PER_PAGE;

    return reviews.slice(start, start + DESKTOP_ITEMS_PER_PAGE);
  }, [page]);

  const goToPrevious = () => {
    setPage((current) => Math.max(current - 1, 0));
  };

  const goToNext = () => {
    setPage((current) => Math.min(current + 1, totalPages - 1));
  };

  const goToPage = (nextPage: number) => {
    setPage(nextPage);
  };

  return (
    <section
      id="reviews"
      className="
        w-full
        bg-background
        py-20
        sm:py-24
        lg:py-28
      "
    >
      <div className="mx-auto w-full max-w-[980px] px-5 sm:px-8">
        {/* Header */}
        <div
          className="
            mb-9
            flex
            flex-col
            gap-6
            md:mb-10
            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          <div className="max-w-[650px]">
            <p
              className="
                mb-3
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-brand-orange
              "
            >
              Reviews
            </p>

            <h2
              className="
                text-3xl
                font-bold
                tracking-tight
                text-foreground
                sm:text-[32px]
                lg:text-[34px]
              "
            >
              What Our Customers Say
            </h2>

            <p
              className="
                mt-3
                text-sm
                leading-6
                text-muted-foreground
                sm:text-[15px]
              "
            >
              Families, expats and businesses across the UAE trust us with their
              move.
            </p>
          </div>

          {/* Desktop controls */}
          <div className="hidden md:block">
            <ReviewControls
              currentPage={page}
              totalPages={totalPages}
              onPrevious={goToPrevious}
              onNext={goToNext}
              onPageChange={goToPage}
            />
          </div>
        </div>

        {/* Desktop / Tablet cards */}
        <div
          className="
            hidden
            gap-4
            md:grid
            md:grid-cols-3
            lg:gap-5
          "
        >
          {currentReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* Mobile card */}
        <div className="md:hidden">
          <ReviewCard review={reviews[page]} />
        </div>

        {/* Mobile controls */}
        <div className="mt-6 flex items-center justify-between md:hidden">
          <ReviewControls
            currentPage={page}
            totalPages={reviews.length}
            onPrevious={() => setPage((current) => Math.max(current - 1, 0))}
            onNext={() =>
              setPage((current) => Math.min(current + 1, reviews.length - 1))
            }
            onPageChange={goToPage}
          />
        </div>

        {/* Pagination dots */}
        <div className="mt-7 flex justify-center gap-1.5">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToPage(index)}
              aria-label={`Go to review page ${index + 1}`}
              aria-current={page === index ? "page" : undefined}
              className={`
                h-1.5 rounded-full
                transition-all duration-300
                ${page === index ? "w-6 bg-primary" : "w-1.5 bg-border"}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
