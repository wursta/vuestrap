<template>
  <Transition name="fade" :css="animate">
    <div v-if="show" :class="classes" role="alert">
      <slot></slot>
      <button
          v-if="dismissible" type="button" class="btn-close" :title="localCloseBtnTitle"
          @click="onCloseBtnHandler"></button>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import {Props} from "./Props"
import {computed} from "vue"
import useLocale from "../../composables/useLocale"
import {Events} from "./Events"
import {AnimateProps} from "../AnimateProps"

const props = withDefaults(defineProps<Props & AnimateProps>(), {
    show: true,
    variant: "info",
    dismissible: false,
    animate: true
})
const emit = defineEmits<Events>()

const {locale, computeLocaleText} = useLocale()

const classes = computed(() => [
    "alert",
    `alert-${props.variant}`,
    {
        "alert-dismissible": props.dismissible
    }
])

// Close button
const localCloseBtnTitle = computeLocaleText(props.closeBtnTitle, locale.close)
const onCloseBtnHandler = () => {
    emit("update:show", false)
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>