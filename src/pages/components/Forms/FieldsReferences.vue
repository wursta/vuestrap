<template>
  <ExampleCard title="Reference: vs-text-field" section-id="vs-text-field-reference">
    <TextFieldPropsTable/>
  </ExampleCard>
  <ExampleCard title="Reference: vs-number-field" section-id="vs-number-field-reference">
    <NumberFieldPropsTable/>
  </ExampleCard>
  <ExampleCard title="Reference: vs-date-field" section-id="vs-date-field-reference">
    <DateFieldPropsTable/>
  </ExampleCard>
  <ExampleCard title="Reference: vs-time-field" section-id="vs-time-field-reference">
    <TimeFieldPropsTable/>
  </ExampleCard>
  <ExampleCard title="Reference: vs-range-field" section-id="vs-range-field-reference">
    <RangeFieldPropsTable/>
  </ExampleCard>
  <ExampleCard title="Reference: vs-checkbox-field" section-id="vs-checkbox-field-reference">
    <CheckboxFieldPropsTable/>
  </ExampleCard>
  <ExampleCard title="Reference: vs-radio-field" section-id="vs-radio-field-reference">
    <RadioFieldPropsTable/>
  </ExampleCard>

</template>
<script setup lang="ts">
import ExampleCard from "../../../components/ExampleCard.vue"
import TextFieldPropsTable from "./TextFieldPropsTable.vue"
import NumberFieldPropsTable from "./NumberFieldPropsTable.vue"
import DateFieldPropsTable from "./DateFieldPropsTable.vue"
import TimeFieldPropsTable from "./TimeFieldPropsTable.vue"
import RangeFieldPropsTable from "./RangeFieldPropsTable.vue"
import CheckboxFieldPropsTable from "./CheckboxFieldPropsTable.vue"
import RadioFieldPropsTable from "./RadioFieldPropsTable.vue"
</script>