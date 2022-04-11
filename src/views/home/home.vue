<template>
  <div class="home">
    <div class="home__container">
      <c-top-view></c-top-view>
      <c-sales-view></c-sales-view>
      <c-bottom-view></c-bottom-view>
    </div>  </div>
</template>
<script lang='ts' setup>
</script>
<style lang='scss' scoped>
@use '@/styles/tools/mixin/BEM'as *;

@include b(home) {
  background-color: #eee;

  @include e(container) {
    padding: 10px;
  }
}
</style>