<template>
  <input
      :id="id"
      :value="modelValue"
      :type="inputType"
      :class="computedClasses"
      @input="onInput"
  />
</template>

<script lang="ts" setup>
import {InputEmits, InputProps} from "./InputProps"
import {computed, useAttrs} from "vue"
import {IdProps} from "../../IdProps"

const props = withDefaults(defineProps<InputProps & IdProps>(), {
    modelValue: null,
    inputType: "text",
    plainText: false
})

const emit = defineEmits<InputEmits>()
const attrs = useAttrs()

const computedClasses = computed(() => {
    if (attrs.class) {
        return attrs.class
    }

    if (props.plainText) {
        return ["form-control-plaintext"]
    }

    return ["form-control"]
})

const onInput = (event: Event) => {
    if (!(event.target instanceof HTMLInputElement)) {
        throw new Error("HTMLInputElement expected as event.target")
    }

    emit("update:modelValue", event?.target?.value)
}

</script>