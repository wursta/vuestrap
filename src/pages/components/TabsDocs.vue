<template>
  <h1>Tabs</h1>
  <hr/>
  <vs-tabs tag="div">
    <vs-tab active tag="div">
      <template #title="{ active, click }">
        <button class="nav-link" :class="{'active': active}" @click="click">
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
      <button class="btn btn-primary" @click="addTab">Add</button>
    </div>
  </vs-tabs>
</template>

<script setup lang="ts">
import {VsTabs, VsTab} from "@lib"
import {ref} from "vue"

const additionalTabs = ref([])

const addTab = () => {
    additionalTabs.value.push({
        title: "Test " + additionalTabs.value.length,
        content: "Test content " + additionalTabs.value.length
    })
}
</script>