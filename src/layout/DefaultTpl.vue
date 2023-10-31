<template>
<!--  <MainNavigationBar />-->
<!--  <div class="container-xxl bd-gutter mt-3 my-md-4 main-layout">-->
<!--    <aside class="main-layout_sidebar">-->
<!--      <ContentsNavigationBar />-->
<!--    </aside>-->
<!--    <main class="main-layout_center">-->
<!--      <router-view></router-view>-->
<!--    </main>-->
<!--  </div>-->
  <div class="container-fluid">
    <div class="row">
      <div class="col-2">
        <ContentsNavigationBar />
      </div>
      <div class="col">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import MainNavigationBar from "../components/MainNavigationBar.vue"
import ContentsNavigationBar from "../components/ContentsNavigationBar.vue"</script>

<style lang="scss" scoped>
.main-layout {
  display: flex;

  &_sidebar {
    width: 15rem;
  }

  &_center {
    flex: 1
  }
}
</style>