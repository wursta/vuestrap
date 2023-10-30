import {createApp} from "vue"
import App from "./App.vue"
import {ruRULocale, VuestrapPlugin} from "@lib"
import router from "./router"
import "./style.scss"

createApp(App)
    .use(router)
    .use(VuestrapPlugin, {
        locale: ruRULocale
    })
    .mount("#app")
