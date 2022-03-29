<template>
    <el-tooltip effect="dark" :content="$t('header.search')" v-if="!show">
        <svg-icon name="search" style="font-size: 1.3em;" @click.stop="onClick"></svg-icon>
    </el-tooltip>
    <el-select
        v-if="show"
        v-model="selectValue"
        v-focus
        ref="searchSelectRef"
        class="search__select"
        filterable
        remote
        clearable
        default-first-option
        :remote-method="remoteMethod"
        @change="onChange"
        mh10
    >
        <template #prefix>
            <el-icon>
                <search />
            </el-icon>
        </template>
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
    </el-select>
</template>

<script lang='ts' setup>
import { watch, ref, computed} from 'vue'
import { useRouter } from 'vue-router';
import { ElSelect } from 'element-plus';
import { generateRoutes, initFuse } from './fues'
import { filterRoutes } from '@/utils/route'

interface ListItem {
    value: string
    label: string
}
const options = ref<ListItem[]>([])
const selectValue = ref<string>('')
const searchSelectRef = ref<InstanceType<typeof ElSelect>>()
let show = ref<boolean>(false)
const router = useRouter()
const searchPool = computed(() => generateRoutes(filterRoutes(router.getRoutes())))
let fuse = initFuse(searchPool.value)
const onChange = (path: string) => { router.push(path) }
const onClick = () => {
    show.value = !show.value
}
const onClose = () => {
    searchSelectRef.value?.blur()
    selectValue.value = ''
    show.value = false
    options.value = []
}
const remoteMethod = (query: string) => {
    if (!query.trim()) {
        options.value = []
    } else {
        options.value = fuse.search(query).map((d) => {
            return { value: d.item.path, label: d.item.title.join('/') }
        })
    }
}
watch(() => show.value, (newVal) => {
    if (newVal) {
        document.body.addEventListener('click', onClose)
    } else {
        document.body.removeEventListener('click', onClose)
    }
})
</script>
<style lang='scss' scoped>
@use '@/styles/tools/mixin/BEM' as *;
@include b(search) {
    display: flex;
    align-items: center;
}
</style>