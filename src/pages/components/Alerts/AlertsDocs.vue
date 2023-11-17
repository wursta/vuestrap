<template>
  <h1>Alerts</h1>
  <p class="text-body-secondary">Provide contextual feedback messages for typical user actions.</p>

  <ExampleCard section-id="basic-example" title="Basic example" :code="basicExampleCode">
    <div v-for="variant in variants" :key="variant">
      <vs-alert :variant="variant">A simple {{ variant }} alert—check it out!</vs-alert>
    </div>
  </ExampleCard>

  <ExampleCard section-id="visibility" title="Visibility" :code="visibilityExampleCode">
    You can use the <code>v-model</code> directive to create two-way data bindings on the <code>show</code> prop.
    Useful when you use dismissible because when user closes the alert, your variable will be updated.
    Do not use the show prop when using v-model.
    <div class="mt-2">
      <div class="form-check form-switch">
        <input id="alert-visibility-model" v-model="isVisibleModel" class="form-check-input" type="checkbox">
        <label class="form-check-label" for="alert-visibility-model">Visible</label>
      </div>
      <vs-alert v-model:show="isVisibleModel" variant="info" class="mt-1">
        <h4 class="alert-heading">Well done!</h4>
        <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit
          longer so that you can see how spacing within an alert works with this kind of content.</p>
      </vs-alert>
    </div>
  </ExampleCard>

  <ExampleCard section-id="dismissing" title="Dismissing" :code="dismissingExampleCode">
    Using the dismissible prop it's possible to dismiss any <code>vs-alert</code> inline.
    Enabling this prop will add a close X button.
    Also, you can use the <code>close-btn-title</code> prop to change the title text associated with the dismiss button.
    <div class="mt-2">
      <button v-if="!show" class="btn btn-primary mb-1" @click="showDismissedAlert">Show again</button>
      <vs-alert v-model:show="show" variant="danger" close-btn-title="Ok, close it" dismissible>
        Holy guacamole! You should check in on some of those fields below.
      </vs-alert>
      <hr />
      <div>
        show value: <code>{{ show }}</code>
      </div>
    </div>
  </ExampleCard>

  <ExampleCard section-id="animate" title="Animate" :code="animateExampleCode">
    <div class="form-check form-switch">
      <input id="alert-animate" v-model="animate" class="form-check-input" type="checkbox">
      <label class="form-check-label" for="alert-animate">Use animation</label>
    </div>
    <button v-if="!showAnimated" class="btn btn-primary mb-1" @click="showAnimatedAlert">Show again</button>
    <vs-alert v-model:show="showAnimated" variant="success" :animate="animate" dismissible class="mt-1">
      It is alert with fading effect...or no?
    </vs-alert>
  </ExampleCard>
</template>

<script setup lang="ts">
import {VsAlert} from "@lib"
import {ref} from "vue"
import useBootstrap from "../../../composables/useBootstrap"
import ExampleCard from "../../../components/ExampleCard.vue"

const {variants} = useBootstrap()

const basicExampleCode = `<vs-alert variant="primary">A simple primary alert—check it out!</vs-alert>
<vs-alert variant="secondary">A simple secondary alert—check it out!</vs-alert>
<vs-alert variant="success">A simple success alert—check it out!</vs-alert>
<vs-alert variant="danger">A simple danger alert—check it out!</vs-alert>
<vs-alert variant="warning">A simple warning alert—check it out!</vs-alert>
<vs-alert variant="info">A simple info alert—check it out!</vs-alert>
<vs-alert variant="light">A simple light alert—check it out!</vs-alert>
<vs-alert variant="dark">A simple dark alert—check it out!</vs-alert>`

const visibilityExampleCode = `<vs-alert v-model:show="isVisibleModel" variant="info">
    <h4 class="alert-heading">Well done!</h4>
    <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
</vs-alert>`

const dismissingExampleCode = `<vs-alert v-model:show="show" variant="danger" close-btn-title="Ok, close it" dismissible>
  Holy guacamole! You should check in on some of those fields below.
</vs-alert>`

const animateExampleCode = `<vs-alert v-model:show="show" variant="success" :animate="animate" dismissible>
  It is alert with fading effect...or no?
</vs-alert>`

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