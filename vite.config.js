import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    viteReact(),
    TanStackRouterVite({ autoCodeSplitting: true }),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      // No externalices @components ni otros alias
      external: []
    }
  }
})
