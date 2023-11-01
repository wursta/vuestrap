<template>
  <h1>Tabs</h1>
  <hr />
  <vs-tabs>
    <vs-tab active>
      <template #title="{ active }">
        <button class="nav-link" :class="{'active': active}">
          <strong>Tab 111</strong>
        </button>
      </template>
      Tab 1 content
    </vs-tab>
    <vs-tab title="Tab 2">
      Tab 2 content
    </vs-tab>
  </vs-tabs>
</template>

<script setup lang="ts">

import {VsTabs, VsTab} from "@lib"
</script>