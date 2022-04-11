<template>
  <div class="home">
    <div class="home__container">
      <TopView />
      <SalesView />
      <BottomView />
    </div>
  </div>
</template>
<script lang='ts' setup>
import TopView from './component/topView/topView.vue';
import SalesView from './component/salesView/salesView.vue';
import BottomView from './component/bottomView/bottomView.vue';
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

<style lang="scss">
.header-title {
  font-size: 14px;
  font-weight: bold;
}

.header-wrapper {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}
</style>