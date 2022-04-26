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
                    <el-tag v-for="r in scope.row.role" :key="r.id" mr5>{{ $t(`role.${r.name}`) }}</el-tag>
                </template>
                <template #open-time="{ scope }">
                    <span>{{ formatTimeStamp(scope.row.openTime) }}</span>
                </template>
                <template #action="{ scope }">
                    <el-button type="info" @click="handleRowCheck(scope)" size="small">查看</el-button>
                    <el-button type="primary" plain @click="handleRowRole(scope)" size="small" v-auth="[C.ROLE_ASSIGN_NAME]">角色</el-button>
                    <el-button type="danger" @click="handleRowDelete(scope)" size="small" v-auth="[C.DELETE_USER_NAME]" >删除</el-button>
                </template>
            </m-table>
        </el-card>
        <RolesModal v-model:visible="visible" :id="userId" :role="rowRole" />
    </div>
</template>
<script lang='ts' setup>
import { onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { getUserList } from '@/api/user';
import { TableOption } from '@/types/component';
import { msgSuccess } from '@/utils/notice';
import { formatTimeStamp } from '@/utils/moment';
import { PageEnum } from '@/enums/pageEnum'
import { Role } from '@/mock/model';
import * as C from '@/auth/constants'
import ExportToModal from './component/export2Modal.vue';
import RolesModal from './component/rolesModal.vue';
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
const userId = ref<string>('')
const rowRole = ref<string[]>([])
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

const handleRowRole = (scope: any) => {
    rowOperation.value = 'role'
    userId.value = scope.row.id
    rowRole.value = (scope.row.role || []).map((r: Role) => r.name)
    visible.value = true
}
const handleRowCheck = (scope: any) => {
    rowOperation.value = 'check'
    router.push(`${PageEnum.USER_INFO}/${scope.row.id}`)
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

// 保证rolesModal关闭后 每次再打开都会触发rolesModal中props.id的watch
// watch(() => visible.value, (newVal: boolean) => {
//     if (!newVal) {
//         userId.value = ''
//         rowRole.value = []
//     }
// })
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