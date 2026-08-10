import { Building2, Home } from "lucide-react";

export const movingSolutions = [
  {
    key: "home",
    icon: Home,
    variant: "light" as const,
  },
  {
    key: "office",
    icon: Building2,
    variant: "dark" as const,
  },
] as const;
