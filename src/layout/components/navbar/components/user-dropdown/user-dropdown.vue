<template>
    <el-dropdown>
        <el-avatar shape="square" :size="40" :src="(userStore.userInfo as any).avatar" />
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item
                    v-for="item in userDropDownList"
                    :key="item.value"
                    :icon="item.icon"
                    :divided="item.divided"
                    @click="clickUserDropdownItem(item.value)"
                >{{ t(`header.${item.text}`) }}</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>
<script lang='ts' setup>
import { useI18n } from 'vue-i18n'
import { useUserStore } from '@/store/user'
import { msgSuccess } from '@/utils/notice'
import { userDropDownList, USER_DD } from '@/settings'

const { t } = useI18n()
const userStore = useUserStore()
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
    userStore.logout()
    msgSuccess('退出登录')
}
const showDocument = () => {
    alert`showDocument`
}
const lockScreen = () => { alert`lockScreen` }
const clickUserDropdownItem = (key: string) => {
    switch (key) {
        case USER_DD.DESC:
            showDocument()
            break;
        case USER_DD.LOCK_SCREEN:
            lockScreen()
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