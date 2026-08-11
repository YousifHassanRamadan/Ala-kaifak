import { ClientsSection } from "@/components/features/home/clients/ClientsSection";
import { CTASection } from "@/components/features/home/cta/CTASection";
import { FAQSection } from "@/components/features/home/faq/FAQSection";
import { Hero } from "@/components/features/home/hero/Hero";
import { HowItWorks } from "@/components/features/home/how-it-works/HowItWorks";
import { InsideMoveSection } from "@/components/features/home/move-section/InsideMoveSection";
import { MovingSolutions } from "@/components/features/home/moving-solutions/MovingSolutions";
import { QuoteSection } from "@/components/features/home/quote/QuoteSection";
import { ReviewsSection } from "@/components/features/home/reviews/ReviewsSection";
import { ServicesSection } from "@/components/features/home/services/ServicesSection";
import { WhyChooseUs } from "@/components/features/home/why-choose-us/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <Hero />

      {/* Quote */}
      <QuoteSection />

      {/* Services */}
      <ServicesSection />

      {/* Clients */}
      <ClientsSection />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* How It Works */}
      <HowItWorks />

      {/* Moving Solutions */}
      <MovingSolutions />

      {/* Inside The Move */}
      <InsideMoveSection />

      {/* Reviews */}
      <ReviewsSection />

      {/* FAQ */}
      <FAQSection />

      {/* CTA */}
      <CTASection />
    </div>
  );
}
