import RequiredValidator from "../../validators/RequiredValidator"
import {computed, inject, ref, watch} from "vue"
import {ValidationFieldEmits, ValidationProps} from "../../components/ValidationProps"
import {InputFieldProps} from "../../components/Form/Field/InputFieldProps"

export default function useInternalValidation(componentId: string, props: InputFieldProps & ValidationProps, emit: ValidationFieldEmits, attrs: object) {
    const markValid = computed(() => !!props.validMessage || props.markValid)
    const isValidated = ref(false)
    const errors = ref<string[]>([])
    const isValid = computed(() => {
        if (!isValidated.value) {
            return null
        }

        return errors.value.length === 0
    })
    const validators = computed(() => {
        const validators = []

        const rules = computed(() => {
            const list = []

            if (props.rules) {
                if (typeof props.rules === "string") {
                    list.push(props.rules)
                } else {
                    list.push(...props.rules)
                }
            }

            // if (computedId.value === "vs-35") {
            //     debugger
            // }
            if (Object.prototype.hasOwnProperty.call(attrs, "required")) {
                list.push("required")
            }

            return list
        })

        for (const rule of rules.value) {
            if (rule === "required") {
                validators.push(RequiredValidator)
            }
        }
        return validators
    })
    const validate = async () => {
        const value = props.modelValue

        let fieldErrors: string[] = []
        for (const validator of validators.value) {
            const result = await validator.validate(value)
            if (result !== true) {
                fieldErrors = fieldErrors.concat(result)
                break
            }
        }

        isValidated.value = true

        if (fieldErrors.length > 0) {
            errors.value = props.invalidMessage ? [props.invalidMessage] : fieldErrors
        } else {
            errors.value = fieldErrors
        }

        emit("validate", errors.value.length === 0)
    }

    const reset = () => {
        isValidated.value = false
        errors.value = []
    }

    watch(() => props.modelValue, () => {
        validate()
    })

    const validationGroup = inject("vuestrap-validation-group", new Map())
    validationGroup.set(componentId, {isValid, reset, validate, errors})

    const immediate = inject("vuestrap-validation-immediate", props.immediate)
    if (immediate) {
        validate()
    }

    return {
        markValid,
        isValid,
        errors,
        validate,
        reset
    }
}