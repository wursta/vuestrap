<template>
  <VsFormControl
      :id="computedId"
      :label="label"
      :floating-label="floatingLabel"
      :hint="hint"
      :is-valid="isValid"
      :validation-errors="errors"
      :valid-message="validMessage"
      :prepend-text="prepend"
      :append-text="append"
      :tooltip-feedback="tooltipFeedback"
  >
    <VsFormInput
        :id="computedId"
        :model-value="modelValue"
        v-bind="$attrs"
        :is-valid="isValid"
        :mark-valid="markValid"
        :mark-invalid="markInvalid"
        @update:model-value="onUpdateValue"/>
    <template v-if="slots.default" #label>
      <slot/>
    </template>
    <template v-if="slots.prepend" #prepend>
      <slot name="prepend"/>
    </template>
    <template v-if="slots.prependText" #prependText>
      <slot name="prependText"/>
    </template>
    <template v-if="slots.append" #append>
      <slot name="append"/>
    </template>
    <template v-if="slots.appendText" #appendText>
      <slot name="appendText"/>
    </template>
    <template v-if="slots.hint" #hint>
      <slot name="hint"/>
    </template>
  </VsFormControl>
</template>

<script setup lang="ts">
import VsFormControl from "./inner/VsFormControl.vue"
import VsFormInput from "./inner/VsFormInput.vue"
import {defineOptions, useAttrs, useSlots} from "vue"
import {IdProps} from "../../IdProps"
import useId from "../../../composables/useId"
import {ValidationFieldEmits, ValidationProps} from "../../ValidationProps"
import {InputFieldEmits, InputFieldProps, InputFieldValueType} from "./InputFieldProps"
import useInternalValidation from "../../../composables/internal/useInternalValidation"

defineOptions({
    inheritAttrs: false
})
const props = withDefaults(defineProps<InputFieldProps & ValidationProps & IdProps>(), {
    markValid: false,
    markInvalid: true,
    tooltipFeedback: false,
    immediate: false,
    rules: () => []
})
const emit = defineEmits<InputFieldEmits & ValidationFieldEmits>()
const slots = useSlots()
const attrs = useAttrs()
const {computedId} = useId(props)
const {
    markValid,
    isValid,
    errors
} = useInternalValidation(props.vid || computedId.value, props, emit, attrs)
const onUpdateValue = (value: InputFieldValueType) => {
    emit("update:model-value", value)
}
</script>