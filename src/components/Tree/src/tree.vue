<template>
    <div class="tree">
        <el-input mb10 v-if="filterable" v-model="keyWord" clearable />
        <el-tree ref="treeRef" :node-key="nodeKey" :show-checkbox="showCheckbox" :data="data" :props="defaultProps"
            :accordion="accordion" :default-expand-all="defaultExpandAll" :filter-node-method="filterNode"
            v-bind="$attrs" @node-click="onNodeClick" @check="onCheck">
            <template v-if="$slots.default" #default="{ node, data }">
                <slot name="default" :scope="{ node, data }"></slot>
            </template>
        </el-tree>
    </div>
</template>
<script lang='ts' setup>
import { ref, watch } from 'vue'
import type { PropType } from 'vue'
import type { TreeProps } from '@/types/component'
import type { ElTree } from 'element-plus'
import type Node from 'element-plus/es/components/tree/src/model/node'


const keyWord = ref<string>('')
const treeRef = ref<InstanceType<typeof ElTree>>()
const emits = defineEmits(['node-click', 'check'])
const props = defineProps({
    data: {
        type: Array as PropType<any[]>,
        default: () => []
    },
    defaultProps: {
        type: Object as PropType<TreeProps>,
        default: () => ({
            children: 'children',
            label: 'label',
        })
    },
    nodeKey: {
        type: String,
        default: 'id'
    },
    showCheckbox: {
        type: Boolean,
        default: false
    },
    defaultExpandAll: {
        type: Boolean,
        default: true
    },
    accordion: {
        type: Boolean,
        default: false
    },
    draggable: {
        type: Boolean,
        default: false
    },
    filterable: {
        type: Boolean,
        default: false
    }
})

const onNodeClick = (data: any, node: Node, e: PointerEvent) => {
    emits('node-click', { data, node, e })
}
const onCheck = (data: any, check: any) => {
    emits('check', { data, check })
}
const filterNode = (value: string, item: any) => {
    if (!value) return true
    const label = props.defaultProps.label as string
    return item[label].includes(value)
}
const setCheckedNodes = () => {
    treeRef.value && treeRef.value.setCheckedNodes([] as Node[], false)
}
defineExpose({
    setCheckedNodes
})
watch(() => keyWord.value, (val) => {
    treeRef.value && treeRef.value.filter(val)
})
</script>
<style lang='scss' scoped>
@use '@/styles/tools/mixin/BEM'as *;

@include b(tree) {
    display: flex;
    flex-direction: column;
}
</style>