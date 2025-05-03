import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date().optional(), // Expect a Date object, make it optional
    excerpt: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};