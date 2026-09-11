// @ts-check

import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://workingmodel.ruve.be',
  integrations: [sitemap()],
  devToolbar: { enabled: false },
});
