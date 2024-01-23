export type InputFieldValueType = string | number | null;
export interface InputFieldProps {
    modelValue?: InputFieldValueType
    label?: string
    hint?: string
    floatingLabel?: boolean
    prepend?: string
    append?: string
}

export interface InputFieldEmits {
    (e: "update:model-value", modelValue: InputFieldValueType): void
}