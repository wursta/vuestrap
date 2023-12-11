export type ValueType = boolean | string | number | null | undefined;
export interface CheckboxFieldProps {
    modelValue?: ValueType,
    label?: string,
    switch?: boolean,
    inline?: boolean,
    reverse?: boolean,
    button?: boolean,
    buttonVariant?: string,
    value?: boolean | string | number | null | undefined,
    uncheckedValue?: boolean | string | number | null | undefined,
    strict?: boolean,
    allowNull?: boolean,
}

export interface CheckboxFieldEmits {
    (e: "update:modelValue", modelValue: ValueType): void
}