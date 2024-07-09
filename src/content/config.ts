import { defineCollection, reference, z } from "astro:content";

export const legal = z.object({
  datePublished: z.date(),
  dateModified: z.date().optional(),
});

const authorCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      givenName: z.string(),
      familyName: z.string(),
      additionalName: z.string().optional(),
      birthDate: z.string().optional(),
      birthPlace: z
        .object({
          address: z.string(),
        })
        .optional(),
      deathDate: z.date().optional(),
      deathPlace: z
        .object({
          address: z.string(),
        })
        .optional(),
      image: image(),
      title: z.string().optional(),
    }),
});

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      metaTitle: z.string().optional(),
      metaDescription: z.string().optional(),
      datePublished: z.date(),
      dateModified: z.date().optional(),
      authors: reference("author").array(),
      socialImage: image()
        .refine((img) => img.width >= 1200, {
          message: "Social image must be at least 1200 pixels wide!",
        })
        .optional(),
      coverImage: image().refine((img) => img.width >= 1080, {
        message: "Cover image must be at least 1080 pixels wide!",
      }),
      tags: z.array(z.string()),
    }),
});

export const collections = {
  author: authorCollection,
  blog: blogCollection,
};
