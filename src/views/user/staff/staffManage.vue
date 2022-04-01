<template>
    <div class="staff-manage">
        <m-table
            :data="data"
            :options="options"
            :rowOperation="rowOperation"
            stripe
            border
            editable
            pagination
            @on-pagesize-change="onPageSizeChange"
            @on-current-page-change="onCurrentPageChange"
        >
            <template #avatar="{ scope }">
                <el-avatar :size="50" :src="scope.row.avatar" />
            </template>
            <template #role="{ scope }">
                <el-tag>{{ scope.row.role[0].title }}</el-tag>
            </template>
            <template #open-time="{ scope }">
                <span>{{ formatTimeStamp(scope.row.openTime) }}</span>
            </template>
            <template #action="{ scope }">
                <el-button type="info" @click="handleRowCheck(scope)" size="small">查看</el-button>
                <el-button type="primary" plain @click="handleRowRole(scope)" size="small">角色</el-button>
                <el-button type="danger" @click="handleRowDelete(scope)" size="small">删除</el-button>
            </template>
            <el-button size="small" type="info">查看</el-button>
            <el-button size="small" type="primary">角色</el-button>
            <el-button size="small" type="danger">删除</el-button>
        </m-table>
    </div>
</template>
<script lang='ts' setup>
import { onMounted, ref } from 'vue';
import { getStaffList } from '@/api/user';
import { TableOption } from '@/types/component';
import { msgSuccess } from '@/utils/notice';
import { formatTimeStamp } from '@/utils/moment';
const options: TableOption[] = [
    {
        label: '用户名',
        prop: 'username',
    },
    {
        label: '电话',
        prop: 'mobile',
    },
    {
        label: '头像',
        prop: 'avatar',
        slot: 'avatar'
    },
    {
        label: '角色',
        prop: 'role',
        slot: 'role'
    },
    {
        label: '开通时间',
        prop: 'openTime',
        slot: 'open-time'
    },
    {
        label: '操作',
        prop: 'action',
        action: true,
        slot: 'action',
    }
]
const data = ref<any[]>([])
const rowOperation = ref<string>('')
const onPageSizeChange = (val: number) => { msgSuccess(`页大小:${val},Api...`) }
const onCurrentPageChange = (val: number) => { msgSuccess(`页码:${val},Api...`) }
const handleRowRole = (scope: any) => { rowOperation.value = 'check' }
const handleRowCheck = (scope: any) => { rowOperation.value = 'role' }
const handleRowDelete = (scope: any) => { rowOperation.value = 'delete' }

onMounted(async () => {
    const res = await getStaffList();
    const { list } = res.data
    if (list) {
        data.value = list
    }
})
</script>
<style lang='scss' scoped>
@use '@/styles/tools/mixin/BEM' as *;
@include b(staff-manage) {
    padding: 10px;
}
</style>