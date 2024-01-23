export type ValidationRule = string

export interface FormControlProps {
    label?: string
    hint?: string
    floatingLabel?: boolean
    prependText?: string
    appendText?: string
    isValid?: boolean | null
    validationErrors?: string[]
    validMessage?: string
    tooltipFeedback?: boolean
}