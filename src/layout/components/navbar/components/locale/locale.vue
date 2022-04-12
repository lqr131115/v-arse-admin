<template>
    <el-dropdown @command="changeLanguage">
        <svg-icon name="language" style="font-size: 1.3em;"></svg-icon>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item
                    v-for="item in localeList"
                    :key="item.value"
                    :icon="item.icon"
                    :command="item.value"
                    :disabled="item.value === language"
                >{{ item.text }}</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>
<script lang='ts' setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n'
import { useAppStore } from '@/store/modules/app'
import { localeList } from '@/settings'
import type { LocaleType } from '@/types/app'
const props = defineProps({
    reload: {
        type: Boolean,
        default: true
    }
})
const { locale } = useI18n()
const appStore = useAppStore()
const language = computed(() => appStore.getLanguage)
const changeLanguage = (lang: LocaleType) => {
    locale.value = lang
    appStore.setLanguage(lang)
    // 登录界面切换语言时不需要reload
    props.reload && location.reload()
}
</script>
<style lang='scss' scoped>
</style>