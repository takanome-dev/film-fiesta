import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({command, mode}) => {
  return {
    base: './',
    mode,
  server: {
    host: true,
    port: 3000,
    strictPort: true,
  },
  build: {
    // Relative to the root
    outDir: '../dist',
  },
  plugins: [
    // …
    react({
      // Use React plugin in all *.jsx and *.tsx files
      include: '**/*.{jsx,tsx}',
    }),
  ],
  }
});