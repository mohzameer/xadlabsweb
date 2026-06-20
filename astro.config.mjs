import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://xadlabs.com',
  integrations: [tailwind()],
  adapter: node({ mode: 'standalone' }),
});
