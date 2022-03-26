<template>
   <div class="picker">
      <template v-for="(color, index) in colorList || []" :key="color">
         <span
            @click="handleClick(color, index)"
            class="picker__item"
            :class="{ 'picker__item--active': def === index }"
            :style="{ background: color }"
         ></span>
      </template>
   </div>
</template>
<script lang='ts' setup>
import { onMounted, PropType } from 'vue'
import { HandlerEnum } from '../enum'
import { useThemeStore } from '@/store/theme'
import type { menuTheme, navBarTheme } from '@/types/app'
import { computed } from '@vue/reactivity';
const props = defineProps({
   colorList: {
      type: Array as PropType<string[]>,
      default: [],
   },
   event: {
      type: Number,
   },
   // def: {
   //    type: String
   // },
})
const themeStore = useThemeStore()
const baseHandler = (event: HandlerEnum, value: string) => {
   switch (event) {
      case HandlerEnum.CHANGE_THEME_COLOR:
         alert(HandlerEnum.CHANGE_THEME_COLOR)
         break;
      case HandlerEnum.HEADER_THEME:
         const navbarTheme: navBarTheme = {}
         navbarTheme.navBarBgColor = value
         themeStore.setNavbarTheme(navbarTheme)
         break;
      case HandlerEnum.MENU_THEME:
         const menuTheme: menuTheme = {}
         menuTheme.menuBgColor = value
         themeStore.setMenuTheme(menuTheme)
         break;
      default:
         break;
   }
}
const getDef = (): string => {
   let def = ''
   switch (props.event) {
      case HandlerEnum.CHANGE_THEME_COLOR:
         def = '#f00'
         break;
      case HandlerEnum.HEADER_THEME:
         def = themeStore.getNavbarTheme.navBarBgColor
         break;
      case HandlerEnum.MENU_THEME:
         def = themeStore.getMenuTheme.menuBgColor
         break;
      default:
         break;
   }
   return def
}
const handleClick = (color: string, index: number) => {
   props.event >= 0 && baseHandler(props.event, color);
}
onMounted(() => {

})
const def = computed(() => getDef())
console.log('xxxdefxxx', def.value);


</script>
<style lang="scss" scoped>
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
            border: 2px solid #fff;
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

