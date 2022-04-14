<template>
    <div class="picker">
        <el-divider content-position="left">城市选择器</el-divider>
        <CityPicker @selected="handleSelected" />
        <el-divider content-position="left">地址选择器</el-divider>
        <addressPicker @selected="handleSelected" />
        <el-divider content-position="left">时间选择器</el-divider>
        <TimePicker :endOptions="endOptions" @startChange="startChangeTime" @endChange="endChangeTime" />
        <el-divider content-position="left">日期选择器</el-divider>
        <DatePicker @endChange="endChangeDate" />

    </div>
</template>
<script lang='ts' setup>
import CityPicker from './cityPicker.vue'
import addressPicker from './addressPicker.vue'
import TimePicker from './timePicker.vue'
import DatePicker from './datePicker.vue'
import { msgSuccess } from '@/utils/notice'
import { formatTimeStamp } from '@/utils/moment'

interface IEndTimeVal {
    startTime: string,
    endTime: string
}
interface IEndDateVal {
    startDate: string,
    endDate: string
}
const endOptions = {
    "prefix-icon": 'ticket'
}
const handleSelected = (val: string) => {
    msgSuccess(`选择了${val}`)
}

const startChangeTime = (val: string) => {
    console.log('startChange', val);
}
const endChangeTime = (val: IEndTimeVal) => {
    msgSuccess(`选择了${val.startTime}-${val.endTime}`)
}
const endChangeDate = (val: IEndDateVal) => {

    const startDate = formatTimeStamp(val.startDate, 'YYYY-MM-DD')
    const endDate = formatTimeStamp(val.endDate, 'YYYY-MM-DD')
    msgSuccess(`选择了${startDate} 到 ${endDate}`)
}


</script>
<style lang='scss' scoped>
@use '@/styles/tools/mixin/BEM'as *;

@include b(picker) {
    padding: 10px
}
</style>