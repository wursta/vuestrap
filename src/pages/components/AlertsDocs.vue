<template>
  <h1>Alerts</h1>
  <h2>Variants</h2>
  <div class="mb-2">
    <div v-for="variant in variants" :key="variant" class="form-check form-check-inline">
      <input
          :id="'alert-example-variant-' + variant"
          v-model="currentVariant"
          class="form-check-input"
          type="radio"
          name="variant"
          :value="variant">
      <label class="form-check-label" :for="'alert-example-variant-' + variant">
        {{ variant }}
      </label>
    </div>
  </div>
  <vs-alert :variant="currentVariant">A simple {{ currentVariant }} alert—check it out!</vs-alert>

  <h2>Visibility</h2>
  <div class="form-check">
    <input id="alert-visibility" v-model="isVisible" class="form-check-input" type="checkbox">
    <label class="form-check-label" for="alert-visibility">Is visible</label>
  </div>
  <vs-alert :show="isVisible" variant="danger">It's danger!</vs-alert>

  <h3>v-model:show</h3>
  <div class="form-check">
    <input id="alert-visibility-model" v-model="isVisibleModel" class="form-check-input" type="checkbox">
    <label class="form-check-label" for="alert-visibility-model">Is visible</label>
  </div>
  <vs-alert v-model:show="isVisibleModel" variant="info">Some info...</vs-alert>

  <h2>Dismissing</h2>
  <button v-if="!show" class="btn btn-primary" @click="showDismissedAlert">Show alert again</button>
  <vs-alert v-model:show="show" variant="danger" close-btn-title="Ok, close it" dismissible>
    Holy guacamole! You should check in on some of those fields below.
  </vs-alert>
  <pre>
    <code>show prop: {{ show }}</code>
  </pre>

  <h2>Animate</h2>
  <div class="form-check">
    <input id="alert-animate" v-model="animate" class="form-check-input" type="checkbox">
    <label class="form-check-label" for="alert-animate">Use animation</label>
  </div>
  <button v-if="!showAnimated" class="btn btn-primary" @click="showAnimatedAlert">Show alert again</button>
  <vs-alert v-model:show="showAnimated" variant="danger" :animate="animate" dismissible>
    It is alert with fading effect...
  </vs-alert>
</template>

<script setup lang="ts">
import {VsAlert} from "@lib"
import {ref} from "vue"
import useBootstrap from "../../composables/useBootstrap"

const {variants} = useBootstrap()

// Example: Variants
const currentVariant = ref("primary")

// Example: Visibility & v-model:show
const isVisible = ref(true)
const isVisibleModel = ref(true)

// Example: Dismissing
const show = ref(true)
const showDismissedAlert = () => {
    show.value = true
}
// Example: Animate
const showAnimated = ref(true)
const animate = ref(true)
const showAnimatedAlert = () => {
    showAnimated.value = true
}
</script>