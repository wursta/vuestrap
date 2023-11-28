<template>
  <ExampleTabsCard title="Range" section-id="rangefield">
    <p>Any attribute you set on <code>vs-text-field</code> will be applied to input element</p>
    <p>If you set <code>class</code> attribute on <code>vs-text-field</code> component it override default input class
      <code>form-control</code>.</p>
    <div class="d-flex">
      <div class="flex-grow-1">
        <vs-text-field v-model="min" label="Min" floating-label></vs-text-field>
      </div>
      <div class="flex-grow-1 ms-2">
        <vs-text-field v-model="max" label="Max" floating-label></vs-text-field>
      </div>
    </div>
    <vs-text-field
        v-model="rangeValue"
        :min="min"
        :max="max"
        label="Range"
        input-type="range"
        class="form-range"
    />
    <hr/>
    <div>
      v-model value: <code>{{ rangeValue }}</code>
    </div>
  </ExampleTabsCard>
</template>
<script setup lang="ts">
import ExampleTabsCard from "../../../components/ExampleTabsCard.vue"
import {VsTextField} from "@lib"
import {ref} from "vue"

const rangeValue = ref(3)
const min = ref(0)
const max = ref(5)
</script>