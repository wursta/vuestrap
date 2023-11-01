<template>
  <ul class="nav nav-tabs" role="tablist">
    <li v-for="(tab, i) in tabs" :key="`tab_${i}`" class="nav-item" role="presentation">
      <button v-if="!tab.titleComponent" class="nav-link" :class="{'active': tab.active}">
        {{ tab.title }}
      </button>
      <component :is="tab.titleComponent" v-else :active="tab.active"></component>
    </li>
  </ul>
  <div class="tab-content">
    <slot/>
  </div>
</template>

<script lang="ts" setup>
import {provide, ref} from "vue"

const tabs = ref([])
provide("tabs-list", tabs)
</script>