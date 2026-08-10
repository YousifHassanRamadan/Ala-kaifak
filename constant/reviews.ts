export interface Review {
  id: number;
  initials: string;
  name: string;
  location: string;
  rating: number;
  content: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    initials: "JW",
    name: "James Whitmore",
    location: "Dubai Marina",
    rating: 5,
    content:
      "Best moving experience I've had as an expat in the UAE. Clear quote, no hidden fees, and the crew arrived exactly on time.",
  },
  {
    id: 2,
    initials: "RK",
    name: "Rana Khalil",
    location: "Al Ain",
    rating: 5,
    content:
      "We relocated our office over a weekend and were fully operational by Sunday morning. Zero downtime and nothing damaged.",
  },
  {
    id: 3,
    initials: "OS",
    name: "Omar Siddiqui",
    location: "Abu Dhabi",
    rating: 5,
    content:
      "Packed our apartment in three hours with proper materials. The fragile items arrived in Dubai without a single scratch.",
  },
  {
    id: 4,
    initials: "MA",
    name: "Maya Ahmed",
    location: "Jumeirah",
    rating: 5,
    content:
      "The entire moving process was smooth and professional. The team handled everything carefully and delivered on schedule.",
  },
  {
    id: 5,
    initials: "DK",
    name: "Daniel Khan",
    location: "Business Bay",
    rating: 5,
    content:
      "Excellent service from start to finish. Communication was clear, pricing was transparent, and the movers were very professional.",
  },
  {
    id: 6,
    initials: "SA",
    name: "Sara Ali",
    location: "Sharjah",
    rating: 5,
    content:
      "Very impressed with the service. Everything was packed securely and the team made our relocation completely stress-free.",
  },
];
