import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    image: z.string(), // Decap menyimpan path gambar sebagai string
  }),
});

export const collections = {
  'projects': projectsCollection,
};