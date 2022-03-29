<template>
    <el-card class="card" :body-style="{ padding: '0px' }">
        <template v-for="item in getDropMenuList" :key="item.icon">
            <el-row class="card__item" align="middle">
                <el-col :span="4">
                    <svg-icon :name="item.icon"></svg-icon>
                </el-col>
                <el-col :span="20">
                    <span>{{ item.text }}</span>
                </el-col>
            </el-row>
            <div v-if="item.divider" class="card__divider" />
        </template>
    </el-card>
</template>
<script lang='ts' setup>
import { useTabDropdown } from './useTabDropdown'
const { getDropMenuList } = useTabDropdown()
</script>
<style lang='scss' scoped>
@use '@/styles/tools/mixin/BEM'  as *;
@include b(card) {
    min-width: 180px;
    max-width: 200px;
    z-index: 999;
    @include e(item) {
        padding: 10px;
        cursor: pointer;
        &:hover {
            background-color: #eee;
        }
    }
    @include e(divider) {
        display: block;
        height: 1px;
        width: 100%;
        border-top: 1px solid #dcdfe6;
    }
}
.text {
    font-size: 14px;
}

.item {
    padding: 18px 0;
}
</style>