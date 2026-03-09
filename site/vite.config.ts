/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import svgr from 'vite-plugin-svgr'
import { imagetools } from 'vite-imagetools'

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

import type { IndexHtmlTransformContext } from 'vite'

function fontPreloadPlugin() {
  return {
    name: 'font-preload',
    transformIndexHtml(html: string, ctx: IndexHtmlTransformContext) {
      if (!ctx.bundle) return html
      const fontLinks = Object.keys(ctx.bundle)
        .filter(f => f.endsWith('.woff2') && !f.includes('italic'))
        .map(f => `<link rel="preload" href="/WebDesignClass/${f}" as="font" type="font/woff2" crossorigin />`)
        .join('\n    ')
      return html.replace('</head>', `    ${fontLinks}\n  </head>`)
    }
  }
}

export default defineConfig({
  plugins: [react(), svgr(), imagetools(), tailwindcss(), fontPreloadPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  base: '/WebDesignClass/',
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.woff2')) {
            return 'assets/fonts/[name][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  },
  test: {
    projects: [{
      extends: true,
      plugins: [storybookTest({ configDir: path.join(dirname, '.storybook') })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: playwright({}),
          instances: [{ browser: 'chromium' }]
        },
        setupFiles: ['.storybook/vitest.setup.ts']
      }
    }]
  }
});