<template>
    <el-dropdown>
        <svg-icon name="language" style="font-size: 1.3em;"></svg-icon>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item
                    v-for="item in localeList"
                    :key="item.value"
                    :icon="item.icon"
                    @click="changeLanguage(item.value)"
                >{{ item.text }}</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>
<script lang='ts' setup>
import { useI18n } from 'vue-i18n'
import { getItem, setItem } from '@/utils/storage';
import { LOCALE_KEY } from '@/enums/cacheEnum';
import { localeList } from '@/settings'
const { locale } = useI18n()
const changeLanguage = (lang: string) => {
    const curLang = getItem(LOCALE_KEY)
    if (curLang === lang) {
        return
    }
    setItem(LOCALE_KEY, lang)
    locale.value = lang
}
</script>
<style lang='scss' scoped>
</style>