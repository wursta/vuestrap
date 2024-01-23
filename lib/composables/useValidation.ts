import {computed, provide, reactive} from "vue"
import {ValidationSettings} from "./ValidationSettings"

export default function useValidation(settings: ValidationSettings = {}) {
    const validationGroup = reactive(new Map())

    provide("vuestrap-validation-group", validationGroup)
    provide("vuestrap-validation-immediate", settings.immediate || false)
    const validate = () => {
        validationGroup.forEach(({validate}) => {
            validate()
        })
    }
    const reset = () => {
        validationGroup.forEach(({reset}) => {
            reset()
        })
    }
    const isValid = computed(() => {
        if (!validationGroup.size) {
            return null
        }

        const results: Array<boolean|null> = []
        validationGroup.forEach(({isValid}) => {
            results.push(isValid)
        })

        if (results.indexOf(false) !== -1) {
            return false
        }

        if (results.indexOf(null) !== -1) {
            return null
        }

        return true
    })

    const errors = computed(() => {
        const errorsMap = new Map()
        validationGroup.forEach(({errors}, id) => {
            if (errors.length > 0) {
                errorsMap.set(id, errors)
            }
        })
        return errorsMap
    })

    return {
        isValid,
        validate,
        reset,
        errors
    }
}