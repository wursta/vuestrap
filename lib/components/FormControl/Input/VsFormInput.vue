<template>
  <input
      v-model="localValue"
      :type="inputType"
      :class="computedClasses"
  />
</template>

<script lang="ts" setup>
import {InputEmits, InputProps} from "./InputProps"
import {computed, ref, useAttrs, watch} from "vue"

const props = withDefaults(defineProps<InputProps>(), {
    modelValue: "",
    inputType: "text"
})

const emit = defineEmits<InputEmits>()

const attrs = useAttrs()

const computedClasses = computed(() => {
    if (attrs.class) {
        return attrs.class
    }

    return ["form-control"]
})

const localValue = ref(props.modelValue)

watch(localValue, () => {
    emit("update:modelValue", localValue.value)
})

</script>