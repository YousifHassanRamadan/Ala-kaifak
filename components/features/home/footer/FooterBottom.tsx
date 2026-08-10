"use client";
import { useTranslation } from "react-i18next";
import { FOOTER_CONTENT } from "@/constant/footer";
import Link from "next/link";

export function FooterBottom() {
  const { t } = useTranslation();
  const { legal } = FOOTER_CONTENT;

  return (
    <div
      className="
        mt-14
        border-t
        border-white/10
        pt-6
      "
    >
      <div
        className="
          flex
          flex-col
          gap-4
          text-xs
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        <p className="text-white/55">{t(legal.copyright)}</p>

        <div
          className="
            flex
            flex-wrap
            items-center
            gap-x-5
            gap-y-2
          "
        >
          <Link
            href="/privacy-policy"
            className="
              text-white/55
              transition-colors
              hover:text-primary
            "
          >
            {t(legal.privacy)}
          </Link>

          <Link
            href="/terms"
            className="
              text-white/55
              transition-colors
              hover:text-primary
            "
          >
            {t(legal.terms)}
          </Link>
        </div>
      </div>
    </div>
  );
}
