<template>
  <table class="table table-bordered table-striped caption-top">
    <caption><code>vs-range-field</code> component props</caption>
    <thead>
    <tr>
      <th>Option</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <InputFieldPropsRows/>
    <InputPropsRows default-input-type-value="range"/>
    </tbody>
  </table>

  <table class="table table-bordered table-striped caption-top">
    <caption><code>vs-range-field</code> component slots</caption>
    <thead>
    <tr>
      <th>Slot name</th>
      <th>Exposed properties</th>
      <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>default</td>
      <td>&mdash;</td>
      <td>Slot for <code>label</code> content</td>
    </tr>
    <tr>
      <td>hint</td>
      <td>&mdash;</td>
      <td>Slot for <code>form-text</code> content</td>
    </tr>
    </tbody>
  </table>

</template>
<script setup lang="ts">
import InputFieldPropsRows from "./InputFieldPropsRows.vue"
import InputPropsRows from "./InputPropsRows.vue"</script>