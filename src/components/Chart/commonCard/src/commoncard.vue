<template>
  <div class="common-card">
    <div class="title">{{ title }}</div>
    <div class="value">{{ value }}</div>
    <div class="chart">
      <slot name="chart"></slot>
    </div>
    <div class="line" />
    <div class="total">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  title: string,
  value: string
}
withDefaults(defineProps<IProps>(), {
  title: 'title',
  value: 'value'
})
</script>

<style lang="scss" scoped>
.title {
  font-size: 12px;
  color: #999;
}
.value {
  font-size: 25px;
  color: #000;
  margin-top: 5px;
  letter-spacing: 1px;
}
.chart {
  height: 50px;
}
.line {
  margin: 10px 0;
  border-top: 1px solid #eee;
}
.total {
  font-size: 12px;
  color: #666;
}
</style>

<style lang="scss">
.emphasis {
  margin-left: 5px;
  color: #333;
  font-weight: 700;
}
.increase {
  width: 0;
  height: 0;
  border-width: 3px;
  border-color: transparent transparent red transparent;
  border-style: solid;
  margin: 0 0 3px 5px;
}
.decrease {
  width: 0;
  height: 0;
  border-width: 3px;
  border-color: green transparent transparent transparent;
  border-style: solid;
  margin: 3px 0 0 5px;
}
.chart {
  height: 100%;
  width: 100%;
}
</style>