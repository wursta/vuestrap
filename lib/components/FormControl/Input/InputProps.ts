type ValueType = string | number | null;
export interface InputProps {
    modelValue?: ValueType,
    inputType?: string
    plainText?: boolean
}

export interface InputEmits {
    (e: "update:modelValue", modelValue: ValueType): void
}