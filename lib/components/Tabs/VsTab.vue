<template>
  <div class="tab-pane" :class="{'active': active}" role="tabpanel">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import {TabProps} from "./Props"
import {inject, Ref, useSlots} from "vue"

const props = withDefaults(defineProps<TabProps>(), {
    active: false
})

const tabs = inject<Ref<[]>>("tabs-list")
const slots = useSlots()
tabs.value.push({
    title: props.title,
    titleComponent: slots.title,
    active: props.active
})
</script>