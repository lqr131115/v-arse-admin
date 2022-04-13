<template>
    <div class="role">
        <el-card>
            <m-table :options="options" :data="data" type="index">
                <template #action="{ scope }">
                    <el-button type="primary" @click="handleRowAssignPermission(scope)" size="small">{{
                        $t('buttons.assignPermission')
                    }}</el-button>
                </template>
            </m-table>
        </el-card>
        <PermissionModal v-model:visible="visible" />
    </div>
</template>
<script lang='ts' setup>
import { onMounted, ref } from 'vue'
import { useTableData } from './hooks'
import { Role } from '@/mock/model';
import { getRoleList } from '@/api/role'
import { TableOption } from '@/types/component';
import PermissionModal from './component/permissionModal.vue';

const data = ref<Role[]>([])
const visible = ref<boolean>(false)
const rowOperation = ref<string>('')
const options: TableOption[] = [
    {
        label: '角色名称',
        prop: 'name',
    },
    {
        label: '角色等级',
        prop: 'level',
    },
    {
        label: '角色描述',
        prop: 'desc',
    },
    {
        label: '操作',
        prop: 'action',
        action: true
    }
]
const handleRowAssignPermission = (scope: any) => { rowOperation.value = 'assignPermission', visible.value = true }
const _getRoleList = async () => {
    const res = await getRoleList()
    data.value = useTableData(res.data)
}
onMounted(() => {
    _getRoleList()
})
</script>
<style lang='scss' scoped>
@use '@/styles/tools/mixin/BEM' as *;

@include b(role) {
    padding: 10px;
}
</style>