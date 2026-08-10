import type { Metadata } from "next";

import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/features/home/footer/Footer";
import { Toaster } from "@/components/ui/sonner";
import { WhatsAppButton } from "@/components/shared/whatsapp-button/WhatsAppButton";

export const metadata: Metadata = {
  title: "Ala Kaifak | Moving & Relocation",
  description: "Professional moving and relocation services across the UAE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />

        <main className="pb-20 lg:pb-0">{children}</main>

        <WhatsAppButton />
        <Toaster />

        <Footer />
      </body>
    </html>
  );
}
