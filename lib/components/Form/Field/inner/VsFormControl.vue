<template>
  <component :is="labelComponent" v-if="hasLabel && !floatingLabel"/>
  <conditional-wrapper
      :condition="hasInputGroup"
      :class="['input-group', {'has-validation': markInvalid || markValid}]">
    <component :is="cmp" v-for="(cmp, key) in beforeInputComponents" :key="key"/>
    <conditional-wrapper
        :condition="!!floatingLabel"
        :class="['form-floating', {'is-invalid': markInvalid, 'is-valid': markValid}]">
      <slot/>
      <component :is="labelComponent" v-if="floatingLabel"/>
    </conditional-wrapper>
    <component :is="cmp" v-for="(cmp, key) in afterInputComponents" :key="key"/>
  </conditional-wrapper>
  <component :is="cmp" v-for="(cmp, key) in afterAllComponents" :key="key"/>
</template>

<script lang="ts" setup>
import {computed, defineOptions, h, useSlots, VNode} from "vue"
import {FormControlProps} from "./FormControlProps"
import {IdProps} from "../../../IdProps"
import ConditionalWrapper from "../../../ConditionalWrapper.vue"

defineOptions({
    inheritAttrs: false
})

defineSlots<{
  default(): void
  label(): void
  prepend(): void
  prependText(): void
  append(): void
  appendText(): void
  hint(): void
  invalidText(): void
}>()
const slots = useSlots()
const props = withDefaults(defineProps<FormControlProps & IdProps>(), {
    isValid: null,
    validationErrors: () => [],
    tooltipFeedback: false
})

const hasLabel = computed(() => {
    return props.label || slots.label
})
const hasInputGroup = computed(() => {
    return !!(slots.prepend || slots.prependText || props.prependText || slots.append || slots.appendText || props.appendText)
})
const hasHint = computed(() => {
    return props.hint || slots.hint
})

const labelComponent = (): VNode => {
    if (slots.label) {
        return h("label", {class: "form-label", for: props.id}, slots.label())
    }

    return h("label", {class: "form-label", for: props.id}, props.label)
}

const getHintComponent = (): VNode => {
    return h("div", {class: "form-text"}, slots.hint ? slots.hint() : props.hint)
}

const markInvalid = computed(() => {
    return props.isValid === false && props.validationErrors && props.validationErrors.length > 0
})

const markValid = computed(() => {
    return props.isValid === true && props.validMessage
})

const beforeInputComponents = computed(() => {
    let list: { prepend?: VNode, prependText?: VNode } = {}

    if (slots.prepend) {
        list.prepend = h(slots.prepend)
    }

    if (props.prependText || slots.prependText) {
        list.prependText = h("span", {class: "input-group-text"}, slots.prependText ? slots.prependText() : props.prependText)
    }

    return list
})

const afterInputComponents = computed(() => {
    let list: { append?: VNode, appendText?: VNode, invalidFeedback?: VNode, validFeedback?: VNode } = {}

    if (slots.append) {
        list.append = h(slots.append)
    }

    if (props.appendText || slots.appendText) {
        list.appendText = h("span", {class: "input-group-text"}, slots.appendText ? slots.appendText() : props.appendText)
    }
    // if (props.id === "vs-35") {
    //     debugger
    // }

    if (markInvalid.value) {
        const invalidFeedbackClass = props.tooltipFeedback ? "invalid-tooltip" : "invalid-feedback"
        list.invalidFeedback = h("div", {class: invalidFeedbackClass}, props.validationErrors.toString())
    }

    if (markValid.value) {
        const validFeedbackClass = props.tooltipFeedback ? "valid-tooltip" : "valid-feedback"
        list.validFeedback = h("div", {class: validFeedbackClass}, props.validMessage)
    }

    return list
})

const afterAllComponents = computed(() => {
    let list: { hint?: VNode } = {}

    if (hasHint.value) {
        list.hint = getHintComponent()
    }

    return list
})

</script>