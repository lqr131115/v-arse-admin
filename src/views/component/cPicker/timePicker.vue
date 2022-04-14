<template>
    <div class="time-picker">
        <el-time-select v-model="startTime" :placeholder="startPlaceholder" :start="startTimeStart"
            :step="startTimeStep" :end="startTimeEnd" mr8 v-bind="$attrs.startOptions"></el-time-select>
        <el-time-select v-model="endTime" :min-time="startTime" :placeholder="endPlaceholder" :start="endTimeStart"
            :step="endTimeStep" :end="endTimeEnd" :disabled="disableEndTime" v-bind="$attrs.endOptions">
        </el-time-select>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
interface IProps {
    startTimeStart?: string,
    startTimeEnd?: string,
    startTimeStep?: string,
    startPlaceholder?: string,
    endTimeStart?: string,
    endTimeEnd?: string,
    endTimeStep?: string,
    endPlaceholder?: string,
}
withDefaults(defineProps<IProps>(), {
    startTimeStep: '00:30',
    startPlaceholder: '请选择开始时间',
    endTimeEnd: '24:00',
    endTimeStep: '00:30',
    endPlaceholder: '请选择结束时间',
})
const emits = defineEmits(['startChange', 'endChange'])

const startTime = ref<string>('')
const endTime = ref<string>('')
const disableEndTime = ref<boolean>(true)
watch(() => startTime.value, newVal => {
    if (!newVal) {
        endTime.value = ''
        disableEndTime.value = true
    } else {
        disableEndTime.value = false
        emits('startChange', newVal)
    }
})
watch(() => endTime.value, newVal => {
    if (newVal) {
        emits('endChange', {
            startTime: startTime.value,
            endTime: newVal
        })
    }

})
</script>