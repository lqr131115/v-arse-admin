<template>
    <div class="map">
        <div class="map__container">
            <el-row :gutter="10">
                <el-col :span="19">
                    <div class="map__wrapper">
                        <MapChart />
                    </div>
                </el-col>
                <el-col :span="5">
                    <div class="map__section">
                        <MonthIncrease />
                        <HotSearch />
                    </div>
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


    @include e(wrapper) {
        height: 600px;
        width: 100%;
    }

    @include e(section) {
        height: 600px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
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