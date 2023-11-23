<template>
  <h1>Tabs</h1>
  <p class="text-body-secondary">Horizontally stacked list of items. When clicked each item switch content in the tab pane.</p>

  <SimpleTabsExample />
  <CustomTabTitleContentExample />
  <DynamicTabsExample />

  <ExampleCard title="Component properties" section-id="properties">
    <TabsPropsTable />
  </ExampleCard>

  Content after
</template>

<script setup lang="ts">
import SimpleTabsExample from "./SimpleTabsExample.vue"
import CustomTabTitleContentExample from "./CustomTabTitleContentExample.vue"
import DynamicTabsExample from "./DynamicTabsExample.vue"
import ExampleCard from "../../../components/ExampleCard.vue"
import TabsPropsTable from "./TabsPropsTable.vue"
</script>