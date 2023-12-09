<template>
  <ExampleTabsCard title="Time" section-id="timefield" :code="exampleCode">
    <p>You can create date field with <code>vs-time-field</code> component.</p>
    <div class="mb-3">
      <vs-time-field label="Time" />
    </div>
  </ExampleTabsCard>
</template>
<script setup lang="ts">
import {VsTimeField} from "@lib"
import ExampleTabsCard from "../../../components/ExampleTabsCard.vue"

const exampleCode = "<vs-time-field label=\"Time\" />"
</script>