<template>
  <ExampleTabsCard title="Input-based fields" section-id="input-based-fields" :code="exampleCode">
    <p>Create simple input-based fields using <code>vs-text-field</code> component.
      The default input type is <code>text</code>, but you can change it using the <code>input-type</code> prop.
    </p>
    <p>Use the <code>label</code> prop to specify a label, or leave it empty and the label tag will not be rendered.</p>
    <p>Also, you can set <code>floating-label</code> prop to enable floating label for your input.
      Do not forget, that bootstrap requires <code>placeholder</code> attribute for floating labels correct work.
    </p>
    <p>
      <strong>Any attribute you set on <code>vs-text-field</code> will be applied to input element</strong>.
      So, for example, you can create <code>number</code> field with min and max attributes simply apply them to <code>vs-text-field</code>
    </p>
    <div class="form-check form-switch mb-3">
      <input id="floating-label-option" v-model="isFloatingLabel" class="form-check-input" type="checkbox">
      <label class="form-check-label" for="floating-label-option">Floating labels</label>
    </div>
    <div class="form-check form-switch mb-3">
      <input id="disabled-option" v-model="isDisabled" class="form-check-input" type="checkbox">
      <label class="form-check-label" for="disabled-option">Disable email field</label>
    </div>
    <div class="form-check form-switch mb-3">
      <input id="readonly-option" v-model="isReadonly" class="form-check-input" type="checkbox">
      <label class="form-check-label" for="readonly-option">Readonly email field</label>
    </div>
    <div v-if="isReadonly" class="form-check form-switch mb-3">
      <input id="plaintext-option" v-model="isPlainText" class="form-check-input" type="checkbox">
      <label class="form-check-label" for="plaintext-option">Plaintext email field</label>
    </div>
    <div class="mb-3">
      <vs-text-field
          v-model="emailValue"
          :floating-label="isFloatingLabel"
          :disabled="isDisabled"
          :readonly="isReadonly"
          :plain-text="isPlainText"
          label="Email type"
          input-type="email"
          placeholder="Enter email"
      />
    </div>

    <p>You can set the <code>form text</code> using a <code>hint</code> prop or slot with same name.</p>
    <div class="mb-3">
      <vs-text-field label="Password" input-type="password" :floating-label="isFloatingLabel" placeholder="Enter password" hint="Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji." />
    </div>
    <div class="mb-3">
      <vs-text-field label="Price" input-type="number" :floating-label="isFloatingLabel" placeholder="Enter price"/>
    </div>
    <div class="mb-3">
      <vs-text-field label="Date" input-type="date" :floating-label="isFloatingLabel" placeholder="Enter date"/>
    </div>
    <div class="mb-3">
      <vs-text-field label="Time" input-type="time" :floating-label="isFloatingLabel" placeholder="Enter time"/>
    </div>
    <div class="mb-3">
      <vs-text-field label="Color" input-type="color" class="form-control form-control-color"/>
    </div>
  </ExampleTabsCard>
</template>

<script lang="ts" setup>
import ExampleTabsCard from "../../../components/ExampleTabsCard.vue"
import {VsTextField} from "@lib"
import {computed, ref} from "vue"

const emailValue = ref(null)
const isFloatingLabel = ref(false)
const isDisabled = ref(false)
const isReadonly = ref(false)
const isPlainText = ref(false)

const exampleCode = computed(() => {
    const floatingLabelSuffixStr = isFloatingLabel.value ? " placeholder=\"Enter...\" floating-label" : ""
    const dissabledSuffixStr = isDisabled.value ? " disabled" : ""
    const readonlySuffixStr = isReadonly.value ? " readonly" : ""
    return `<vs-text-field label="Email address" input-type="email"${floatingLabelSuffixStr}${dissabledSuffixStr}${readonlySuffixStr}/>

<vs-text-field label="Password" input-type="password" hint="Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji."${floatingLabelSuffixStr}/>

<vs-text-field label="Date" input-type="date"${floatingLabelSuffixStr}/>

<vs-text-field label="Time" input-type="time"${floatingLabelSuffixStr}/>

<vs-text-field label="Color" input-type="color" class="form-control form-control-color"/>`
})

</script>