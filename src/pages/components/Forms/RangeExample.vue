<template>
  <ExampleTabsCard title="Range" section-id="rangefield" :code="exampleCode">
    <p>If you set <code>class</code> attribute on <code>vs-text-field</code> component it <strong>override</strong> default input class
      <code>form-control</code>.</p>
    <div class="d-flex mb-3">
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
    <button class="btn btn-primary" @click="onSetValue">Set value: 3</button>
    <hr/>
    <div>
      v-model value: <code>{{ rangeValue }}</code>
    </div>
  </ExampleTabsCard>
</template>
<script setup lang="ts">
import ExampleTabsCard from "../../../components/ExampleTabsCard.vue"
import {VsTextField} from "@lib"
import {computed, ref} from "vue"

const rangeValue = ref(3)
const min = ref(0)
const max = ref(5)

const onSetValue = () => {
    rangeValue.value = 3
}

const exampleCode = computed(() => {
    return `<vs-text-field
    v-model="value"
    min="${min.value}"
    max="${max.value}"
    label="Range"
    input-type="range"
    class="form-range"
/>`
})
</script>