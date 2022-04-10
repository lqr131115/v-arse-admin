<template>
    <m-dialog v-model:visible="visible" @close="onClose">
        <template #title>
            <span>角色分配</span>
        </template>
        <template #default>
            <el-checkbox-group v-model="checkedRoles">
                <el-checkbox
                    v-for="role in rolesList"
                    :key="role.id"
                    :label="role.name"
                >{{ $t(`role.${role.name}`) }}</el-checkbox>
            </el-checkbox-group>
        </template>
        <template #footer>
            <el-button :min="1" type="primary" @click="handleConfirm">{{ $t('buttons.confirm') }}</el-button>
        </template>
    </m-dialog>
</template>
<script lang='ts' setup>
import { onMounted, PropType, ref, watch, } from 'vue'
import { getRoleList, getRoleInfoByUserId, updateRoleInfoByUserId } from '@/api/role';
import { Role } from '@/mock/model';
import { msgSuccess } from '@/utils/notice';
const props = defineProps({
    visible: {
        type: Boolean,
        default: false
    },
    id: {
        type: String,
        required: true
    },
    role: {
        type: Array as PropType<string[]>,
        default: () => []
    }
})
const rolesList = ref<Role[]>([])
const checkedRoles = ref<string[]>([])
const emits = defineEmits(['update:visible'])
const handleConfirm = () => {
    // _updateRoleInfoByUserId(props.id, checkedRoles.value!)
    msgSuccess('调用Api更新...')
    onClose()
}
const _getRoleList = async () => {
    const res = await getRoleList()
    rolesList.value = res.data
}
const _getRoleInfoByUserId = async (id: string) => {
    const res = await getRoleInfoByUserId({ id })
    checkedRoles.value = res.data.map((r: Role) => r.name)
}
const _updateRoleInfoByUserId = async (id: string, roles: string[]) => {
    const res = await updateRoleInfoByUserId({ id, roles })
    checkedRoles.value = res.data.map((r: Role) => r.name)
}

const onClose = () => { emits('update:visible', false) }

// 根据UserId Request获取角色信息
// watch(() => props.id, async (newVal) => {
//     if (newVal) {
//         _getRoleInfoByUserId(newVal)
//     }
// })

// 或 直接传入角色信息
watch(() => props.role, (newVal) => {
    if (newVal) {
        checkedRoles.value = newVal
    }
})
onMounted(() => {
    _getRoleList()
})
</script>
<style lang='scss' scoped>
</style>