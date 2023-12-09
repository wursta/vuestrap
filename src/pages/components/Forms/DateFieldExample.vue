<template>
  <ExampleTabsCard title="Date" section-id="datefield" :code="exampleCode">
    <p>You can create date field with <code>vs-date-field</code> component.</p>
    <div class="mb-3">
      <vs-date-field label="Date" />
    </div>
  </ExampleTabsCard>
</template>
<script setup lang="ts">
import {VsDateField} from "@lib"
import ExampleTabsCard from "../../../components/ExampleTabsCard.vue"

const exampleCode = "<vs-date-field label=\"Date\" />"
</script>