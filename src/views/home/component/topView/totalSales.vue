<template>
  <c-common-card title="累计销售额" value="￥ 12,332,122">
    <template #chart>
      <div class="compare-wrapper">
        <div class="compare">
          <span>日同比</span>
          <span class="emphasis">67.6%</span>
          <div class="increase" />
        </div>
        <div class="compare">
          <span>月同比</span>
          <span class="emphasis">77.2%</span>
          <div class="decrease" />
        </div>
      </div>
    </template>
    <template #footer>
      <span>昨日销售额&nbsp;</span>
      <span class="emphasis">￥32,123</span>
    </template>
  </c-common-card>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.compare-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .compare {
    display: flex;
    align-items: center;
    font-size: 12px;
    margin-top: 3px;
    color: #666;
  }
}
</style>



