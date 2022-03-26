<template>
    <el-scrollbar view-class="scrollbar__view--settingBody" noresize>
        <el-divider>
            <span fz18>{{ $t('setting.sysTheme') }}</span>
        </el-divider>
        <themeColorPickerVue
            :colorList="APP_PRESET_COLOR_LIST"
            :event="HandlerEnum.CHANGE_THEME_COLOR"
        />
        <el-divider>
            <span fz18>{{ $t('setting.headerTheme') }}</span>
        </el-divider>
        <themeColorPickerVue
            :colorList="HEADER_PRESET_BG_COLOR_LIST"
            :event="HandlerEnum.HEADER_THEME"
        />
        <el-divider>
            <span fz18>{{ $t('setting.sidebarTheme') }}</span>
        </el-divider>
        <themeColorPickerVue :colorList="SIDE_BAR_BG_COLOR_LIST" 
        :event="HandlerEnum.MENU_THEME" />
    </el-scrollbar>
</template>
<script lang='ts' setup>
import themeColorPickerVue from './components/themeColorPicker.vue';
import { APP_PRESET_COLOR_LIST, HEADER_PRESET_BG_COLOR_LIST, SIDE_BAR_BG_COLOR_LIST, } from '@/settings'
import { HandlerEnum } from './enum'
</script>
<style lang='scss' scoped>
</style>
<style lang='scss' >
.scrollbar__view--settingBody {
    height: 100%;
}
</style>

