import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'url'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            // api
            '@api': fileURLToPath(new URL('./src/api', import.meta.url)),
            // assets
            '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
            // components
            '@components': fileURLToPath(
                new URL('./src/components', import.meta.url)
            ),
            // layouts
            '@layouts': fileURLToPath(
                new URL('./src/layouts', import.meta.url)
            ),
            // types
            '@type': fileURLToPath(new URL('./src/types', import.meta.url)),
            // router
            '@router': fileURLToPath(new URL('./src/router', import.meta.url)),
            // views
            '@views': fileURLToPath(new URL('./src/views', import.meta.url)),
    }
  },
})
