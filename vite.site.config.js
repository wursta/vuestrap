import {defineConfig} from "vite"
import vue from "@vitejs/plugin-vue"
import {fileURLToPath, URL} from "node:url"

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: "public"
    },
    plugins: [
        vue(),
    ],
    resolve: {
        alias: {
            "@lib": fileURLToPath(new URL("./lib/main.ts", import.meta.url))
        }
    },
})
