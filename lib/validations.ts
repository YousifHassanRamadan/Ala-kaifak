import { z } from "zod";

export const quoteSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name is too long"),

  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name is too long"),

  phone: z
    .string()
    .min(7, "Please enter a valid phone number")
    .max(20, "Phone number is too long"),

  moveFrom: z.string().min(2, "Please enter where you are moving from"),

  moveTo: z.string().min(2, "Please enter where you are moving to"),

  movingDate: z.string().min(1, "Please select a moving date"),

  service: z.string().min(1, "Please select a service"),
});

export type QuoteFormData = z.infer<typeof quoteSchema>;
