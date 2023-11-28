<template>
  <ExampleTabsCard title="Text-based fields" section-id="textfields">
    <div class="form-check form-switch mb-3">
      <input id="floating-label-option" v-model="isFloatingLabel" class="form-check-input" type="checkbox">
      <label class="form-check-label" for="floating-label-option">Floating labels</label>
    </div>
    <div class="mb-3">
      <vs-text-field
          :floating-label="isFloatingLabel"
          label="Email address"
          input-type="email"
          placeholder="your@email.com"
      />
    </div>
    <div class="mb-3">
      <vs-text-field label="Password" input-type="password" :floating-label="isFloatingLabel" placeholder=""/>
    </div>
    <div class="mb-3">
      <vs-text-field label="Date" input-type="date" :floating-label="isFloatingLabel" placeholder=""/>
    </div>
    <div class="mb-3">
      <vs-text-field label="Time" input-type="time" :floating-label="isFloatingLabel" placeholder=""/>
    </div>
  </ExampleTabsCard>
</template>

<script lang="ts" setup>
import ExampleTabsCard from "../../../components/ExampleTabsCard.vue"
import {VsTextField} from "@lib"
import {ref} from "vue"

const isFloatingLabel = ref(false)
</script>