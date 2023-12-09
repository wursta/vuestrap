<template>
  <vs-text-field
      input-type="range"
      class="form-range"
  >
    <template v-if="slots.default" #default>
      <slot/>
    </template>
    <template v-if="slots.hint" #hint>
      <slot name="hint"/>
    </template>
  </vs-text-field>
</template>
<script lang="ts" setup>
import VsTextField from "./VsTextField.vue"
import {useSlots} from "vue"

const slots = useSlots()
</script>