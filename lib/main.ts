import {App, Plugin} from "vue"
import {PluginOptions} from "./types/PluginOptions"
import * as enUSLocale from "./locale/en-US.json"

const plugin: Plugin = {
    install(app: App, options?: PluginOptions | undefined) {
        const locale = options?.locale ?? enUSLocale
        app.provide("vuestrap-locale", locale)

        const animation = options?.animation ?? true
        app.provide("vuestrap-animation", animation)
    }
}

export * from "./components"
export * from "./composables"
export * from "./locale"
export {plugin as VuestrapPlugin}