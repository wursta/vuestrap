import {InputFieldValueType} from "../InputFieldProps"

export interface InputProps {
    modelValue?: InputFieldValueType,
    inputType?: string
    plainText?: boolean
}

export interface InputEmits {
    (e: "update:model-value", modelValue: InputFieldValueType): void
}