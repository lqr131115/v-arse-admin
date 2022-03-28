<template>
    <div class="switchItem">
        <span>{{ title }}</span>
        <el-switch
            v-model="bindValue"
            inline-prompt
            @change="handleChange"
            :disabled="disabled"
            :active-text="$t('setting.on')"
            :inactive-text="$t('setting.off')"
        />
    </div>
</template>

<script lang="ts" setup>
import { PropType, watch, ref } from 'vue'
import { HandlerEnum } from "../enum"
import { useAppStore } from '@/store/app'
import {
    useThemeStore,
    defaultAppTheme,
    defaultMenuTheme,
    defaultNavbarTheme
} from '@/store/theme';
import { genNewStyle, writeNewStyle } from '@/utils/theme'
import type { ProjectConfig } from '@/types/app'
const props = defineProps({
    event: {
        type: String as PropType<HandlerEnum>,
    },
    disabled: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
    },
    def: {
        type: Boolean,
    }
}
)
const appStore = useAppStore()
const themeStore = useThemeStore()
let bindValue = ref<boolean>(false)
const baseHandler = (event: HandlerEnum, e: Event) => {
    let config: ProjectConfig = {};
    switch (event) {
        case HandlerEnum.SHOW_LOGO:
            config.showLogo = !!e
            appStore.setProjectConfig(config)
            break;
        case HandlerEnum.DEFAULT_THEME:
            config.defaultTheme = !!e
            appStore.setProjectConfig(config)
            if (!!e) {
                themeStore.setAppTheme(defaultAppTheme)
                genNewStyle(defaultAppTheme.primary!).then(res => {
                    writeNewStyle(res)
                })
                themeStore.setMenuTheme(defaultMenuTheme)
                themeStore.setNavbarTheme(defaultNavbarTheme)
            }
            break;
        default:
            break;
    }
}
const handleChange = (e: Event) => {
    props.event && baseHandler(props.event, e)
}
watch(() => props.def, newVal => {
    bindValue.value = newVal
}, { immediate: true })
</script>

<style lang="scss" scoped>
@use '@/styles/tools/mixin/BEM' as *;
@include b(switchItem) {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
}
</style>