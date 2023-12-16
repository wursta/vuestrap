<template>
  <conditional-wrapper :condition="wrapperNeeded" tag="div" :class="computedWrapperClasses" v-bind="wrapperAttrs">
    <input
        :id="computedId"
        :value="value"
        :checked="isChecked"
        :indeterminate="isIndeterminate"
        :class="computedClasses"
        v-bind="$attrs"
        type="checkbox"
        @input="onInput"
    />
    <component :is="labelComponent" v-if="hasLabel"/>
  </conditional-wrapper>
</template>

<script lang="ts" setup>
import {computed, h, useSlots} from "vue"
import {CheckboxFieldEmits, CheckboxFieldProps} from "./CheckboxFieldProps"
import VsEmpty from "../../VsEmpty.vue"
import useId from "../../../composables/useId"
import {IdProps} from "../../IdProps"
import ConditionalWrapper from "../../ConditionalWrapper.vue"

defineOptions({
    inheritAttrs: false
})

const props = withDefaults(defineProps<CheckboxFieldProps & IdProps>(), {
    modelValue: false,
    switch: false,
    inline: false,
    reverse: false,
    button: false,
    buttonVariant: "",
    value: true,
    uncheckedValue: false,
    strict: true,
    allowNull: false,
    wrapperClass: "",
    wrapperAttrs: null
})

const emit = defineEmits<CheckboxFieldEmits>()
const slots = useSlots()

const {computedId} = useId(props)

const computedWrapperClasses = computed(() => {
    return {
        "form-check": !props.button,
        "form-switch": props.switch,
        "form-check-inline": props.inline,
        "form-check-reverse": props.reverse
    }
})

const computedClasses = computed(() => {
    return {
        "form-check-input": !props.button,
        "btn-check": props.button,
    }
})

const isChecked = computed(() => {
    if (Array.isArray(props.modelValue)) {
        return props.modelValue.indexOf(props.value) !== -1
    } else {
        if (props.strict) {
            return props.modelValue === props.value
        } else {
            return props.modelValue == props.value
        }
    }
})

const hasLabel = computed(() => {
    return !!slots.default || !!props.label
})

const wrapperNeeded = computed(() => {
    return (!props.button && hasLabel.value) || props.switch || props.inline || props.reverse
})

const labelComponent = computed(() => {
    const classes = {
        "form-check-label": !props.button,
        ["btn btn-" + props.buttonVariant]: props.button
    }
    if (props.label) {
        return h("label", {class: classes, for: computedId.value}, props.label)
    }
    if (slots.default) {
        return h("label", {class: classes, for: computedId.value}, slots.default())
    }
    return VsEmpty
})

const isIndeterminate = computed(() => {
    return props.allowNull && props.modelValue === null
})

const onInput = (event: Event) => {
    if (!(event.target instanceof HTMLInputElement)) {
        throw new Error("HTMLInputElement expected as event.target")
    }

    if (Array.isArray(props.modelValue)) {
        const clone = [...props.modelValue]
        if (event?.target?.checked) {
            clone.push(props.value)
        } else {
            const index = clone.indexOf(props.value)
            if (index != -1) {
                clone.splice(index, 1)
            }
        }
        emit("update:modelValue", clone)
    } else {
        emit("update:modelValue", event?.target?.checked ? props.value : props.uncheckedValue)
    }
}

</script>