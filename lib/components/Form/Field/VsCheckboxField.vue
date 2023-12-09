<template>
  <div class="form-check">
    <input
        :id="computedId"
        :value="modelValue"
        :checked="!!modelValue"
        :indeterminate="isIndeterminate"
        type="checkbox"
        class="form-check-input"
        @input="onInput"
    />
    <component :is="labelComponent" v-if="hasLabel" />
  </div>
</template>

<script lang="ts" setup>
import {computed, h, useSlots} from "vue"
import {CheckboxFieldEmits, CheckboxFieldProps} from "./CheckboxFieldProps"
import VsEmpty from "../../VsEmpty.vue"
import useId from "../../../composables/useId"
import {IdProps} from "../../IdProps"

const props = withDefaults(defineProps<CheckboxFieldProps & IdProps>(), {
    modelValue: null,
    allowNull: false
})

const emit = defineEmits<CheckboxFieldEmits>()
const slots = useSlots()

const {computedId} = useId(props)

const hasLabel = computed(() => {
    return slots.default || props.label
})
const labelComponent = computed(() => {
    if (props.label) {
        return h("label", {class: "form-check-label", for: computedId.value}, props.label)
    }
    if (slots.default) {
        return h("label", {class: "form-check-label", for: computedId.value}, slots.default())
    }
    return VsEmpty
})

const isIndeterminate = computed(() => {
    return props.allowNull && props.modelValue === null
})

const onInput = (event: Event) => {
    if (!(event.target instanceof HTMLInputElement)) {
        throw new Error("HTMLInputElement expected as event.target")
    }

    emit("update:modelValue", event?.target?.checked)
}

</script>