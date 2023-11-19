<template>
  <span class="navbar-toggler d-block d-lg-none ms-3 border-0" type="button" @click="toggleSidebar">
    <span class="navbar-toggler-icon"></span>
  </span>
</template>

<script lang="ts" setup>
import {useContentSidebarStore} from "../stores/ContentSidebarStore"

const contentSidebarStore = useContentSidebarStore()
const toggleSidebar = () => {
    contentSidebarStore.sidebarShow = !contentSidebarStore.sidebarShow
}
</script>