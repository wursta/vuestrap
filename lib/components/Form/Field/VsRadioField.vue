<template>
  <conditional-wrapper :condition="wrapperNeeded" tag="div" :class="computedWrapperClasses" v-bind="wrapperAttrs">
    <input
        :id="computedId"
        :value="value"
        :checked="isChecked"
        :class="computedClasses"
        v-bind="$attrs"
        type="radio"
        @input="onInput"
    />
    <component :is="labelComponent" v-if="hasLabel"/>
  </conditional-wrapper>
</template>

<script lang="ts" setup>
import {computed, h, useSlots} from "vue"
import VsEmpty from "../../VsEmpty.vue"
import useId from "../../../composables/useId"
import {IdProps} from "../../IdProps"
import ConditionalWrapper from "../../ConditionalWrapper.vue"
import {RadioFieldEmits, RadioFieldProps} from "./RadioFieldProps"

defineOptions({
    inheritAttrs: false
})

const props = withDefaults(defineProps<RadioFieldProps & IdProps>(), {
    modelValue: false,
    inline: false,
    reverse: false,
    button: false,
    buttonVariant: "",
    value: true,
    strict: true,
    wrapperAttrs: null
})

const emit = defineEmits<RadioFieldEmits>()
const slots = useSlots()

const {computedId} = useId(props)

const computedWrapperClasses = computed(() => {
    return {
        "form-check": !props.button,
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
    if (props.strict) {
        return props.modelValue === props.value
    } else {
        return props.modelValue == props.value
    }
})

const hasLabel = computed(() => {
    return !!slots.default || !!props.label
})

const wrapperNeeded = computed(() => {
    return (!props.button && hasLabel.value) || props.inline || props.reverse
})

const labelComponent = computed(() => {
    const classes = {
        "form-check-label": !props.button,
        "btn": props.button,
        ["btn-" + props.buttonVariant]: props.button && props.buttonVariant
    }
    if (props.label) {
        return h("label", {class: classes, for: computedId.value}, props.label)
    }
    if (slots.default) {
        return h("label", {class: classes, for: computedId.value}, slots.default())
    }
    return VsEmpty
})

const onInput = (event: Event) => {
    if (!(event.target instanceof HTMLInputElement)) {
        throw new Error("HTMLInputElement expected as event.target")
    }

    emit("update:modelValue", event?.target?.checked ? props.value : undefined)
}

</script>