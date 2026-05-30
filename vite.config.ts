import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      maxParallelFileOps: 128,
      input: {
        main: './index.html',
        work: './work.html',
        shop: './shop.html'
      }
    }
  }
});
