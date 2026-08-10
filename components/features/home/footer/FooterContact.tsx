"use client";
import { useTranslation } from "react-i18next";
import { FOOTER_CONTENT } from "@/constant/footer";
import { Mail, MapPin, Phone } from "lucide-react";

export function FooterContact() {
  const { t } = useTranslation();
  const { contact } = FOOTER_CONTENT;

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
        {t("footer.contact.title")}
      </h3>

      <div className="mt-7 flex flex-col gap-5">
        <a
          href={contact.phoneHref}
          className="
            flex
            items-start
            gap-3
            text-sm
            text-white/65
            transition-colors
            hover:text-primary
          "
        >
          <Phone
            className="
              mt-0.5
              size-[17px]
              shrink-0
              text-primary
            "
            aria-hidden="true"
          />

          <span>{contact.phone}</span>
        </a>

        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:text-primary transition-colors"
        >
          <Mail
            className="
              mt-0.5
              size-[17px]
              shrink-0
              text-primary
            "
            aria-hidden="true"
          />

          <span>{contact.email}</span>
        </a>

        <div
          className="
            flex
            items-start
            gap-3
            text-sm
            leading-5
            text-white/65
          "
        >
          <MapPin
            className="
              mt-0.5
              size-[17px]
              shrink-0
              text-primary
            "
            aria-hidden="true"
          />

          <div>
            <p>{contact.locations.join(" • ")}</p>

            <p>{t(contact.country)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
