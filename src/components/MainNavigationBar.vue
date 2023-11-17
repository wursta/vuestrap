<template>
  <header class="navbar navbar-expand-lg sticky-top bg-body-tertiary vsdocs-main-navbar">
    <div class="container">
      <span class="navbar-brand pe-xl-2 me-4">
        <VuestrapLogo/>
      </span>
      <div class="me-auto"></div>
      <LighDarkModeSwitcher/>
      <ContentSidebarToggler />
    </div>
  </header>
</template>
<script setup lang="ts">
import LighDarkModeSwitcher from "./LighDarkModeSwitcher.vue"
import VuestrapLogo from "./VuestrapLogo.vue"
import ContentSidebarToggler from "./ContentSidebarToggler.vue"
</script>