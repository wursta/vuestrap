<template>
  <h1>Tabs</h1>
  <p class="text-body-secondary">Horizontally or vertically stacked list of items. When clicked each item switch content in the tab pane.</p>

  <ExampleTabsCard section-id="basic-example" title="Basic example">
    <SimpleTabsExample />
  </ExampleTabsCard>

  <h2 class="mt-5">Pills</h2>
  <PillsTabsExample />

  <vs-tabs tag="div">
    <vs-tab tag="div" active>
      <template #title="{ active, click }">
        <button class="nav-link" :class="{'active': active}" @click="click">
          <span v-if="active" class="spinner-grow spinner-grow-sm" role="status">
            <span class="visually-hidden">Loading...</span>
          </span>
          Tab 1 with slot
        </button>
      </template>

      Tab 1 content <br/>
      Tab 1 content <br/>
      Tab 1 content <br/>
      Tab 1 content <br/>
    </vs-tab>
    <vs-tab title="Tab 2" tag="div">
      Tab 2 content <br/>
      Tab 2 content <br/>
      Tab 2 content <br/>
      Tab 2 content <br/>
    </vs-tab>
    <vs-tab v-for="(tab, i) in additionalTabs" :key="`custom_tab_${i}` " :title="tab.title" tag="div">
      {{ tab.content }}
    </vs-tab>
    <div class="nav-item ms-auto">
      <button class="btn btn-outline-primary" @click="addTab">Add</button>
    </div>
  </vs-tabs>

  Content after
</template>

<script setup lang="ts">
import {VsTabs, VsTab} from "@lib"
import {ref} from "vue"
import SimpleTabsExample from "./SimpleTabsExample.vue"
import PillsTabsExample from "./PillsTabsExample.vue"
import ExampleTabsCard from "../../../components/ExampleTabsCard.vue"

const additionalTabs = ref<{title: string, content: string}[]>([])

const addTab = () => {
    additionalTabs.value.push({
        title: "Test " + additionalTabs.value.length,
        content: "Test content " + additionalTabs.value.length
    })
}
</script>