<template>
  <ExampleTabsCard title="Checkbox" section-id="checkboxfield" :code="exampleCode">
    <p>Use <code>vs-checkbox-field</code> to create checkbox field.</p>
    <p>You can add <code>allow-null</code> prop and the checkbox can accept an <code>indeterminate</code> state.</p>
    <p><strong>Be careful</strong>, the prop <code>allow-null</code> does not change the value from null to false, but
      only controls the display of the checkbox null-state.</p>

    <vs-checkbox-field v-model="isDisabled" label="Disabled" :wrapper-attrs="{'class': 'mb-3'}" switch/>
    <vs-checkbox-field v-model="isSwitches" label="Switch mode" :wrapper-attrs="{'class': 'mb-3'}" switch/>

    <div class="d-flex align-items-center gap-3 mb-3">
      <vs-checkbox-field v-model="ch1" label="Checkbox 1" :disabled="isDisabled" :switch="isSwitches"/>
      <button class="btn  btn-sm btn-secondary" @click="setCh1Value(null)">Set NULL</button>
      <button class="btn  btn-sm btn-secondary" @click="setCh1Value(true)">Set TRUE</button>
      <button class="btn  btn-sm btn-secondary" @click="setCh1Value(false)">Set FALSE</button>
    </div>
    <div class="d-flex align-items-center gap-3 mb-3">
      <vs-checkbox-field v-model="ch2" label="Checkbox 2" allow-null :disabled="isDisabled" :switch="isSwitches"/>
      <button class="btn  btn-sm btn-secondary" @click="setCh2Value(null)">Set NULL</button>
      <button class="btn  btn-sm btn-secondary" @click="setCh2Value(true)">Set TRUE</button>
      <button class="btn  btn-sm btn-secondary" @click="setCh2Value(false)">Set FALSE</button>
    </div>
    <hr/>
    Checkbox 1 v-model value: <code>{{ printVar(ch1) }}</code>
    <br/>
    Checkbox 2 v-model value: <code>{{ printVar(ch2) }}</code>
    <hr/>
    <p>You can create checkbox group with same name and different value using prop <code>value</code>.
      If you want, you can set prop <code>unchecked-value</code> to specify unchecked value (by default:
      <code>undefined</code>).</p>
    <p>Also, you can set prop <code>inline</code> to arrange checkboxes in one line or <code>button</code> to render
      checkboxes as buttons.</p>

    <div class="mb-3">
      <vs-checkbox-field v-model="isGroupInline" label="Inline" switch inline/>
      <vs-checkbox-field v-model="isGroupReverse" label="Reverse" switch inline/>
      <vs-checkbox-field v-model="isGroupBtn" label="As buttons" switch inline/>
    </div>

    <vs-checkbox-field
        v-model="chGroupValue"
        name="ch1"
        label="Checkbox 1"
        value="1"
        unchecked-value="0"
        :inline="isGroupInline"
        :reverse="isGroupReverse"
        :button="isGroupBtn"/>
    <vs-checkbox-field
        v-model="chGroupValue"
        name="ch1"
        label="Checkbox 2"
        value="2"
        unchecked-value="0"
        :inline="isGroupInline"
        :reverse="isGroupReverse"
        :button="isGroupBtn"/>
    <vs-checkbox-field
        v-model="chGroupValue"
        name="ch1"
        label="Checkbox 3"
        value="3"
        unchecked-value="0"
        :inline="isGroupInline"
        :reverse="isGroupReverse"
        :button="isGroupBtn"/>
    <vs-checkbox-field
        v-model="chGroupValue"
        name="ch1"
        label="Checkbox 4"
        value="4"
        unchecked-value="0"
        :inline="isGroupInline"
        :reverse="isGroupReverse"
        :button="isGroupBtn"
        disabled/>
    <br/>
    <button class="btn btn-primary mt-3" @click="setChGroupValue('2')">Set value: 2</button>
    <hr/>
    v-model value: <code>{{ printVar(chGroupValue) }}</code>
    <hr/>
    <p>You can use an array as a <code>v-model</code> and then the checkbox values will accumulate.</p>
    <vs-checkbox-field v-model="chGroupArrValue" label="Apple" value="Apple"/>
    <vs-checkbox-field v-model="chGroupArrValue" label="Banana" value="Banana"/>
    <vs-checkbox-field v-model="chGroupArrValue" label="Lemon" value="Lemon"/>
    <button class="btn btn-primary mt-3" @click="setChGroupArrValue(['Banana', 'Lemon'])">
      Set value: ["Banana", "Lemon"]
    </button>
    <hr/>
    v-model value: <code>{{ printVar(chGroupArrValue) }}</code>
  </ExampleTabsCard>
</template>
<script setup lang="ts">
import ExampleTabsCard from "../../../components/ExampleTabsCard.vue"
import {VsCheckboxField} from "@lib"
import {computed, ref} from "vue"
import useDump from "../../../composables/useDump"

const {printVar} = useDump()

const isDisabled = ref(false)
const isSwitches = ref(false)
const isGroupInline = ref(false)
const isGroupReverse = ref(false)
const isGroupBtn = ref(false)

const ch1 = ref<boolean | null>(true)
const ch2 = ref<boolean | null>(null)
const chGroupValue = ref("1")
const chGroupArrValue = ref<string[]>([])

const setCh1Value = (value: boolean | null) => {
    ch1.value = value
}
const setCh2Value = (value: boolean | null) => {
    ch2.value = value
}

const setChGroupValue = (value: string) => {
    chGroupValue.value = value
}

const setChGroupArrValue = (value: string[]) => {
    chGroupArrValue.value = value
}

const exampleCode = computed(() => {
    const disabledAttr = isDisabled.value ? " disabled" : ""
    const inlineAttr = isGroupInline.value ? " inline" : ""
    return `<vs-checkbox-field label="Checkbox 1"${disabledAttr}/>
<vs-checkbox-field label="Checkbox 2" allow-null${disabledAttr}/>

// Group
<vs-checkbox-field v-model="value" name="ch1" label="Checkbox 1" value="1" unchecked-value="0"${inlineAttr}/>
<vs-checkbox-field v-model="value" name="ch1" label="Checkbox 2" value="2" unchecked-value="0"${inlineAttr}/>
<vs-checkbox-field v-model="value" name="ch1" label="Checkbox 3" value="3" unchecked-value="0"${inlineAttr}/>
<vs-checkbox-field v-model="value" name="ch1" label="Checkbox 4" value="4" unchecked-value="0"${inlineAttr} disabled/>
`
})
</script>