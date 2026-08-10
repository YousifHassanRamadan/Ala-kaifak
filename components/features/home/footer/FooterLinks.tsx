"use client";
import { useTranslation } from "react-i18next";

import { FOOTER_CONTENT } from "@/constant/footer";
import { ScrollToSection } from "../../scroll-to-section/scroll-to-section";

export function FooterLinks() {
  const { t } = useTranslation();
  return (
    <FooterLinkColumn
      title={t("footer.quickLinks.title")}
      links={FOOTER_CONTENT.quickLinks}
    />
  );
}

interface FooterLinkColumnProps {
  title: string;
  links: readonly {
    label: string;
    targetId: string;
  }[];
}

function FooterLinkColumn({ title, links }: FooterLinkColumnProps) {
  const { t } = useTranslation();
  return (
    <div>
      <h3
        className="
          text-sm
          font-bold
          tracking-[0.16em]
          text-white
        "
      >
        {t(title)}
      </h3>

      <nav className="mt-7 flex flex-col items-start gap-4">
        {links.map((link) => (
          <ScrollToSection
            key={link.label}
            targetId={link.targetId}
            className="
              text-left
              text-sm
              text-white/60
              transition-colors
              duration-200
              hover:text-primary
              focus-visible:outline-none
              focus-visible:text-primary
            "
          >
            {t(link.label)}
          </ScrollToSection>
        ))}
      </nav>
    </div>
  );
}
