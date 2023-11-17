import {createApp} from "vue"
import {createPinia} from "pinia"
import App from "./App.vue"
import {ruRULocale, VuestrapPlugin} from "@lib"
import router from "./router"
import "./scss/style.scss"
import "highlight.js/styles/github-dark.min.css"
import {useDarkModeStore} from "./stores/DarkModeStore"
import hljs from "highlight.js/lib/core"
import hljsJsLang from "highlight.js/lib/languages/javascript"
import hljsXmlLang from "highlight.js/lib/languages/xml"
import hljsVuePlugin from "@highlightjs/vue-plugin"

hljs.registerLanguage("xml", hljsXmlLang)
hljs.registerLanguage("javascript", hljsJsLang)

const pinia = createPinia()
createApp(App)
    .use(router)
    .use(pinia)
    .use(hljsVuePlugin)
    .use(VuestrapPlugin, {
        locale: ruRULocale
    })
    .mount("#app")

const darkModeStore = useDarkModeStore()
const htmlEl = document.querySelector("html")
if (htmlEl) {
    if (darkModeStore.darkModeEnabled) {
        htmlEl.setAttribute("data-bs-theme", "dark")
    } else {
        htmlEl.setAttribute("data-bs-theme", "light")
    }
}
darkModeStore.$subscribe((mutation, state) => {
    if (!htmlEl) {
        return
    }

    if (state.darkModeEnabled) {
        htmlEl.setAttribute("data-bs-theme", "dark")
    } else {
        htmlEl.setAttribute("data-bs-theme", "light")
    }
})
