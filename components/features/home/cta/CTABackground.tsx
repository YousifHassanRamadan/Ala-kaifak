import Image from "next/image";

import backImage from "@/assets/cta-bg.png";

export function CTABackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10">
      {/* Background Image */}
      <Image
        src={backImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark Navy Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-brand-navy/85
        "
      />

      {/* Optional subtle gradient */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-brand-navy/20
          via-brand-navy/10
          to-brand-navy/30
        "
      />
    </div>
  );
}
