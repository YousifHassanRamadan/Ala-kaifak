import { MessageCircle } from "lucide-react";

const whatsappNumber = "971508199942";

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="
    fixed
    bottom-24
    right-5
    z-50
    flex
    h-14
    w-14
    items-center
    justify-center
    rounded-full
    bg-[#25D366]
    text-white
    shadow-[0_8px_25px_rgba(37,211,102,0.35)]
    transition-all
    duration-200
    hover:scale-110
    active:scale-95
    sm:bottom-20
    lg:bottom-10
    md:bottom-18
    sm:right-7
  "
    >
      <MessageCircle className="h-7 w-7" strokeWidth={2.2} />
    </a>
  );
}
