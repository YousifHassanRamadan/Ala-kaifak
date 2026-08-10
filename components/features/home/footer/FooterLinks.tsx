import { FOOTER_CONTENT } from "@/constant/footer";
import { ScrollToSection } from "../../scroll-to-section/scroll-to-section";

export function FooterLinks() {
  return (
    <FooterLinkColumn title="QUICK LINKS" links={FOOTER_CONTENT.quickLinks} />
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
        {title}
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
            {link.label}
          </ScrollToSection>
        ))}
      </nav>
    </div>
  );
}
