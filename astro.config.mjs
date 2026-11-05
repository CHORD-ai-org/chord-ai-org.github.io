import { defineConfig } from 'astro/config';

// Deployed to the organization Pages domain: https://chord-ai-org.github.io/
export default defineConfig({
  site: 'https://chord-ai-org.github.io',
  base: '/',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
