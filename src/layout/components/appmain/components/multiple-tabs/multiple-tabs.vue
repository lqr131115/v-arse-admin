<template>
    <div class="view">
        <el-tag
            v-for="tab in getTabList"
            :key="tab.path"
            :effect="tab.path === $route.path ? 'dark' : 'plain'"
            hit
            closable
            mr5
            class="view__tab"
            @close="handleClose(tab)"
            @click="handleClick(tab)"
            @contextmenu.prevent="(e: PointerEvent) => { handleContext(e, tab) }"
        >{{ tab.title }}</el-tag>
    </div>
    <ContextMenu v-if="visible" :style="contextMenuStyle" :item="currItem" @hide="onHide" />
</template>
<script lang='ts' setup>
import { ref, watch } from 'vue';
import { useRouter, RouteLocationNormalized } from 'vue-router';
import { useTabs } from '@/hooks';
import ContextMenu from './context-menu.vue';
interface IContextMenuStyle {
    left: string,
    top: string,
    [key: string]: string
}
const router = useRouter()
const { closeTab } = useTabs()
const { getTabList } = useTabs()
let visible = ref<boolean>(false)
let currItem = ref<RouteLocationNormalized>()
let contextMenuStyle = ref<IContextMenuStyle>({ left: '0px', top: '0px', position: 'absolute' })
const onHide = () => { visible.value = false }
const handleClose = (tab: any) => { closeTab(tab) }
const handleClick = (tab: any) => { router.push(tab.path) }

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
watch(() => visible.value, (newVal) => {
    if (newVal) {
        document.body.addEventListener('click', onHide)
    } else {
        document.body.removeEventListener('click', onHide)
    }
})
</script>
<style lang='scss' scoped>
@use '@/styles/tools/mixin/BEM' as *;
@include b(view) {
    display: flex;
    padding: 5px;
    border-bottom: 1px solid #eee;
    @include e(tab) {
        cursor: pointer;
        border-radius: 0;
    }
}
</style>