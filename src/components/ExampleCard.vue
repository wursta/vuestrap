<template>
  <section class="card border-0 mb-4">
    <div class="card-body">
      <h2 :id="sectionId" class="card-title h3">
        {{ title }}
<!--        <a class="anchor-link" :href="'#' + route.fullPath + '/' + sectionId">#</a>-->
      </h2>
      <div class="card-text">
        <div class="mt-4">
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  title: string
  sectionId: string
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