<template>
  <section class="card border-0 mb-4">
    <div class="card-body">
      <h2 :id="sectionId" class="card-title h3">
        {{ title }}
<!--        <a class="anchor-link" :href="'#' + route.fullPath + '/' + sectionId">#</a>-->
      </h2>
      <div class="card-text">
        <div class="mt-4">
          <vs-tabs class="mb-3">
            <vs-tab active>
              <template #titleText>
                <div class="d-flex align-items-center">
                  <EyeIcon class="me-1"/>
                  Preview
                </div>
              </template>
              <slot />
            </vs-tab>
            <vs-tab v-if="code" title="Code">
              <template #titleText>
                <div class="d-flex align-items-center">
                  <CodeIcon class="me-1"/>
                  Code
                </div>
              </template>
              <div style="position: relative">
                <highlightjs
                    language="xml"
                    :code="code"
                />
              </div>
            </vs-tab>
          </vs-tabs>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {VsTab, VsTabs} from "@lib"
import EyeIcon from "../icons/EyeIcon.vue"
import CodeIcon from "../icons/CodeIcon.vue"

interface Props {
  title: string
  sectionId: string
  code?: string
}

defineProps<Props>()
</script>

<style lang="scss">
.anchor-link {
  opacity: 0;
  text-decoration: none
}

.card-title:hover {
  .anchor-link {
    opacity: 1;
    transition: opacity 0.25s ease-out;
  }
}
</style>