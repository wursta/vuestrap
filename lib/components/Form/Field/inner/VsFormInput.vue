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
import {ValidationInputProps} from "./ValidationInputProps"
import {IdRequiredInternalProps} from "../../../_internal/IdRequiredInternalProps"

const props = withDefaults(defineProps<InputProps & ValidationInputProps & IdRequiredInternalProps>(), {
    modelValue: null,
    inputType: "text",
    plainText: false,
    isValid: null,
    markValid: false,
    markInvalid: true
})

const emit = defineEmits<InputEmits>()
const attrs = useAttrs()

const computedClasses = computed(() => {
    const classes = []
    if (attrs.class) {
        classes.push(attrs.class)
    }

    if (attrs.class !== "form-range") {
        if (props.plainText) {
            classes.push("form-control-plaintext")
        } else {
            classes.push("form-control")
        }
    }

    if (props.markInvalid && props.isValid === false) {
        classes.push("is-invalid")
    }

    if (props.markValid && props.isValid === true) {
        classes.push("is-valid")
    }

    return classes
})

const onInput = (event: Event) => {
    if (!(event.target instanceof HTMLInputElement)) {
        throw new Error("HTMLInputElement expected as event.target")
    }

    const newValue = event?.target?.value

    emit("update:model-value", newValue)
}
</script>