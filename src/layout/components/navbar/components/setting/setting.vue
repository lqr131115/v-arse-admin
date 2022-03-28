<template>
    <el-scrollbar view-class="scrollbar__view--settingBody" noresize>
        <el-divider>
            <span fz18>{{ $t('setting.sysTheme') }}</span>
        </el-divider>
        <themeColorPickerVue
            :colorList="APP_PRESET_COLOR_LIST"
            :event="HandlerEnum.CHANGE_THEME_COLOR"
            :def="unref(getAppThemeColor)"
        />
        <el-divider>
            <span fz18>{{ $t('setting.headerTheme') }}</span>
        </el-divider>
        <themeColorPickerVue
            :colorList="HEADER_PRESET_BG_COLOR_LIST"
            :event="HandlerEnum.HEADER_THEME"
            :def="unref(getNavbarBgColor)"
        />
        <el-divider>
            <span fz18>{{ $t('setting.sidebarTheme') }}</span>
        </el-divider>
        <themeColorPickerVue
            :colorList="SIDE_BAR_BG_COLOR_LIST"
            :event="HandlerEnum.MENU_THEME"
            :def="unref(getMenuBgColor)"
        />
        <el-divider>
            <span fz18>{{ $t('setting.interfaceDisplay') }}</span>
        </el-divider>
        <switchItem title="Logo" :event="HandlerEnum.SHOW_LOGO" :def="unref(getShowLogo)" />
        <switchItem
            :title="$t('setting.defaultTheme')"
            :event="HandlerEnum.DEFAULT_THEME"
            :def="getDefaultTheme"
        />
    </el-scrollbar>
</template>
<script lang='ts' setup>
import { unref } from 'vue'
import { HandlerEnum } from './enum'
import { useSetting } from '@/hooks'
import { APP_PRESET_COLOR_LIST, HEADER_PRESET_BG_COLOR_LIST, SIDE_BAR_BG_COLOR_LIST } from '@/settings'
import themeColorPickerVue from './components/themeColorPicker.vue';
import switchItem from './components/switchItem.vue';
const { getAppThemeColor, getNavbarBgColor, getMenuBgColor, getShowLogo, getDefaultTheme } = useSetting()
</script>
<style lang='scss' scoped>
</style>
<style lang='scss' >
.scrollbar__view--settingBody {
    height: 100%;
}
</style>

