type ValueType = string | number;
export interface InputProps {
    modelValue?: ValueType,
    inputType?: string
}

export interface InputEmits {
    (e: "update:modelValue", modelValue: ValueType): void
}