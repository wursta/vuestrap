<template>
  <component :is="cmp" v-for="cmp in components" :key="cmp"/>
</template>

<script lang="ts" setup>
import {computed, defineOptions, h, useAttrs, useSlots, VNode} from "vue"
import {FormControlProps} from "./FormControlProps"
import VsEmpty from "../VsEmpty.vue"

defineOptions({
    inheritAttrs: false
})

defineSlots<{
  default(): void
  label(): void
  prepend(): void
  append(): void
}>()
const slots = useSlots()
const props = defineProps<FormControlProps>()
const attrs = useAttrs()

const hasLabel = computed(() => {
    return props.label || slots.label
})
const hasInputGroup = computed(() => {
    return slots.prepend || slots.append
})
const getInputSlot = (): VNode => {
    if (slots.default) {
        return h(slots.default, attrs)
    }
    return h(VsEmpty)
}

const getLabelSlot = (): VNode => {
    if (slots.label) {
        return h("label", {class: "form-label"}, slots.label())
    }

    return h("label", {class: "form-label"}, props.label)
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

    return list
})

</script>