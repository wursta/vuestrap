<template>
  <h1>Alerts</h1>
  ...
  <h2>Examples</h2>
  <vs-alert variant="primary">A simple secondary alert—check it out!</vs-alert>
  <vs-alert variant="success">A simple success alert—check it out!</vs-alert>
  ...
  <h2>Dismissing</h2>
  <vs-alert variant="danger" dismissible>
    Holy guacamole! You should check in on some of those fields below.
  </vs-alert>

</template>

<script setup lang="ts">
import {VsAlert} from "@lib"</script>