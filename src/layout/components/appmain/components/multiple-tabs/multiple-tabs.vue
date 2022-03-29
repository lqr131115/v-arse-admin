<template>
    <div class="view" v-if="showMultipleTabs">
        <el-tag
            v-for="(tab, index) in getTabList"
            :key="tab.path"
            class="view__tab"
            style="cursor: pointer;"
            :closable="index !== 0"
            hit
            mr5
            :effect="tab.path === $route.path ? 'dark' : 'plain'"
            @close="handleClose"
            @click="handleClick(tab.path)"
            @contextmenu.prevent="(e: PointerEvent) => { handleContext(e, tab) }"
        >{{ tab.title }}</el-tag>
        <el-button @click="onClear">清除</el-button>
    </div>
    <ContextMenu v-if="visible" :style="contextMenuStyle" :item="currItem" @event="handleEvent" />
</template>
<script lang='ts' setup>
import { ref } from 'vue';
import { useRouter, RouteLocationNormalized } from 'vue-router';
import { MenuEventEnum } from '../type';
import ContextMenu from './context-menu.vue';
import { useTabDropdown } from './useTabDropdown';
import { useConfig } from '@/hooks';
import { useAppStore } from '@/store/app';
interface IContextMenuStyle {
    left: string,
    top: string,
    [key: string]: string
}
const router = useRouter()
const { showMultipleTabs, getTabList } = useConfig()
const { handleMenuEvent } = useTabDropdown()
let visible = ref<boolean>(false)
let currItem = ref<RouteLocationNormalized>()
let contextMenuStyle = ref<IContextMenuStyle>({ left: '0px', top: '0px', position: 'absolute' })
const onClear = () => {
    const appStore = useAppStore()
    appStore.setTabList([])
}
const handleClose = () => { handleEvent(MenuEventEnum.CLOSE_CURRENT) }
const handleClick = (path: string) => { router.push(path) }
const handleEvent = (event: string | number) => { event && handleMenuEvent(event) }

let timer: any;
const handleContext = (e: PointerEvent, tabItem: RouteLocationNormalized) => {
    if (visible.value) {
        visible.value = false
    }
    if (timer) {
        clearTimeout(timer)
    }
    timer = setTimeout(() => {
        const { x, y } = e
        currItem.value = tabItem
        contextMenuStyle.value!.left = `${x}px`
        contextMenuStyle.value!.top = `${y}px`
        visible.value = true
    }, 100)
}
</script>
<style lang='scss' scoped>
@use '@/styles/tools/mixin/BEM' as *;
@include b(view) {
    display: flex;
    padding: 5px;
    border-bottom: 1px solid #eee;
    @include e(tab) {
        border-radius: 0;
    }
}
</style>