<template>
  <table class="table table-bordered table-striped">
    <thead>
    <tr>
      <th>Option</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>variant</td>
      <td><code>String</code></td>
      <td>Bootstrap color variant. Primary, secondary, info etc.</td>
    </tr>
    <tr>
      <td>show</td>
      <td><code>Boolean</code></td>
      <td>Show/Hide flag. May be used with <code>v-model:show</code> directive.</td>
    </tr>
    <tr>
      <td>dismissible</td>
      <td><code>Boolean</code></td>
      <td>When set, enables the dismiss close button</td>
    </tr>
    <tr>
      <td>close-btn-title</td>
      <td><code>String</code></td>
      <td>Close button title text</td>
    </tr>
    <AnimatePropsRows />
    </tbody>
  </table>
</template>
<script setup lang="ts">
import AnimatePropsRows from "../AnimatePropsRows.vue"
</script>