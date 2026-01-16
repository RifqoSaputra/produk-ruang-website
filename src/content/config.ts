// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'data', // GANTI INI dari 'content' ke 'data' karena kita pakai JSON
  schema: z.object({
    title: z.string(),
    category: z.string(),
    image: z.string(),
  }),
});

export const collections = {
  'projects': projectsCollection,
};