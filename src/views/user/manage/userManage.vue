<template>
    <div class="staff-manage">
        <el-card>
            <div class="export">
                <ExportToModal />
            </div>
            <m-table
                :data="data"
                :options="options"
                :rowOperation="rowOperation"
                :pageOptions="pageOptions"
                :currentPage="currentPage"
                :pageSize="pageSize"
                :total="total"
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
            </m-table>
        </el-card>
        <RolesModal v-model:visible="visible" />
    </div>
</template>
<script lang='ts' setup>
import { onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { getUserList } from '@/api/user';
import { TableOption } from '@/types/component';
import { msgSuccess } from '@/utils/notice';
import { formatTimeStamp } from '@/utils/moment';
import ExportToModal from './component/export2Modal.vue';
import RolesModal from './component/rolesModal.vue';
import { PageEnum } from '@/enums/pageEnum'
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
const visible = ref<boolean>(false)
const data = ref<any[]>([])
const rowOperation = ref<string>('')
const total = ref<number>(0)
const currentPage = ref<number>(1)
const pageSize = ref<number>(5)
const pageOptions = {
    pageSizes: [1, 2, 3, 4, 5],
    layout: 'total, sizes, prev, pager, next, jumper',
}
const router = useRouter()
const onPageSizeChange = (val: number) => { pageSize.value = val }
const onCurrentPageChange = (val: number) => { currentPage.value = val }

const handleRowRole = (scope: any) => { rowOperation.value = 'role', visible.value = true }
const handleRowCheck = (scope: any) => {
    rowOperation.value = 'check'
    router.push(`${PageEnum.USER_INFO}/${scope.row._id}`)
}
const handleRowDelete = (scope: any) => { rowOperation.value = 'delete' }
const _getUserList = async (pageSize: number, currentPage: number) => {
    const res = await getUserList({ pageSize, currentPage });
    const { list, total: count } = res.data
    data.value = list
    total.value = count
    msgSuccess(`页码:${currentPage},页大小:${pageSize}`)
}

watch(() => [pageSize.value, currentPage.value], ([newSize, newPage]) => {
    _getUserList(newSize, newPage)
})
onMounted(() => {
    _getUserList(pageSize.value, currentPage.value)
})
</script>
<style lang='scss' scoped>
@use '@/styles/tools/mixin/BEM' as *;
@include b(staff-manage) {
    padding: 10px;
    .export {
        display: flex;
        padding-bottom: 10px;
        justify-content: flex-end;
    }
}
</style>