<template>

  <ExampleTabsCard section-id="basic-example" title="Basic example" :code="codeExample">
    <p>Simple example with first active tab and disabled tab. You can switch from tabs to pills with <code>pills</code> prop.</p>
    <div class="form-check form-switch">
      <input id="tabs-pills-option" v-model="isPills" class="form-check-input" type="checkbox">
      <label class="form-check-label" for="tabs-pills-option">Pills</label>
    </div>
    <div class="form-check form-switch">
      <input id="tabs-animate-option" v-model="isAnimated" class="form-check-input" type="checkbox">
      <label class="form-check-label" for="tabs-animate-option">Animate</label>
    </div>
    <div class="form-check form-switch">
      <input id="tabs-last-tab-disabled-option" v-model="isLastTabDisabled" class="form-check-input" type="checkbox">
      <label class="form-check-label" for="tabs-last-tab-disabled-option">Last tab disabled</label>
    </div>

    <vs-tabs class="mt-3" :pills="isPills" :animate="isAnimated">
      <vs-tab title="Home" active content-class="mt-3">
        <p>This is some placeholder content the <strong>Home tab's</strong> associated content. Clicking another tab will toggle the visibility of this one for the next.</p>
      </vs-tab>
      <vs-tab title="Profile" content-class="mt-3">
        <p>This is some placeholder content the <strong>Profile tab's</strong> associated content. Clicking another tab will toggle the visibility of this one for the next.</p>
      </vs-tab>
      <vs-tab title="I'm disabled" :disabled="isLastTabDisabled">
        <p>Disabled tab content...</p>
      </vs-tab>
    </vs-tabs>
  </ExampleTabsCard>
</template>

<script setup lang="ts">
import {VsTabs, VsTab} from "@lib"
import ExampleTabsCard from "../../../components/ExampleTabsCard.vue"
import {computed, ref} from "vue"

const isPills = ref(false)
const isAnimated = ref(true)
const isLastTabDisabled = ref(true)
const codeExample = computed(() => {
    const pillsStr = isPills.value ? " pills" : ""
    return `<vs-tabs${pillsStr}>
  <vs-tab title="Home" active content-class="mt-3">
    <p>This is some placeholder content the <strong>Home tab's</strong> associated content.
    Clicking another tab will toggle the visibility of this one for the next.</p>
  </vs-tab>
  <vs-tab title="Profile" content-class="mt-3">
    <p>This is some placeholder content the <strong>Profile tab's</strong> associated content.
    Clicking another tab will toggle the visibility of this one for the next.</p>
  </vs-tab>
  <vs-tab title="I'm disabled" disabled>
    Test...
  </vs-tab>
</vs-tabs>`
})
</script>