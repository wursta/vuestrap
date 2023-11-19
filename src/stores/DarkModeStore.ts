import {defineStore} from "pinia"
import {ref} from "vue"

export const useDarkModeStore = defineStore("dark-mode", () => {
    const darkModeEnabled = ref(false)
    return { darkModeEnabled }
})