import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    category: z.enum(['ml', 'life', 'experiments']).default('life'),
    featured: z.boolean().default(false),
  }),
});

const life = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    category: z.enum(['ml', 'life', 'experiments']).default('life'),
    featured: z.boolean().default(false),
  }),
});

const experiments = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    category: z.enum(['ml', 'life', 'experiments']).default('experiments'),
    featured: z.boolean().default(false),
  }),
});

const ml = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    technologies: z.array(z.string()).optional(),
    github: z.string().optional(),
    demo: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  'blog': blog,
  'life': life,
  'experiments': experiments,
  'ml': ml,
};
