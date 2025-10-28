import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://damczi17/github.io',
  base: '/osp',
  vite: {
    plugins: [tailwindcss()]
  }
})