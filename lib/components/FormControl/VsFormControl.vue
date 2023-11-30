<template>
  <component :is="cmp" v-for="cmp in components" :key="cmp"/>
</template>

<script lang="ts" setup>
import {computed, defineOptions, h, useAttrs, useSlots, VNode} from "vue"
import {FormControlProps} from "./FormControlProps"
import VsEmpty from "../VsEmpty.vue"
import {IdProps} from "../IdProps"

defineOptions({
    inheritAttrs: false
})

defineSlots<{
  default(): void
  label(): void
  prepend(): void
  append(): void
  hint(): void
}>()
const slots = useSlots()
const props = defineProps<FormControlProps & IdProps>()
const attrs = useAttrs()

const hasLabel = computed(() => {
    return props.label || slots.label
})
const hasInputGroup = computed(() => {
    return slots.prepend || slots.append
})
const hasHint = computed(() => {
    return props.hint || slots.hint
})
const getInputSlot = (): VNode => {
    if (slots.default) {
        return h(slots.default, attrs)
    }
    return h(VsEmpty)
}

const getLabelSlot = (): VNode => {
    if (slots.label) {
        return h("label", {class: "form-label", for: props.id}, slots.label())
    }

    return h("label", {class: "form-label", for: props.id}, props.label)
}

const getInputComponents = (): VNode[] => {
    const list: VNode[] = []
    if (slots.prepend) {
        list.push(h(slots.prepend))
    }

    list.push(getInputSlot())

    if (slots.append) {
        list.push(h(slots.append))
    }

    return list
}

const getHintComponent = (): VNode => {
    return h("div", {class: "form-text"}, slots.hint ? slots.hint() : props.hint)
}

const components = computed(() => {
    let list = []

    if (hasInputGroup.value) {
        list.push(h("div", {class: "input-group"}, getInputComponents()))
    } else {
        list.push(...getInputComponents())
    }

    if (hasLabel.value) {
        if (props.floatingLabel) {
            list.push(getLabelSlot())
            list = [h("div", {class: "form-floating"}, list)]
        } else {
            list.unshift(getLabelSlot())
        }
    }

    if (hasHint.value) {
        list.push(getHintComponent())
    }

    return list
})

</script>