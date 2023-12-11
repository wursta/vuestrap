<template>
  <ExampleTabsCard title="Label customization" section-id="label-customization" :code="codeExample">
      <p>You can simply customize label with <code>default</code> slot in <strong>all</strong> field components.</p>
      <vs-text-field>
        It's awesome <strong>custom label</strong>
      </vs-text-field>
  </ExampleTabsCard>
</template>

<script lang="ts" setup>
import ExampleTabsCard from "../../../components/ExampleTabsCard.vue"
import {VsTextField} from "@lib"
const codeExample = `<vs-text-field>
  It's awesome <strong>custom label</strong>
</vs-text-field>`
</script>