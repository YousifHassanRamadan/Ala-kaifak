"use client";

import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/constant/faq";

export function FAQSection() {
  const { t } = useTranslation();
  return (
    <section
      id="faq"
      className="w-full bg-surface-muted py-20 sm:py-24 lg:py-[90px]"
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[980px]
          grid-cols-1
          gap-10
          px-5
          sm:px-8
          lg:grid-cols-[0.85fr_1.55fr]
          lg:gap-[58px]
        "
      >
        {/* Intro */}
        <div className="lg:pt-1">
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
            {t("faq.eyebrow")}
          </p>

          <h2
            className="
              max-w-[330px]
              text-[30px]
              font-bold
              leading-[1.05]
              tracking-[-0.025em]
              text-foreground
              sm:text-[32px]
              lg:text-[34px]
            "
          >
            {t("faq.title.first")}
            <br className="hidden sm:block" />
            {t("faq.title.second")}
          </h2>

          <p
            className="
              mt-4
              max-w-[350px]
              text-sm
              leading-[1.65]
              text-muted-foreground
              sm:text-[15px]
            "
          >
            {t("faq.description")}
          </p>
        </div>

        {/* FAQ */}
        <Accordion
          type="single"
          collapsible
          defaultValue={faqs[0]?.id}
          className="flex flex-col gap-[10px]"
        >
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="
                overflow-hidden
                rounded-[14px]
                border
                border-border
                bg-card
                px-0
                shadow-[0_4px_16px_rgba(16,38,75,0.04)]
                transition-shadow
                duration-300
                hover:shadow-[0_6px_20px_rgba(16,38,75,0.07)]
              "
            >
              <AccordionTrigger
                className="
                  px-4
                  py-[17px]
                  text-left
                  text-[13px]
                  font-semibold
                  leading-5
                  text-foreground
                  hover:no-underline
                  sm:px-5
                  sm:py-[18px]
                  sm:text-sm
                  [&>svg]:size-4
                  [&>svg]:text-muted-foreground
                "
              >
                {t(faq.question)}
              </AccordionTrigger>

              <AccordionContent
                className="
                  px-4
                  pb-5
                  text-[12px]
                  leading-[1.65]
                  text-muted-foreground
                  sm:px-5
                  sm:text-[13px]
                "
              >
                <p className="max-w-[680px]">{t(faq.answer)}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
