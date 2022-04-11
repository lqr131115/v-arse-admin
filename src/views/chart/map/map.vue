<template>
    <div class="map">
        <div class="map__container">
            <el-row :gutter="10">
                <el-col :span="19">
                    <MapChart />
                </el-col>
                <el-col :span="5">
                    <MonthIncrease mb10/>
                    <HotSearch />
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script lang='ts' setup>
import HotSearch from './component/hotSearch.vue'
import MapChart from './component/mapChart.vue'
import MonthIncrease from './component/monthIncrease.vue'
</script>
<style lang='scss' scoped>
@use '@/styles/tools/mixin/BEM'as *;

@include b(map) {
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