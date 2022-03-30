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
            <span fz18>{{ $t('setting.interfaceFunction') }}</span>
        </el-divider>
        <switchItem
            :title="$t('setting.searchBar')"
            :event="HandlerEnum.OPEN_SEARCH_BAR"
            :def="unref(getOpenSearchBar)"
        />
        <switchItem
            :title="$t('setting.guideBar')"
            :event="HandlerEnum.OPEN_GUIDE_BAR"
            :def="unref(getOpenGuideBar)"
        />
        <switchItem
            :title="$t('setting.localeBar')"
            :event="HandlerEnum.OPEN_LOCALE_BAR"
            :def="unref(getOpenLocaleBar)"
        />
        <switchItem
            :title="$t('setting.screenBar')"
            :event="HandlerEnum.OPEN_SCREEN_BAR"
            :def="unref(getOpenScreenBar)"
        />

        <el-divider>
            <span fz18>{{ $t('setting.interfaceDisplay') }}</span>
        </el-divider>
        <switchItem title="Logo" :event="HandlerEnum.SHOW_LOGO" :def="unref(getShowLogo)" />
        <switchItem
            :title="$t('setting.breadcrumb')"
            :event="HandlerEnum.SHOW_BREADCRUMB"
            :def="unref(getShowBreadcrumb)"
        />
        <switchItem
            :title="$t('setting.tabsQuickBtn')"
            :event="HandlerEnum.TABS_SHOW_QUICK"
            :def="unref(getShowQuickTabs)"
        />

        <el-divider>
            <span fz18>{{ $t('setting.animation') }}</span>
        </el-divider>
        <switchItem
            :title="$t('setting.breadcrumbAnimation')"
            :event="HandlerEnum.BREADCRUMB_ANIMATION"
            :def="unref(getOpenBreadcrumbAn)"
            disabled
        />
        <selectItem
            :title="$t('setting.animationType')"
            :event="HandlerEnum.ROUTER_TRANSITION"
            :options="routerTransitionOptions"
            :def="unref(getAnimationType)"
        />

        <el-divider>
            <span fz18>{{ $t('setting.defaultSetting') }}</span>
        </el-divider>
        <switchItem
            :title="$t('setting.defaultTheme')"
            :event="HandlerEnum.DEFAULT_THEME"
            :def="unref(getDefaultTheme)"
        />
    </el-scrollbar>
</template>
<script lang='ts' setup>
import { unref } from 'vue'
import { HandlerEnum, routerTransitionOptions } from './enum'
import { useAppConfig, useTheme } from '@/hooks'
import { APP_PRESET_COLOR_LIST, HEADER_PRESET_BG_COLOR_LIST, SIDE_BAR_BG_COLOR_LIST } from '@/settings'
import themeColorPickerVue from './components/themeColorPicker.vue';
import switchItem from './components/switchItem.vue';
import selectItem from './components/selectItem.vue';
const { getAppThemeColor, getNavbarBgColor, getMenuBgColor } = useTheme()
const { getShowLogo, getDefaultTheme, getAnimationType, getShowQuickTabs, getShowBreadcrumb, getOpenBreadcrumbAn,
    getOpenSearchBar, getOpenGuideBar, getOpenLocaleBar, getOpenScreenBar } = useAppConfig()
</script>
<style lang='scss' scoped>
</style>
<style lang='scss' >
.scrollbar__view--settingBody {
    height: 100%;
}
</style>

