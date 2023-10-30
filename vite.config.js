/// <reference types="vitest" />
import {resolve} from "path"
import {defineConfig} from "vite"
import vue from "@vitejs/plugin-vue"
import dts from "vite-plugin-dts"
import {fileURLToPath, URL} from "node:url"

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        copyPublicDir: false,
        lib: {
            entry: resolve(__dirname, "lib/main.ts"),
            formats: ["es"],
            name: "Vuestrap",
            fileName: "vuestrap-bootstrap",
        },
        rollupOptions: {
            external: ["vue"],
            output: {
                globals: {
                    vue: "Vue",
                }
            }
        }
    },
    plugins: [
        vue(),
        dts({include: ["lib"]}),
    ],
    resolve: {
        alias: {
            "@lib": fileURLToPath(new URL("./lib/main.ts", import.meta.url))
        }
    },
    test: {
        environment: "happy-dom",
        coverage: {
            provider: "v8",
            reporter: ["text"],
        },
    }
})
