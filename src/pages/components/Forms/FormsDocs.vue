<template>
  <h1>Forms</h1>

  <p class="text-body-secondary">Various type of inputs</p>

  <TextFieldExample/>
  <NumberFieldExample/>
  <DateFieldExample/>
  <TimeFieldExample/>
  <RangeFieldExample/>
  <CheckboxFieldExample/>
  <LabelCustomizationExample/>
  <InputGroupExample/>
  <FieldsReferences/>

</template>
<script setup lang="ts">
import LabelCustomizationExample from "./LabelCustomizationExample.vue"
import InputGroupExample from "./InputGroupExample.vue"
import FieldsReferences from "./FieldsReferences.vue"
import TextFieldExample from "./TextFieldExample.vue"
import RangeFieldExample from "./RangeFieldExample.vue"
import NumberFieldExample from "./NumberFieldExample.vue"
import DateFieldExample from "./DateFieldExample.vue"
import TimeFieldExample from "./TimeFieldExample.vue"
import CheckboxFieldExample from "./CheckboxFieldExample.vue"</script>