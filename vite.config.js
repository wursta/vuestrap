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
            name: "ExtVueBootstrap",
            fileName: "ext-vue-bootstrap",
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
    }
})
