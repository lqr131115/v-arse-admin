<script setup lang="ts">
</script>

<template>
  <div class="error">
    <img class="error__cloud" src="@/assets/404_images/404_cloud.png" alt="cloud" />
    <img class="error__404" src="@/assets/404_images/404.png" alt="404" />
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/tools/mixin/BEM' as *;
@use '@/styles/tools/mixin/box-center' as *;
@use '@/styles/tools/mixin/sprite-spirit' as *;
@include b(error) {
  @include box-center(center, center);
  @include dimensions(100%, 100%);
  flex-direction: column;
  @include e(cloud) {
    @include dimensions(100px, 100px);
  }
  @include e(404) {
    @include dimensions(60%, 60%);
  }
}
</style>
