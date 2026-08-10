"use client";

import Link from "next/link";
import { Phone, Truck, X, Menu, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navItems } from "@/constant/links";
import { ScrollToSection } from "../features/scroll-to-section/scroll-to-section";

import logo from "@/assets/alakeifak-logo.png";

import Image from "next/image";
import { useState } from "react";
import { LanguageSwitcher } from "../features/language-switcher/language-switcher";
import { useTranslation } from "react-i18next";

const phoneNumber = "+971 508 199 942";

export function Header() {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="mx-auto flex h-[88px] max-w-[1200px] items-center justify-between px-5 lg:px-6">
          {/* Logo */}
          <ScrollToSection
            targetId="home"
            className="flex shrink-0 items-center gap-2"
          >
            <Image
              src={logo}
              alt="Ala Kaifak Furniture Movers"
              priority
              className="h-auto w-[50px] rounded-xl object-contain sm:w-[55px]"
            />

            <span className="uppercase">{t("header.brand.name")}</span>
          </ScrollToSection>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item, i) => (
              <ScrollToSection
                key={i}
                targetId={`${item.href}`}
                className="
                  relative py-2
                  text-[15px]
                  font-medium
                  text-[#5F6877]
                  transition-colors
                  hover:text-brand-navy
                  after:absolute
                  after:bottom-0
                  after:left-0
                  after:h-[2px]
                  after:w-0
                  after:bg-brand-orange
                  after:transition-all
                  hover:after:w-full
                "
              >
                {t(item.label)}
              </ScrollToSection>
            ))}
          </nav>
          {/* Desktop Right Side */}
          <div className="hidden items-center gap-5 lg:flex">
            <a
              href={`tel:${phoneNumber.replace(/\s/g, "")}`}
              className="flex items-center gap-2 whitespace-nowrap text-[15px] font-semibold text-brand-navy"
            >
              <Phone
                className="h-[18px] w-[18px] text-[#F79000]"
                strokeWidth={2}
              />

              {phoneNumber}
            </a>

            <LanguageSwitcher />
          </div>
          {/* Mobile Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Phone */}
            <Button
              asChild
              size="icon"
              variant="outline"
              className="
                h-11
                w-11
                rounded-[13px]
                border-[#DCE2EA]
                bg-white
                text-brand-navy
                shadow-sm
              "
            >
              <a href={`tel:${phoneNumber.replace(/\s/g, "")}`}>
                <Phone className="h-[19px] w-[19px]" />
              </a>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  size="icon"
                  className="
                    h-11
                    w-11
                    rounded-[13px]
                    bg-brand-navy
                    text-white
                    hover:bg-brand-navy/90
                  "
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="
                  w-full
                  max-w-[390px]
                  border-l-0
                  bg-white
                  p-0
                "
              >
                {/* Mobile Menu Header */}
                <SheetHeader className="border-b px-5 py-5 text-left">
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col leading-none">
                      <ScrollToSection
                        targetId="home"
                        className="flex shrink-0 items-center gap-2"
                        onClick={() => setOpen(false)}
                      >
                        <Image
                          src={logo}
                          alt="Ala Kaifak Furniture Movers"
                          priority
                          className="h-auto w-[50px] rounded-xl object-contain sm:w-[55px]"
                        />

                        <span className="uppercase">
                          {t("common.brandName")}
                        </span>
                      </ScrollToSection>
                    </div>

                    {/* Language Switcher */}
                    <LanguageSwitcher />
                  </div>
                </SheetHeader>

                {/* Mobile Navigation */}
                <div className="px-5">
                  <nav className="flex flex-col">
                    {navItems.map((item) => (
                      <ScrollToSection
                        key={item.href}
                        targetId={item.href}
                        className="
                          border-b
                          border-border
                          py-[19px]
                          text-[17px]
                          font-medium
                          text-brand-navy
                          transition-colors
                          hover:text-[#F79000]
                          flex
                          justify-start
                        "
                        onClick={() => setOpen(false)}
                      >
                        {t(item.label)}
                      </ScrollToSection>
                    ))}
                  </nav>

                  {/* Mobile Quote Button */}
                  <Button
                    asChild
                    className="
                      mt-5
                      h-[52px]
                      w-full
                      rounded-[13px]
                      bg-[#F79000]
                      text-[16px]
                      font-semibold
                      text-black
                      shadow-[0_8px_20px_rgba(247,144,0,0.2)]
                      hover:bg-brand-orange-dark
                    "
                  >
                    <ScrollToSection
                      targetId="quote"
                      onClick={() => setOpen(false)}
                    >
                      {t("common.getFreeQuote")}
                    </ScrollToSection>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Actions */}
      <div
        className="
          fixed
          bottom-0
          left-0
          right-0
          z-40
          flex
          items-center
          gap-2
          border-t
          bg-white/95
          px-4
          py-3
          backdrop-blur
          lg:hidden
        "
      >
        {/* Call */}
        <Button
          asChild
          size="icon"
          variant="outline"
          className="
            h-12
            w-12
            shrink-0
            rounded-[12px]
            border-border-light
            bg-white
            text-brand-navy
            shadow-sm
          "
        >
          <a href={`tel:${phoneNumber.replace(/\s/g, "")}`}>
            <Phone className="h-5 w-5" />
            <span className="sr-only">Call us</span>
          </a>
        </Button>

        {/* WhatsApp */}
        <Button
          asChild
          size="icon"
          variant="outline"
          className="
            h-12
            w-12
            shrink-0
            rounded-[12px]
            border-[#DCE2EA]
            bg-white
            text-[#10A957]
            shadow-sm
          "
        >
          <a
            href="https://wa.me/971501234567"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="sr-only">WhatsApp</span>
          </a>
        </Button>

        {/* Quote */}
        <Button
          asChild
          className="
            h-12
            flex-1
            rounded-[12px]
            bg-[#F79000]
            text-[15px]
            font-semibold
            text-black
            shadow-[0_7px_18px_rgba(247,144,0,0.25)]
            hover:bg-[#e98500]
          "
        >
          <ScrollToSection targetId="quote">
            {t("common.getFreeQuote")}
          </ScrollToSection>
        </Button>
      </div>
    </>
  );
}
