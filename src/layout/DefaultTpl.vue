<template>
  <MainNavigationBar/>
  <div class="container-xxl mt-3 my-md-4 vuestrap-docs-layout">
    <aside class="vuestrap-docs-sidebar">
      <div
          class="offcanvas-lg offcanvas-end"
          :class="{'show': contentSidebarStore.sidebarShow, 'hiding': !contentSidebarStore.sidebarShow}">
        <div class="offcanvas-header border-bottom">
          <h5 class="offcanvas-title">Browse docs</h5>
          <button type="button" class="btn-close" @click="toggleContentSidebar"></button>
        </div>
        <div class="offcanvas-body">
          <ContentsNavigationBar/>
        </div>
      </div>
    </aside>
    <main class="vuestrap-docs-main order-1">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import MainNavigationBar from "../components/MainNavigationBar.vue"
import ContentsNavigationBar from "../components/ContentsNavigationBar.vue"
import {useContentSidebarStore} from "../stores/ContentSidebarStore"

const contentSidebarStore = useContentSidebarStore()
const toggleContentSidebar = () => {
    contentSidebarStore.sidebarShow = !contentSidebarStore.sidebarShow
}
</script>