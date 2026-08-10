import { QuoteForm } from "./QuoteForm";
import { QuoteInfo } from "./QuoteInfo";

export function QuoteSection() {
  return (
    <section
      id="quote"
      className="bg-background px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div
          className="
            overflow-hidden
            rounded-[28px]
            border
            border-border
            bg-muted/40
            shadow-[0_20px_60px_rgba(16,38,75,0.10)]
          "
        >
          <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
            {/* Left */}
            <QuoteInfo />

            {/* Right */}
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
