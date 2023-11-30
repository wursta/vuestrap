<template>
  <ExampleTabsCard title="Checks & Radios" section-id="checks-and-radios-fields">
    <div class="d-flex align-items-center gap-3 mb-3">
      <vs-checkbox-field v-model="ch1" label="Checkbox 1"/>
      <button class="btn  btn-sm btn-secondary" @click="setCh1Value(null)">Set NULL</button>
      <button class="btn  btn-sm btn-secondary" @click="setCh1Value(true)">Set TRUE</button>
      <button class="btn  btn-sm btn-secondary" @click="setCh1Value(false)">Set FALSE</button>
    </div>
    <div class="d-flex align-items-center gap-3 mb-3">
      <vs-checkbox-field v-model="ch2" label="Checkbox 2" allow-null/>
      <button class="btn  btn-sm btn-secondary" @click="setCh2Value(null)">Set NULL</button>
      <button class="btn  btn-sm btn-secondary" @click="setCh2Value(true)">Set TRUE</button>
      <button class="btn  btn-sm btn-secondary" @click="setCh2Value(false)">Set FALSE</button>
    </div>
    <hr/>
    Checkbox 1 v-model value: <code>{{ ch1String }}</code>
    <br/>
    Checkbox 2 v-model value: <code>{{ ch2String }}</code>
  </ExampleTabsCard>
</template>
<script setup lang="ts">
import ExampleTabsCard from "../../../components/ExampleTabsCard.vue"
import {VsCheckboxField} from "@lib"
import {computed, ref} from "vue"

const ch1 = ref<boolean | null>(true)
const ch2 = ref<boolean | null>(null)

const ch1String = computed(() => {
    if (ch1.value === null) {
        return "null"
    }

    return ch1.value
})

const ch2String = computed(() => {
    if (ch2.value === null) {
        return "null"
    }

    return ch2.value
})

const setCh1Value = (value: boolean | null) => {
    ch1.value = value
}
const setCh2Value = (value: boolean | null) => {
    ch2.value = value
}
</script>