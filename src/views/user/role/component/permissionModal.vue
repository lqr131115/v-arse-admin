<template>
    <m-dialog v-model:visible="visible" width="40%" @close="onClose">
        <template #title>
            <span fz16 fw6>{{ $t('buttons.assignPermission') }}</span>
        </template>
        <template #default>
            <m-tree ref="treeRef" :data="data" :defaultProps="defaultProps" showCheckbox @node-click="onNodeClick"
                @check="onCheck">
            </m-tree>
        </template>
        <template #footer>
            <el-button type="primary" @click="handleConfirm">{{ $t('buttons.confirm') }}</el-button>
        </template>
    </m-dialog>
</template>
<script lang='ts' setup>
import { onMounted, ref } from 'vue'
import { getPermissionList } from '@/api/permission'
import type { TreeProps } from '@/types/component'
import { msgSuccess } from '@/utils/notice';
const emits = defineEmits(['update:visible'])
defineProps({
    visible: {
        type: Boolean,
        default: false
    }
})
type TreeItem = {
    id: string
    name: string
    children?: TreeItem[]
    [key: string]: any
}
const defaultProps: TreeProps = { children: 'children', label: 'name' }
const treeRef = ref<any>(null)
const checkedNodes = ref<any[]>([])
const data = ref<TreeItem[]>([])

const onNodeClick = (arg: any) => {
    // arg: {data, node, e}
}
const onCheck = (arg: any) => {
    const { check } = arg
    checkedNodes.value = check.checkedNodes
}

const _setCheckedNodes = () => {
    treeRef.value && treeRef.value.setCheckedNodes()
}
const onClose = () => {
    _setCheckedNodes()
    emits('update:visible', false)
}
const handleConfirm = () => {
    // TODO 
    msgSuccess(`${genMsg()},调用Api更新...`)
    onClose()
}
const genMsg = (): string => {
    return checkedNodes.value.map((node: any) => node.name).join('|')
}
const _getPermissionList = async () => {
    const res = await getPermissionList()
    data.value = res.data
}
onMounted(async () => {
    _getPermissionList()
})
</script>
<style lang='scss' scoped>
</style>