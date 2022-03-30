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
import { baseHandler } from "../handler"
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
let borderStyle = ref<string>('')
const handleClick = (color: string) => {
   props.event && baseHandler(props.event, color)
}
watch(() => props.def, (newVal) => {
   if (newVal === '#ffffff') {
      borderStyle.value = `2px solid #000`
   } else {
      borderStyle.value = `2px solid #fff`
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
            border: v-bind(borderStyle);
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

