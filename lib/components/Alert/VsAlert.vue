<template>
  <Transition :name="transitionName">
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
import useTransition from "../../composables/useTransition"
import {AnimateProps} from "../AnimateProps"

const props = withDefaults(defineProps<Props & AnimateProps>(), {
    show: true,
    variant: "info",
    dismissible: false,
    animate: true
})
const emit = defineEmits<Events>()

const {locale, computeLocaleText} = useLocale()
const {computeTransName} = useTransition(props)

const classes = computed(() => [
    "alert",
    `alert-${props.variant}`,
    {
        "alert-dismissible": props.dismissible
    }
])

const transitionName = computeTransName("alert")

// Close button
const localCloseBtnTitle = computeLocaleText(props.closeBtnTitle, locale.close)
const onCloseBtnHandler = () => {
    if (!props.dismissible) {
        return
    }
    emit("update:show", false)
}
</script>

<style lang="scss" scoped>
.alert-enter-active,
.alert-leave-active {
  transition: opacity 0.5s ease;
}

.alert-enter-from,
.alert-leave-to {
  opacity: 0;
}
</style>