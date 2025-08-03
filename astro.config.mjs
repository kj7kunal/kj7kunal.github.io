import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://kj7kunal.github.io',
  integrations: [
    mdx(),
    tailwind({
      applyBaseStyles: true,
    }),
    react()
  ],
  markdown: {
    shikiConfig: {
      theme: 'dark-plus',
      wrap: true
    }
  },
  output: 'static',
  outDir: './dist',
});
