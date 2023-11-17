import {defineStore} from "pinia"
import {ref} from "vue"

export const useContentSidebarStore = defineStore("content-sidebar", () => {
    const sidebarShow = ref(false)
    return { sidebarShow }
})