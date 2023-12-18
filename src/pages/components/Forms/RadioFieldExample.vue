<template>
  <ExampleTabsCard title="Radio" section-id="radiofield" :code="exampleCode">
    <p>Use <code>vs-radio-field</code> to create radio field.</p>
    <p>Radio inputs have almost the same capabilities as checkboxes. Check out component reference for details.</p>
    <p>Choose fruit:</p>
    <div class="mb-3">
    <vs-radio-field v-model="radiosValue.fruit" label="Apple" name="fruit" value="apple" inline/>
    <vs-radio-field v-model="radiosValue.fruit" label="Banana" name="fruit" value="banana" inline/>
    </div>

    <p>Choose vegetable:</p>
    <div class="mb-3">
    <vs-radio-field v-model="radiosValue.vegetable" label="Cucumber" name="vegetable" value="cucumber" inline/>
    <vs-radio-field v-model="radiosValue.vegetable" label="Potato" name="vegetable" value="potato" inline/>
    </div>
    <hr/>
    v-model value: <code>{{ printVar(radiosValue) }}</code>
  </ExampleTabsCard>
</template>

<script setup lang="ts">
import {ref} from "vue"
import {VsRadioField} from "@lib"
import ExampleTabsCard from "../../../components/ExampleTabsCard.vue"
import useDump from "../../../composables/useDump"

const {printVar} = useDump()

const radiosValue = ref({
    fruit: "apple",
    vegetable: "potato"
})

const exampleCode = ref(`<p>Choose fruit:</p>
<div class="mb-3">
    <vs-radio-field v-model="value.fruit" label="Apple" name="fruit" value="apple" inline/>
    <vs-radio-field v-model="value.fruit" label="Banana" name="fruit" value="banana" inline/>
</div>

<p>Choose vegetable:</p>
<div class="mb-3">
    <vs-radio-field v-model="value.vegetable" label="Cucumber" name="vegetable" value="cucumber" inline/>
    <vs-radio-field v-model="value.vegetable" label="Potato" name="vegetable" value="potato" inline/>
</div>
`)
</script>