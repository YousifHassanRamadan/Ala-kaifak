export const FOOTER_CONTENT = {
  brand: {
    name: "Ala Kaifak",
    tagline: "MOVING & RELOCATION",
    description:
      "Professional home and office relocation across Abu Dhabi, Dubai and the UAE. Packing, moving, assembly and transportation handled by one trusted team.",
  },

  quickLinks: [
    {
      label: "Home",
      targetId: "home",
    },
    {
      label: "About",
      targetId: "about",
    },
    {
      label: "Services",
      targetId: "services",
    },
    {
      label: "Reviews",
      targetId: "reviews",
    },
    {
      label: "Contact",
      targetId: "contact",
    },
  ],

  services: [
    {
      label: "Home Moving",
      targetId: "services",
    },
    {
      label: "Office Moving",
      targetId: "services",
    },
    {
      label: "Packing",
      targetId: "services",
    },
    {
      label: "Furniture Moving",
      targetId: "services",
    },
    {
      label: "Transportation",
      targetId: "services",
    },
  ],

  contact: {
    phone: "+971508 199 942",
    phoneHref: "tel:+971508199942",

    email: "info@alakaifakmover.com",
    emailHref: "mailto:info@alakaifakmover.com",

    locations: ["Abu Dhabi", "Dubai"],
    country: "United Arab Emirates",
  },

  legal: {
    copyright: "© 2026 EmiratesMove. All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
  },
} as const;
