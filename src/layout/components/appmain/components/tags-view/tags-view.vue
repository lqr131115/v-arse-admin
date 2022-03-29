<template>
    <div class="view" v-if="getTagViewList && getTagViewList.length">
        <el-tag
            v-for="tag in getTagViewList"
            :key="tag.path"
            class="view__tag"
            closable
            hit
            mr5
            :effect="tag.path === $route.path ? 'dark' : 'plain'"
            @close="handleClose(tag.path)"
            @click="handleClick(tag.path)"
            @contextmenu.prevent="onContextMenu"
        >{{ tag.title }}</el-tag>
        <el-button @click="onClear" size="small">清除</el-button>
    </div>
    <ContextMenu v-show="visible" :style="contextMenuStyle" />
</template>
<script lang='ts' setup>
import { ref } from 'vue';
import { useConfig } from '@/hooks';
import { useAppStore } from '@/store/app';
import { useRouter } from 'vue-router';
import ContextMenu from './context-menu.vue'
interface IContextMenuStyle {
    left: string,
    top: string,
    [key: string]: string
}
const { getTagViewList } = useConfig()
const router = useRouter()
let visible = ref<boolean>(false)
let contextMenuStyle = ref<IContextMenuStyle>({ left: '0px', top: '0px', position: 'absolute' })
const onClear = () => {
    const appStore = useAppStore()
    appStore.setTagViewList([])
}
const handleClose = (path: string) => {
    console.log('path', path);
}
const handleClick = (path: string) => { router.push(path) }
let timer: any;
const onContextMenu = (e: PointerEvent) => {
    if (visible.value) {
        visible.value = false
    }
    if (timer) {
        clearTimeout(timer)
    }
    timer = setTimeout(() => {
        const { x, y } = e
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
    @include e(tag) {
        cursor: pointer;
        border-radius: 0;
    }
}
</style>