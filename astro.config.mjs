import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
import UnoCSS from 'unocss/astro';
import vercel from '@astrojs/vercel/serverless';
import netlify from '@astrojs/netlify/functions';
import node from '@astrojs/node';

const envAdapter = () => {
  switch (process.env.OUTPUT) {
    case 'vercel':
      return vercel({
        edgeMiddleware: true,
      });
    case 'netlify':
      return netlify({
        edgeMiddleware: true,
      });
    default:
      return node({ mode: 'standalone' });
  }
};

export default defineConfig({
  integrations: [UnoCSS({ injectReset: true }), solidJs()],
  output: 'server',
  adapter: envAdapter(),
});
