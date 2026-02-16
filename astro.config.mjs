// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

const basePath =
  process.env.ASTRO_BASE_PATH ??
  (import.meta.env.PROD ? '/appartment-villa/' : '/');

export default defineConfig({
  site: 'https://pinjamar.github.io', // can stay — or update to custom domain later

  // Root in dev, repo subpath in production (unless overridden)
  base: basePath,

  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
