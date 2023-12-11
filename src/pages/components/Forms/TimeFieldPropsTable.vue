<template>
  <table class="table table-bordered table-striped caption-top">
    <caption><code>vs-time-field</code> component props</caption>
    <thead>
    <tr>
      <th>Option</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <FormControlPropsRows />
    <InputPropsRows default-input-type-value="time"/>
    </tbody>
  </table>

  <table class="table table-bordered table-striped caption-top">
    <caption><code>vs-time-field</code> component slots</caption>
    <thead>
    <tr>
      <th>Slot name</th>
      <th>Exposed properties</th>
      <th>Description</th>
    </tr>
    </thead>
    <tbody>
      <FormControlSlotsRows />
    </tbody>
  </table>

</template>
<script setup lang="ts">
import FormControlPropsRows from "./FormControlPropsRows.vue"
import InputPropsRows from "./InputPropsRows.vue"
import FormControlSlotsRows from "./FormControlSlotsRows.vue"</script>