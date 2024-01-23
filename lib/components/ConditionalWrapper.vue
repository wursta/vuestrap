<template>
  <component :is="component"/>
</template>

<script lang="ts" setup>
import {computed, h, VNode} from "vue"

interface Props {
  condition: boolean,
  tag?: string
}

const props = withDefaults(defineProps<Props>(), {
    tag: "div"
})
const slots = defineSlots<{
  default(): VNode
}>()
const component = computed(() => {
    if (props.condition) {
        return h(props.tag, {}, slots.default())
    }
    return slots.default
})
</script>
