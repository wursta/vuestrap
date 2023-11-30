type ValueType = boolean | null;
export interface CheckboxFieldProps {
    modelValue?: ValueType,
    label?: string,
    allowNull?: boolean
}

export interface CheckboxFieldEmits {
    (e: "update:modelValue", modelValue: ValueType): void
}