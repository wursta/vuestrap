<template>
  <ExampleTabsCard title="Custom label content" section-id="custom-label-content">
      <p>You can simply customize label with <code>default</code> slot.</p>
      <vs-text-field>
        It's awesome <strong>custom label</strong>
      </vs-text-field>
  </ExampleTabsCard>
</template>

<script lang="ts" setup>
import ExampleTabsCard from "../../../components/ExampleTabsCard.vue"
import {VsTextField} from "@lib"</script>