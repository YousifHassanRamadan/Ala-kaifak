import abuDhabiPolice from "@/assets/abu-dhabi-police.png";
import abuDhabiQuality from "@/assets/abu-dhabi-quality.png";
import higherColleges from "@/assets/higher-colleges.png";
import ministryOfCulture from "@/assets/ministry-of-culture.png";
import federalYouthAuthority from "@/assets/federal-youth-authority.png";
import integratedTransport from "@/assets/integrated-transport.jpg";

export const clients = [
  {
    id: "abu-dhabi-police",
    nameKey: "clients.items.abuDhabiPolice",
    logo: abuDhabiPolice,
  },
  {
    id: "abu-dhabi-quality",
    nameKey: "clients.items.abuDhabiQuality",
    logo: abuDhabiQuality,
  },
  {
    id: "higher-colleges",
    nameKey: "clients.items.higherColleges",
    logo: higherColleges,
  },
  {
    id: "ministry-of-culture",
    nameKey: "clients.items.ministryOfCulture",
    logo: ministryOfCulture,
  },
  {
    id: "federal-youth-authority",
    nameKey: "clients.items.federalYouthAuthority",
    logo: federalYouthAuthority,
  },
  {
    id: "integrated-transport",
    nameKey: "clients.items.integratedTransport",
    logo: integratedTransport,
  },
] as const;
