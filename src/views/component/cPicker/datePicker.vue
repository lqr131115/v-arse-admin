
<template>
    <div>
        <span mr10>
            <el-date-picker v-model="startDate" type="date" :placeholder="startPlaceholder"
                v-bind="$attrs.startOptions" />
        </span>
        <el-date-picker v-model="endDate" type="date" :placeholder="endPlaceholder" :disabled="endDataDisabled"
            :disabled-date="disabledEndDate" v-bind="$attrs.endOptions" />
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
interface IProps {
    startPlaceholder?: string,
    endPlaceholder?: string,
}
withDefaults(defineProps<IProps>(), {
    startPlaceholder: '请选择开始日期',
    endPlaceholder: '请选择结束日期'
}
)
const startDate = ref<string>('')
const endDate = ref<string>('')
const endDataDisabled = ref<boolean>(true)

const emits = defineEmits(['endChange'])

let disabledEndDate = (time: any) => (time <= startDate.value)
watch(() => startDate.value, newVal => {
    if (!newVal) {
        endDate.value = ''
        endDataDisabled.value = true
    } else {
        if (endDate.value <= newVal) {
            endDate.value = ''
        }
        endDataDisabled.value = false
    }
})
watch(() => endDate.value, newVal => {
    if (newVal) {
        emits('endChange', {
            startDate: startDate.value,
            endDate: newVal
        })
    }
})
</script>


<style lang="scss" scoped >
</style>
