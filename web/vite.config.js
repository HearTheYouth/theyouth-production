import { resolve } from 'path'

export default {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'wall-of-talent': resolve(__dirname, 'wall-of-talent.html'),
        about: resolve(__dirname, 'about.html'),
      },
    },
  },
  server: {
    port: 5173,
    proxy: {
      '/studio': {
        target: 'http://localhost:3333',
        changeOrigin: true,
      },
    },
  },
}
