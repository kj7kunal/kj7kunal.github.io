import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://kj7kunal.github.io',
  integrations: [
    mdx(),
    tailwind({
      applyBaseStyles: true,
    }),
    react(),
    partytown({
      config: {
        forward: ["dataLayer.push"]
      }
    }),
    sitemap()
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
