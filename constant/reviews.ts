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
    name: "reviews.items.1.name",
    location: "reviews.items.1.location",
    rating: 5,
    content: "reviews.items.1.content",
  },
  {
    id: 2,
    initials: "RK",
    name: "reviews.items.2.name",
    location: "reviews.items.2.location",
    rating: 5,
    content: "reviews.items.2.content",
  },
  {
    id: 3,
    initials: "OS",
    name: "reviews.items.3.name",
    location: "reviews.items.3.location",
    rating: 5,
    content: "reviews.items.3.content",
  },
  {
    id: 4,
    initials: "MA",
    name: "reviews.items.4.name",
    location: "reviews.items.4.location",
    rating: 5,
    content: "reviews.items.4.content",
  },
  {
    id: 5,
    initials: "DK",
    name: "reviews.items.5.name",
    location: "reviews.items.5.location",
    rating: 5,
    content: "reviews.items.5.content",
  },
  {
    id: 6,
    initials: "SA",
    name: "reviews.items.6.name",
    location: "reviews.items.6.location",
    rating: 5,
    content: "reviews.items.6.content",
  },
];
