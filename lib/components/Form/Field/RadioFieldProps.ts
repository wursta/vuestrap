export type ModelValueType = boolean | string | number | null | undefined;
export interface RadioFieldProps {
    modelValue?: ModelValueType,
    label?: string,
    inline?: boolean,
    reverse?: boolean,
    button?: boolean,
    buttonVariant?: string,
    value?: boolean | string | number | null | undefined,
    strict?: boolean,
    wrapperAttrs?: object | null
}

export interface RadioFieldEmits {
    (e: "update:modelValue", modelValue: ModelValueType): void
}