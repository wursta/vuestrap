<template>
  <VsFormControl :label="label" :floating-label="floatingLabel" :hint="hint">
    <VsFormInput v-bind="$attrs" />
    <template v-if="slots.default" #label>
      <slot />
    </template>
    <template v-if="slots.prepend" #prepend>
      <slot name="prepend" />
    </template>
    <template v-if="slots.append" #append>
      <slot name="append" />
    </template>
    <template v-if="slots.hint" #hint>
      <slot name="hint" />
    </template>
  </VsFormControl>
</template>

<script setup lang="ts">
import VsFormControl from "./VsFormControl.vue"
import VsFormInput from "./Input/VsFormInput.vue"
import {TextFieldProps} from "./TextFieldProps"
import {FormControlProps} from "./FormControlProps"
import {defineOptions, useSlots} from "vue"

defineOptions({
    inheritAttrs: false
})
defineProps<FormControlProps & TextFieldProps>()

const slots = useSlots()
</script>