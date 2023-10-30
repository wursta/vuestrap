<template>
  <h1>Alerts</h1>
  ...
  <h2>Variants</h2>
  <vs-alert v-for="variant in variants" :key="variant" :variant="variant">A simple {{ variant }} alert—check it out!
  </vs-alert>
  ...
  <h2>Dismissing</h2>
  <button v-if="!show" class="btn btn-primary" @click="showAlert">Show alert again</button>
  <div class="form-check">
    <input id="alert-animation" v-model="animate" class="form-check-input" type="checkbox">
    <label class="form-check-label" for="alert-animation">
      Animate?
    </label>
  </div>
  <vs-alert v-model:show="show" variant="danger" :animate="animate" dismissible>
    Holy guacamole! You should check in on some of those fields below.
  </vs-alert>
  ...
  <h2>Locale</h2>

</template>

<script setup lang="ts">
import {VsAlert} from "@lib"
import {ref} from "vue"
import useBootstrap from "../../composables/useBootstrap"

// Variants
const {variants} = useBootstrap()

// Dismissing
const show = ref(true)
const animate = ref(true)
const showAlert = () => {
    show.value = true
}
</script>