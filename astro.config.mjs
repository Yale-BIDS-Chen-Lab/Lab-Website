// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import rehypeExternalLinks from 'rehype-external-links';

export default defineConfig({
  site: 'https://www.qingyuchen-lab.com',
  // Keep the Google Sites URLs (/home, /research, /team, /join, /contact_1) working without trailing slashes.
  build: { format: 'file' },
  trailingSlash: 'never',
  // Keep source whitespace so line breaks next to inline links still render as spaces.
  compressHTML: false,
  devToolbar: { enabled: false },
  integrations: [sitemap()],
  markdown: {
    // External links open in a new tab, as on the original site.
    processor: unified({ rehypePlugins: [[rehypeExternalLinks, { target: '_blank', rel: ['noopener'] }]] }),
  },
});
