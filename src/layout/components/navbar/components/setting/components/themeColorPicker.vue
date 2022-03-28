<template>
   <div class="picker">
      <template v-for="color in colorList || []" :key="color">
         <span
            @click="handleClick(color)"
            class="picker__item"
            :class="{ 'picker__item--active': def && def === color }"
            :style="{ background: color }"
         ></span>
      </template>
   </div>
</template>
<script lang='ts' setup>
import { PropType, watch, ref } from 'vue'
import { HandlerEnum } from '../enum'
import { useThemeStore } from '@/store/theme'
import { SIDE_BAR_THEME_COLOR_LIST } from '@/settings'
import { genNewStyle, writeNewStyle } from '@/utils/theme'
import type { appTheme, menuTheme, navBarTheme } from '@/types/app'
import { useAppStore } from '@/store/app'

const props = defineProps({
   colorList: {
      type: Array as PropType<any[]>,
      default: [],
   },
   event: {
      type: String as PropType<HandlerEnum>,
   },
   def: {
      type: String
   },
})
let border = ref<string>('')
const themeStore = useThemeStore()
const appStore = useAppStore()
const baseHandler = (event: HandlerEnum, value: string) => {
   appStore.setProjectConfig({ defaultTheme: false })
   switch (event) {
      case HandlerEnum.CHANGE_THEME_COLOR:
         const appTheme: appTheme = {}
         appTheme.primary = value
         genNewStyle(value).then(res => {
            writeNewStyle(res)
         })
         themeStore.setAppTheme(appTheme)
         break;
      case HandlerEnum.HEADER_THEME:
         const navbarTheme: navBarTheme = {}
         navbarTheme.navBarBgColor = value
         themeStore.setNavbarTheme(navbarTheme)
         break;
      case HandlerEnum.MENU_THEME:
         const menuTheme: menuTheme = {}
         menuTheme.menuBgColor = value
         themeStore.setMenuTheme({ ...menuTheme, ...SIDE_BAR_THEME_COLOR_LIST[value] })
         break;
      default:
         break;
   }
}
const handleClick = (color: string) => {
   props.event && baseHandler(props.event, color)
}
watch(() => props.def, (newVal) => {
   if (newVal === '#ffffff') {
      border.value = `2px solid #000`
   } else {
      border.value = `2px solid #fff`
   }
}, { immediate: true })

</script>
<style lang="scss" scoped>
@use '@/styles/tools/mixin/BEM' as *;
@include b(picker) {
   display: flex;
   width: inherit;
   flex-wrap: wrap;
   padding: 0 20px;
   justify-content: space-between;

   @include e(item) {
      width: 20px;
      height: 20px;
      cursor: pointer;
      border: 1px solid #ddd;
      border-radius: 2px;

      @include m(active) {
         border: 1px solid #eee;
         opacity: 0.6;
         &::after {
            content: "";
            display: block;
            width: 10px;
            height: 6px;
            border: v-bind(border);
            border-right: none;
            border-top: none;
            transform: rotate(-60deg) translate(7px, -10px);
            position: relative;
            top: 15px;
            left: 9px;
         }
      }
   }
}
</style>

