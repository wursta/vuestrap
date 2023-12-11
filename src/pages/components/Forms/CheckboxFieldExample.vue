<template>
  <ExampleTabsCard title="Checkbox" section-id="checkboxfield" :code="exampleCode">
    <p>Use <code>vs-checkbox-field</code> to create checkbox field.</p>
    <p>You can add <code>allow-null</code> prop and the checkbox can accept an <code>indeterminate</code> state.</p>
    <p><strong>Be careful</strong>, the prop <code>allow-null</code> does not change the value from null to false, but
      only controls the display of the checkbox null-state.</p>

    <div class="form-check form-switch mb-3">
      <input id="disabled-option" v-model="isDisabled" class="form-check-input" type="checkbox">
      <label class="form-check-label" for="disabled-option">Disabled</label>
    </div>
    <div class="form-check form-switch mb-3">
      <input id="switches-option" v-model="isSwitches" class="form-check-input" type="checkbox">
      <label class="form-check-label" for="switches-option">Switch mode</label>
    </div>

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
    Checkbox 1 v-model value: <code>{{ ch1String }}</code>
    <br/>
    Checkbox 2 v-model value: <code>{{ ch2String }}</code>
    <hr/>
    <p>You can create checkbox group with same name and different value using prop <code>value</code>.
    If you want, you can set prop <code>unchecked-value</code> to specify unchecked value (by default: <code>undefined</code>).</p>
    <p>Also, you can set prop <code>inline</code> to arrange checkboxes in one line or <code>button</code> to render checkboxes as buttons.</p>

    <div class="form-check form-switch mb-3">
      <input id="inline-option" v-model="isGroupInline" class="form-check-input" type="checkbox">
      <label class="form-check-label" for="inline-option">Inline</label>
    </div>

    <div class="form-check form-switch mb-3">
      <input id="reverse-option" v-model="isGroupReverse" class="form-check-input" type="checkbox">
      <label class="form-check-label" for="reverse-option">Reverse</label>
    </div>

    <div class="form-check form-switch mb-3">
      <input id="btn-option" v-model="isGroupBtn" class="form-check-input" type="checkbox">
      <label class="form-check-label" for="btn-option">As buttons</label>
    </div>

    <vs-checkbox-field v-model="chGroupValue" name="ch1" label="Checkbox 1" value="1" unchecked-value="0" :inline="isGroupInline" :reverse="isGroupReverse" :button="isGroupBtn"/>
    <vs-checkbox-field v-model="chGroupValue" name="ch1" label="Checkbox 2" value="2" unchecked-value="0" :inline="isGroupInline" :reverse="isGroupReverse" :button="isGroupBtn"/>
    <vs-checkbox-field v-model="chGroupValue" name="ch1" label="Checkbox 3" value="3" unchecked-value="0" :inline="isGroupInline" :reverse="isGroupReverse" :button="isGroupBtn"/>
    <vs-checkbox-field v-model="chGroupValue" name="ch1" label="Checkbox 4" value="4" unchecked-value="0" :inline="isGroupInline"  :reverse="isGroupReverse" :button="isGroupBtn" disabled/>
    <hr/>
    v-model value: <code>{{ chGroupValueString }}</code>
  </ExampleTabsCard>
</template>
<script setup lang="ts">
import ExampleTabsCard from "../../../components/ExampleTabsCard.vue"
import {VsCheckboxField} from "@lib"
import {computed, ref} from "vue"

const isDisabled = ref(false)
const isSwitches = ref(false)
const isGroupInline = ref(false)
const isGroupReverse = ref(false)
const isGroupBtn = ref(false)

const ch1 = ref<boolean | null>(true)
const ch2 = ref<boolean | null>(null)
const chGroupValue = ref("1")

const getCheckboxValueString = (val: boolean | string | number | null | undefined): string => {
    if (val === null) {
        return "null"
    }

    if (val === undefined) {
        return "undefined"
    }

    return val.toString()
}

const ch1String = computed(() => getCheckboxValueString(ch1.value))
const ch2String = computed(() => getCheckboxValueString(ch2.value))
const chGroupValueString = computed(() => getCheckboxValueString(chGroupValue.value))

const setCh1Value = (value: boolean | null) => {
    ch1.value = value
}
const setCh2Value = (value: boolean | null) => {
    ch2.value = value
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