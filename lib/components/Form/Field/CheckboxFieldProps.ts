import {ClassType} from "../../VueTypes"

export type ValueType = boolean | string | number | null | undefined;
export type ModelValueType = ValueType | ValueType[]
export interface CheckboxFieldProps {
    modelValue?: ModelValueType,
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
    wrapperClass?: ClassType
    wrapperAttrs?: object | null
}

export interface CheckboxFieldEmits {
    (e: "update:modelValue", modelValue: ModelValueType): void
}