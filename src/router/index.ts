import {createRouter, createWebHashHistory} from "vue-router"
import DefaultTpl from "../layout/DefaultTpl.vue"

const routes = [
    {
        path: "",
        component: DefaultTpl,
        children: [
            {
                path: "plugin/:anchor?",
                component: () => import("../pages/PluginDocs.vue")
            },
            {
                path: "components/alerts/:anchor?",
                component: () => import("../pages/components/Alerts/AlertsDocs.vue")
            },
            {
                path: "components/tabs/:anchor?",
                component: () => import("../pages/components/Tabs/TabsDocs.vue")
            },
            {
                path: "components/forms/:anchor?",
                component: () => import("../pages/components/Forms/FormsDocs.vue")
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior (to) {
        if (!to.params.anchor) {
            return {top: 0}
        }

        return {
            el: "#" + to.params.anchor,
            top: 80
        }
    }
})

export default router