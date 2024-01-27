<template>
  <vs-text-field
      input-type="number"
  >
    <template v-if="slots.default" #default>
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
  </vs-text-field>
</template>
<script lang="ts" setup>
import VsTextField from "./VsTextField.vue"
import {useSlots} from "vue"

const slots = useSlots()
</script>