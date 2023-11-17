<template>
  <vs-tabs pills>
    <vs-tab title="Home" active>
      This is some placeholder content the <strong>Home tab's</strong> associated content. Clicking another tab will toggle the visibility of this one for the next.
    </vs-tab>
    <vs-tab title="Profile">
      This is some placeholder content the <strong>Profile tab's</strong> associated content. Clicking another tab will toggle the visibility of this one for the next.
    </vs-tab>
  </vs-tabs>
</template>

<script setup lang="ts">
import {VsTabs} from "@lib"
import VsTab from "../../../../lib/components/Tabs/VsTab.vue"
</script>