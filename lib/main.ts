import {App, Plugin} from "vue"
import {PluginOptions} from "./types/PluginOptions"
import * as enUSLocale from "./locale/en-US.json"

const plugin: Plugin = {
    install(app: App, options?: PluginOptions | undefined) {
        const locale = options?.locale ?? enUSLocale
        app.provide("vuestrap-locale", locale)
    }
}

export * from "./components"
export * from "./locale"
export {plugin as VuestrapPlugin}