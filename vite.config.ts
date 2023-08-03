import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

console.log(__dirname)

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    plugins: [react()],
})
