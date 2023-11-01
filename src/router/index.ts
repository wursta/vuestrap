import {createRouter, createWebHashHistory} from "vue-router"
import DefaultTpl from "../layout/DefaultTpl.vue"

const routes = [
    {
        path: "",
        component: DefaultTpl,
        children: [
            {
                path: "components/alerts",
                component: () => import("../pages/components/AlertsDocs.vue")
            },
            {
                path: "components/tabs",
                component: () => import("../pages/components/TabsDocs.vue")
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router