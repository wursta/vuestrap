import {computed, inject} from "vue"
import {Locale} from "../types/Locale"
import {enUSLocale} from "@lib"

export default function useLocale() {
    const locale = inject<Locale>("vuestrap-locale", enUSLocale)
    const computeLocaleText = (text: string | undefined, defaultText: string) => {
        return computed(() => {
            if (text === undefined) {
                return defaultText
            }

            return text
        })
    }

    return {
        locale,
        computeLocaleText
    }
}