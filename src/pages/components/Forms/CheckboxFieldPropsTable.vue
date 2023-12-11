<template>
  <table class="table table-bordered table-striped caption-top">
    <caption><code>vs-checkbox-field</code> component props</caption>
    <thead>
    <tr>
      <th>Option</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>id</td>
      <td><code>String</code></td>
      <td>Use to set <code>id</code> attribute on <code>input</code> element and <code>for</code> attribute on <code>label</code>
        element
      </td>
    </tr>
    <tr>
      <td class="text-nowrap">model-value <br/><span class="badge bg-info">v-model</span></td>
      <td class="text-nowrap"><code>Boolean</code></td>
      <td>Input value</td>
    </tr>
    <tr>
      <td>label</td>
      <td><code>String</code></td>
      <td>Use to set the content of the generated <code>label</code> element. For customizing you can use default slot
      </td>
    </tr>
    <tr>
      <td class="text-nowrap">allow-null</td>
      <td><code>Boolean</code></td>
      <td>If <code>true</code> add <code>indeterminate</code> attribute to input. Default: false</td>
    </tr>
    </tbody>
  </table>

  <table class="table table-bordered table-striped caption-top">
    <caption><code>vs-checkbox-field</code> component slots</caption>
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
    </tbody>
  </table>

</template>
<script setup lang="ts"></script>