<template>
    <el-dropdown>
        <el-avatar shape="square" :size="40" :src="(userStore.userProfile as any).avatar" />
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item
                    v-for="item in userDropDownList"
                    :key="item.value"
                    :icon="item.icon"
                    :divided="item.divided"
                    @click="clickUserDropdownItem(item.value)"
                >{{ $t(`header.${item.text}`) }}</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
    <lockModal v-model:visible="visible" />
</template>
<script lang='ts' setup>
import { ref } from 'vue'
import { useUserStore } from '@/store/modules/user'
import { msgSuccess } from '@/utils/notice'
import { userDropDownList, USER_DD } from '@/settings'
import { resetRoute } from '@/router'
import lockModal from './lockModal.vue'

const userStore = useUserStore()
const visible = ref<boolean>(false)
/**
 * 退出
 *  1.主动退出
 *  2.被动退出
 *      2.1 主动处理
 *          - token失效 前端设置token过期时间
 *      2.2 被动处理
 *          - token失效 服务端设置token过期时间 返回特定状态码
 *          - 单点登录 服务端返回特定状态码
 */
const logout = () => {
    // TODO: 相关操作,如重置路由等
    resetRoute()
    // 重置UserProfile必须在重置路由之后,因为重置路由会用到UserProfile
    userStore.setUserProfile()
    // logout(清除token)放在最后
    userStore.logout()
    msgSuccess('退出登录')
}
const showDocument = () => {
    window.open('https://github.com/lqr131115/v-arse-admin', '_blank')
}
const handleLock = () => { visible.value = true }
const clickUserDropdownItem = (key: string) => {
    switch (key) {
        case USER_DD.DESC:
            showDocument()
            break;
        case USER_DD.LOCK_SCREEN:
            handleLock()
            break;
        case USER_DD.LOGOUT:
            logout()
            break;
        default:
            break;
    }
}
</script>
<style lang='scss' scoped>
</style>