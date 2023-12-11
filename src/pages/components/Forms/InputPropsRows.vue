<template>
  <tr>
    <td class="text-nowrap">model-value <br/><span class="badge bg-info">v-model</span></td>
    <td class="text-nowrap"><code>Number | String</code></td>
    <td>Input value</td>
  </tr>
  <tr>
    <td class="text-nowrap">input-type</td>
    <td><code>String</code></td>
    <td>Input <code>type</code> attribute. Default: <code>{{ defaultInputTypeValue }}</code></td>
  </tr>
  <tr>
    <td class="text-nowrap">plain-text</td>
    <td><code>Boolean</code></td>
    <td>Renders the input to look like plain text (no borders)</td>
  </tr>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
  defaultInputTypeValue?: string
}>(), {
    defaultInputTypeValue: "text"
})
</script>