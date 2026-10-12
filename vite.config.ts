/// <reference types="vitest/config" />
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

// `--mode share` builds ONE self-contained HTML file (JS, CSS and fonts inlined) that can be
// sent over WhatsApp / e-mail and opened directly on a phone. Photos still load from the CDN.
export default defineConfig(({ mode }) => ({
  // Relative asset URLs so the build also works from a sub-path such as GitHub Pages' /caffe/.
  base: './',
  plugins: mode === 'share' ? [react(), viteSingleFile()] : [react()],
  build: mode === 'share' ? { outDir: 'dist-share' } : undefined,
  // GSAP's ESM files ship without "type": "module", so Node cannot import them
  // directly during prerendering. Bundle every dependency into the SSR build.
  ssr: { noExternal: true },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    css: false
  }
}));
