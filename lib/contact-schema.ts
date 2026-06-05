import { z } from "zod";

/**
 * Contact form schema, validates the form client-side (React Hook Form) before
 * it's posted to the form service (Web3Forms) on the static site.
 *
 * Required: name, phone, message (keeps the barrier to enquiry low).
 * Optional: email, postcode, photos.
 * `company` is a honeypot, real users never see it; bots that fill it are dropped.
 */
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a contact number")
    .max(30, "That number looks too long"),
  email: z
    .string()
    .trim()
    .max(150)
    .email("Please enter a valid email address")
    .optional()
    .or(z.literal("")),
  postcode: z.string().trim().max(12, "Please enter a valid postcode").optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little about the job")
    .max(2000, "That message is a bit long, please shorten it"),
  // Honeypot: must stay empty.
  company: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

// Photo upload constraints (validated outside Zod since files are handled separately).
export const PHOTO_MAX_FILES = 4;
export const PHOTO_MAX_BYTES = 5 * 1024 * 1024; // 5 MB each
export const PHOTO_ACCEPT = "image/png,image/jpeg,image/webp,image/heic";
