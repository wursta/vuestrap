<template>
  <table class="table table-bordered table-striped caption-top">
    <caption><code>vs-radio-field</code> component props</caption>
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
      <td class="text-nowrap"><code>Boolean</code> or <code>String</code> or <code>Number</code></td>
      <td>Input value</td>
    </tr>
    <tr>
      <td>label</td>
      <td><code>String</code></td>
      <td>Use to set the content of the generated <code>label</code> element. For customizing you can use default slot
      </td>
    </tr>
    <tr>
      <td>inline</td>
      <td><code>Boolean</code></td>
      <td>Enable inline mode. Default: false</td>
    </tr>
    <tr>
      <td>reverse</td>
      <td><code>Boolean</code></td>
      <td>Enable reverse mode. Default: false</td>
    </tr>
    <tr>
      <td>button</td>
      <td><code>Boolean</code></td>
      <td>Enable buttons mode. Default: false</td>
    </tr>
    <tr>
      <td class="text-nowrap">button-variant</td>
      <td><code>String</code></td>
      <td>Buttons color variant in buttons mode</td>
    </tr>
    <tr>
      <td>value</td>
      <td><code>String</code> or <code>Number</code> or <code>Boolean</code> or <code>null</code> or <code>undefined</code></td>
      <td>Checked checkbox value. Default: true</td>
    </tr>
    <tr>
      <td>strict</td>
      <td><code>Boolean</code></td>
      <td>Enables / Disables a strict mode for checking the checkbox value.when v-model changes. Default: true</td>
    </tr>
    <tr>
      <td class="text-nowrap">wrapper-attrs</td>
      <td><code>Object</code></td>
      <td>Attributes applied to wrapper div (.form-check). It could be <code>class</code> or something else...</td>
    </tr>
    </tbody>
  </table>

  <table class="table table-bordered table-striped caption-top">
    <caption><code>vs-radio-field</code> component slots</caption>
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