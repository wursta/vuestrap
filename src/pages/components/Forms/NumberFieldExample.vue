<template>
  <ExampleTabsCard title="Number" section-id="numberfield" :code="exampleCode">
    <p>You can create number field with <code>vs-number-field</code> component.</p>
    <p>This is the same as <code>vs-text-field</code>, but with preset prop <code>input-type</code> as <code>number</code></p>
    <p>You can set <code>min</code>, <code>max</code>, <code>step</code> and any other attributes and them will be applied to input.</p>
    <div class="mb-3">
      <vs-number-field label="Price" min="0" step="0.1" />
    </div>
  </ExampleTabsCard>
</template>
<script setup lang="ts">
import {VsNumberField} from "@lib"
import ExampleTabsCard from "../../../components/ExampleTabsCard.vue"

const exampleCode = "<vs-number-field label=\"Price\" min=\"0\" step=\"0.1\" />"
</script>