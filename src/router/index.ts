import {createRouter, createWebHashHistory} from "vue-router"
import DefaultTpl from "../layout/DefaultTpl.vue"

const routes = [
    {
        path: "",
        component: DefaultTpl,
        children: [
            {
                path: "components/alerts/:anchor?",
                component: () => import("../pages/components/Alerts/AlertsDocs.vue")
            },
            {
                path: "components/tabs",
                component: () => import("../pages/components/Tabs/TabsDocs.vue")
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