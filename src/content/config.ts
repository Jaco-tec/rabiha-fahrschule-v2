import { z, defineCollection } from 'astro:content';

const lessons = defineCollection({
  type: 'data',
  schema: z.object({
    title_ar: z.string(),
    title_de: z.string(),
    summary_ar: z.string(),
    summary_de: z.string(),
    body_ar: z.string().optional().default(''),
    body_de: z.string().optional().default(''),
    video_url: z.string().optional(),
    images: z.array(z.string()).optional(),
    category: z.string().optional(),
    order: z.number().optional(),
    tags: z.array(z.string()).optional()
  })
});

export const collections = { lessons };
