<template>
  <div class="d-flex align-items-center">
    <LightModeIcon class="text-emphasis" />
    <div class="form-check form-switch">
      <input v-model="darkModeStore.darkModeEnabled" class="form-check-input" type="checkbox" role="switch">
    </div>
    <DarkModeIcon class="text-emphasis" />
  </div>
</template>

<script lang="ts" setup>
import {useDarkModeStore} from "../stores/DarkModeStore"
import LightModeIcon from "../icons/LightModeIcon.vue"
import DarkModeIcon from "../icons/DarkModeIcon.vue"

const darkModeStore = useDarkModeStore()
</script>