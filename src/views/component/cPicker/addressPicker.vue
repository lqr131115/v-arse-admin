<template>
   <div class="city-picker">
      <el-select placeholder="请选择省份" v-model="province" clearable>
         <el-option v-for="item in provinceOptions" :key="item.code" :value="item.code" :label="item.name"></el-option>
      </el-select>
      <el-select placeholder="请选择城市" :disabled="!province" v-model="city" mh10 clearable>
         <el-option v-for="item in cityOptions" :key="item.code" :value="item.code" :label="item.name"></el-option>
      </el-select>
      <el-select mr20 placeholder="请选择区域" :disabled="!province || !city" v-model="area" clearable>
         <el-option v-for="item in areaOptions" :key="item.code" :value="item.code" :label="item.name"></el-option>
      </el-select>
      <el-button @click="handleConfirm" type="primary">确认</el-button>
   </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import areas from '@/constants/json/area.json'
interface IAreaItem {
   code: string,
   name: string,
   children?: IAreaItem[]
}
const emits = defineEmits(['selected'])
const province = ref<string>('')
const city = ref<string>('')
const area = ref<string>('')
const provinceOptions = ref<IAreaItem[]>(areas)
const cityOptions = ref<IAreaItem[]>([])
const areaOptions = ref<IAreaItem[]>([])
watch(() => province.value, (newVal) => {
   if (newVal) {
      const selectedProvince = provinceOptions.value.find(p => province.value === p.code)
      cityOptions.value = selectedProvince!.children || []
   }
   city.value = ''
   area.value = ''
})
watch(() => city.value, (newVal) => {
   if (newVal) {
      const selectedArea = cityOptions.value.find(c => city.value === c.code)
      areaOptions.value = selectedArea!.children || []
   }
   area.value = ''
})
const handleConfirm = () => {
   let pName: string = ''
   let cName: string = ''
   let aName: string = ''
   if (province.value) {
      const pObj = provinceOptions.value.find(p => p.code === province.value)
      pName = pObj!.name
      if (!city.value) {
         emits('selected', pName)
         return
      }
   }
   if (city.value) {
      const cObj = cityOptions.value.find(c => c.code === city.value)
      cName = cObj!.name
      if (!area.value) {
         emits('selected', `${pName}-${cName}`)
         return
      }
   }
   if (area.value) {
      const aObj = areaOptions.value.find(a => a.code === area.value)
      aName = aObj!.name
      emits('selected', `${pName}-${cName}-${aName}`)
   }
}
</script>

<style lang="scss" scoped >
.city-picker {
   display: flex;
   align-items: center;
}
</style>
