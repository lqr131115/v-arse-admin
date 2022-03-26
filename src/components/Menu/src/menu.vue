
<script setup lang="ts">
import { PropType } from 'vue';
import type { IMenuItem } from '@/types/component';
defineProps({
    data: {
        type: Array as PropType<IMenuItem[]>,
        required: true,
        default: () => []
    },
    router: {
        type: Boolean,
        default: false
    },
    defaultActive: {
        type: String,
        default: '/'
    },
    collapse: {
        type: Boolean,
        default: false
    },
    showPop: {
        type: Boolean,
        default: false
    },
    // 用户自定义name|index|icon|children键值
    name: {
        type: String,
        default: 'name'
    },
    index: {
        type: String,
        default: 'index'
    },
    icon: {
        type: String,
        default: 'icon'
    },
    children: {
        type: String,
        default: 'children'
    },
})
</script>

<template>
    <!--  :default-active="$route.path" -->
    <el-menu
        class="el-menu-vertical-demo"
        :default-active="$route.path"
        :router="router"
        :collapse="collapse"
        v-bind:="$attrs"
    >
        <slot name="logo"></slot>
        <template v-for="item in data" :key="item[index]">
            <el-menu-item v-if="!item[children] || !item[children].length" :index="item[index]">
                <el-icon v-if="item[icon]">
                    <component :is="item[icon]" />
                </el-icon>
                <template v-if="showPop" #title>{{ $t(`route.${item[name]}`) }}</template>
                <span v-if="!showPop">{{ $t(`route.${item[name]}`) }}</span>
            </el-menu-item>
            <el-sub-menu v-if="item[children] && item[children].length" :index="item[index]">
                <template #title>
                    <el-icon v-if="item[icon]">
                        <component :is="item[icon]" />
                    </el-icon>
                    <span>{{ $t(`route.${item[name]}`) }}</span>
                </template>
                <el-menu-item
                    v-for="subItem in item[children]"
                    :index="subItem[index]"
                    :key="subItem[index]"
                >
                    <el-icon v-if="subItem[icon]">
                        <component :is="subItem[icon]" />
                    </el-icon>
                    <span>{{ $t(`route.${subItem[name]}`) }}</span>
                </el-menu-item>
            </el-sub-menu>
        </template>
    </el-menu>
</template>

<style lang="scss" scoped >
.el-menu-vertical-demo {
    height: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
}
</style>
