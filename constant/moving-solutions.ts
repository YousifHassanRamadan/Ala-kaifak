import { Building2, Home } from "lucide-react";

export const movingSolutions = [
  {
    title: "Home Moving",
    description:
      "Villas, apartments and family homes moved with care from door to door.",
    icon: Home,
    variant: "light" as const,
    items: [
      "Apartments",
      "Villas",
      "Houses",
      "Furniture",
      "Packing",
      "Unpacking",
    ],
    buttonText: "Explore Home Moving",
  },
  {
    title: "Office & Commercial Moving",
    description:
      "Planned corporate relocations that keep your business running.",
    icon: Building2,
    variant: "dark" as const,
    items: [
      "Office relocation",
      "Furniture",
      "Equipment",
      "Packing",
      "Weekend moving",
      "After-hours moving",
    ],
    buttonText: "Explore Office Moving",
  },
] as const;
