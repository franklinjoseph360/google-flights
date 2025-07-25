import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import rollupNodePolyFill from 'rollup-plugin-node-polyfills'
import { fileURLToPath } from 'url'
import path from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@common': path.resolve(__dirname, 'src/components/common'),
      '@context': path.resolve(__dirname, 'src/features/FlightSearch/context'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@feature': path.resolve(__dirname, 'src/features'),
      crypto: 'crypto-browserify',
      stream: 'stream-browserify',
      buffer: 'buffer',
      process: 'process/browser',
      util: 'util',
    },
  },
  optimizeDeps: {
    include: ['crypto-browserify', 'stream-browserify', 'buffer', 'process', 'util'],
  },
  build: {
    rollupOptions: {
      // @ts-expect-error: Fixes type error for CommonJS plugin
      plugins: [rollupNodePolyFill()],
    },
  },
})
