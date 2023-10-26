<template>
  <div :class="classes" role="alert">
    <slot></slot>
    <button v-if="dismissible" type="button" class="btn-close" aria-label="Close"></button>
  </div>
</template>

<script setup lang="ts">
import {Props} from "./Props"
import {computed} from "vue"

const props = withDefaults(defineProps<Props>(), {
    variant: "info",
    dismissible: false
})

const classes = computed(() => [
    "alert",
    `alert-${props.variant}`,
    {
        "alert-dismissible": props.dismissible
    }
])
</script>