<template>
  <div :class="classes" role="alert">
    <slot></slot>
    <button v-if="dismissible" type="button" class="btn-close" aria-label="Close" :title="closeBtnTitle"></button>
  </div>
</template>

<script setup lang="ts">
import {Props} from "./Props"
import {computed} from "vue"

const props = withDefaults(defineProps<Props>(), {
    variant: "info",
    dismissible: false,
    closeBtnTitle: "Close"
})

const classes = computed(() => [
    "alert",
    `alert-${props.variant}`,
    {
        "alert-dismissible": props.dismissible
    }
])
</script>