import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date().optional(),
    excerpt: z.string().optional(),
    category: z.enum(['data-analytics', 'sql', 'python', 'gen-ai']).optional(),
  }),
});

const htmlPostsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    date: z.date().optional(),
    excerpt: z.string().optional(),
    category: z.enum(['data-analytics', 'sql', 'python', 'gen-ai']).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  htmlPosts: htmlPostsCollection,
};