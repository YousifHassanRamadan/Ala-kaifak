import { WhyChooseContent } from "./WhyChooseContent";
import { WhyChooseImage } from "./WhyChooseImage";

export function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="bg-background py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <WhyChooseImage />

          {/* Content */}
          <WhyChooseContent />
        </div>
      </div>
    </section>
  );
}
