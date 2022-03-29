<script setup lang="ts">
</script>

<template>
  <div class="error">
    <img class="error__401" src="@/assets/401_images/401.gif" alt="401" />
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/tools/mixin/BEM' as *;
@use '@/styles/tools/mixin/box-center' as *;
@use '@/styles/tools/mixin/sprite-spirit' as *;
@include b(error) {
  @include box-center(center, center);
  @include dimensions(100%, 100%);
  @include e(401) {
    @include dimensions(50%, 60%);
  }
}
</style>
