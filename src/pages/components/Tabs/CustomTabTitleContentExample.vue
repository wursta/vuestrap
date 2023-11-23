<template>

  <ExampleTabsCard section-id="custom-tab-title" title="Custom tab title" :code="codeExample">
    <p>You can customize tab title with <code>titleText</code> or <code>title</code> slots.</p>
    <p><code>titleText</code> slot rendered <strong>inside</strong> <code>nav-link</code> button and provided <code>active</code>
      state</p>
    <p><code>title</code> slot rendered <strong>instead of</strong> <code>nav-link</code> button and provided <code>active</code>
      state and <code>click</code> method</p>

    <vs-tabs>
      <vs-tab active content-class="mt-3">
        <template #titleText="{ active }">
          <span v-if="active" class="spinner-grow spinner-grow-sm" role="status">
            <span class="visually-hidden">Loading...</span>
          </span>
          I'm <i>custom</i> <b>title</b>
        </template>

        This is some placeholder content the current tab's associated content.
        Clicking another tab will toggle the visibility of this one for the next.
        The tab JavaScript swaps classes to control the content visibility and styling.
        You can use it with tabs, pills, and any other .nav-powered navigation.
      </vs-tab>
      <vs-tab title="Tab 2" content-class="mt-3">
        <template #title="{ active, click }">
          <button class="nav-link" :class="{'active': active}" @click="click">
          <span v-if="active" class="spinner-grow spinner-grow-sm" role="status">
            <span class="visually-hidden">Loading...</span>
          </span>
            I'm <i>custom</i> <b>title</b> 2
          </button>
        </template>
        This is some placeholder content the current tab's associated content.
        Clicking another tab will toggle the visibility of this one for the next.
        The tab JavaScript swaps classes to control the content visibility and styling.
        You can use it with tabs, pills, and any other .nav-powered navigation.
      </vs-tab>
    </vs-tabs>
  </ExampleTabsCard>
</template>

<script setup lang="ts">
import {VsTab, VsTabs} from "@lib"
import ExampleTabsCard from "../../../components/ExampleTabsCard.vue"
import {computed} from "vue"

const codeExample = computed(() => {
    return `<vs-tabs>
  <vs-tab active content-class="mt-3">
    <template #titleText="{ active }">
      <span v-if="active" class="spinner-grow spinner-grow-sm" role="status">
        <span class="visually-hidden">Loading...</span>
      </span>
      I'm <i>custom</i> <b>title</b>
    </template>

    This is some placeholder content the current tab's associated content.
    Clicking another tab will toggle the visibility of this one for the next.
    The tab JavaScript swaps classes to control the content visibility and styling.
    You can use it with tabs, pills, and any other .nav-powered navigation.
  </vs-tab>
  <vs-tab title="Tab 2" content-class="mt-3">
    <template #title="{ active, click }">
      <button class="nav-link" :class="{'active': active}" @click="click">
      <span v-if="active" class="spinner-grow spinner-grow-sm" role="status">
        <span class="visually-hidden">Loading...</span>
      </span>
        I'm <i>custom</i> <b>title</b> 2
      </button>
    </template>
    This is some placeholder content the current tab's associated content.
    Clicking another tab will toggle the visibility of this one for the next.
    The tab JavaScript swaps classes to control the content visibility and styling.
    You can use it with tabs, pills, and any other .nav-powered navigation.
  </vs-tab>
</vs-tabs>`
})
</script>