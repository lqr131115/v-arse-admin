<template>
    <el-card class="card" :body-style="{ padding: '0px' }">
        <template v-for="item in getDropMenuList" :key="item.icon">
            <el-row
                class="card__item"
                :class="{ 'is-disabled': item.disabled }"
                align="middle"
                @click="handleClick(item.event)"
            >
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
import { onMounted, PropType } from 'vue'
import { RouteLocationNormalized } from 'vue-router'
import { useTabDropdown } from './useTabDropdown'
const emits = defineEmits(['event'])
const props = defineProps({
    item: {
        type: Object as PropType<RouteLocationNormalized>,
        default: null,
    },
})
const handleClick = (event: any) => {
    emits('event', event)
}
const { getDropMenuList, handleContextMenu } = useTabDropdown()

onMounted(() => {
    props.item && handleContextMenu(props.item)
})
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
    .is-disabled {
        cursor: not-allowed;
        color: #c0c4cc;
    }
}
.text {
    font-size: 14px;
}

.item {
    padding: 18px 0;
}
</style>