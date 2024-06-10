import { SITE } from '@config';
import { defineCollection, z } from 'astro:content';
import type { ImageFunction } from 'astro:content';

const blogObj = (image: ImageFunction) =>
  z.object({
    author: z.string().default(SITE.author),
    pubDatetime: z.date(),
    modDatetime: z.date().optional().nullable(),
    title: z.string(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).default(['others']),
    ogImage: image()
      .refine(img => img.width >= 1200 && img.height >= 630, {
        message: 'OpenGraph image must be at least 1200 X 630 pixels!',
      })
      .or(z.string())
      .optional(),
    description: z.string(),
    canonicalURL: z.string().optional(),
    cover: image()
      .refine(img => img.width >= 1200 && img.height >= 630, {
        message: 'OpenGraph image must be at least 1200 X 630 pixels!',
      })
      .optional(),
    coverAlt: z.string().optional(),
  });

const posts = defineCollection({
  type: 'content',
  schema: ({ image }) => blogObj(image),
});

const portfolio = defineCollection({
  type: 'content',
  schema: ({ image }) => blogObj(image),
});

export const collections = { portfolio, posts };
