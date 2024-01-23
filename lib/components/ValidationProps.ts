import {ValidationRule} from "./Form/Field/inner/FormControlProps"

export interface ValidationProps {
    vid?: string,
    rules?: ValidationRule | ValidationRule[]
    markValid?: boolean
    validMessage?: string
    markInvalid?: boolean
    invalidMessage?: string
    tooltipFeedback?: boolean
    immediate?: boolean
}

export interface ValidationFieldEmits {
    (e: "validate", isValid: boolean): void
}