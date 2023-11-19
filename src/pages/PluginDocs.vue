<template>
  <h1>Plugin</h1>
  <p class="text-body-secondary">You can globally set locale, animation and other options with Vuestrap plugin.</p>

  <ExampleTabsCard title="Install" section-id="install">
    You can install Vuestrap plugin with the code below and set globally different options instead of setting this options in every component declaration.
    <highlightjs
        class="mt-2"
        language="js"
        :code="installExampleCode"
    />
  </ExampleTabsCard>

  <ExampleTabsCard title="Locale" section-id="locale">
    Vuestrap provides multiple locales out of the box. You can enable one of them using code below.
    <highlightjs
        class="mt-2 mb-2"
        language="js"
        :code="localeExampleCode"
    />
  </ExampleTabsCard>

  <ExampleCard title="Options" section-id="options">
    <PluginOptionsTable />
  </ExampleCard>
</template>
<script setup lang="ts">
import ExampleTabsCard from "../components/ExampleTabsCard.vue"
import ExampleCard from "../components/ExampleCard.vue"
import PluginOptionsTable from "./plugin/PluginOptionsTable.vue"

const installExampleCode = `import { VuestrapPlugin } from "vuestrap-b5"

createApp(App)
.use(VuestrapPlugin, {
  ...options
})
.mount("#app")`

const localeExampleCode = `import { ruRULocale, VuestrapPlugin } from "vuestrap-b5"

createApp(App)
.use(VuestrapPlugin, {
  locale: ruRULocale
})
.mount("#app")`
</script>