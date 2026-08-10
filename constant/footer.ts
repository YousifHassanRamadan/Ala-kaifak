export const FOOTER_CONTENT = {
  brand: {
    name: "footer.brand.name",
    tagline: "footer.brand.tagline",
    description: "footer.brand.description",
  },

  quickLinks: [
    {
      label: "footer.quickLinks.home",
      targetId: "home",
    },
    {
      label: "footer.quickLinks.about",
      targetId: "about",
    },
    {
      label: "footer.quickLinks.services",
      targetId: "services",
    },
    {
      label: "footer.quickLinks.reviews",
      targetId: "reviews",
    },
    {
      label: "footer.quickLinks.contact",
      targetId: "contact",
    },
  ],

  services: [
    {
      label: "footer.services.homeMoving",
      targetId: "services",
    },
    {
      label: "footer.services.officeMoving",
      targetId: "services",
    },
    {
      label: "footer.services.packing",
      targetId: "services",
    },
    {
      label: "footer.services.furnitureMoving",
      targetId: "services",
    },
    {
      label: "footer.services.transportation",
      targetId: "services",
    },
  ],

  contact: {
    phone: "+971508 199 942",
    phoneHref: "tel:+971508199942",

    email: "info@alakaifakmover.com",
    emailHref: "mailto:info@alakaifakmover.com",

    locations: ["Abu Dhabi", "Dubai"],
    country: "footer.contact.country",
  },

  legal: {
    copyright: "footer.legal.copyright",
    privacy: "footer.legal.privacy",
    terms: "footer.legal.terms",
  },
} as const;
