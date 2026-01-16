// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'data', 
  schema: z.object({
    title: z.string(),
    category: z.string(),
    image: z.string(),
  }),
});

export const collections = {
  // Pastikan nama ini SAMA PERSIS dengan 'name' di config.yml
  'projects': projectsCollection, 
};