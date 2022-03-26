<script setup lang="ts">
interface INotifyProps {
    icon: string,
    value: string | number,
    max?: number,
    iconSize?:number,
    iconColor?:string,
    isDot?: boolean,
}
withDefaults(defineProps<INotifyProps>(), {
    icon: 'bell',
    max: 99,
    value: 0,
    iconSize:20,
    isDot: false
})
</script>

<template>
    <div>
        <el-popover :width="300" popper-class="m--notice-popover" trigger="click"> 
            <template #default>
                <slot></slot>
            </template>

            <template #reference>
                <el-badge :value="value" :max="max" :is-dot="isDot" class="item">
                    <el-icon :size="iconSize" :color="iconColor">
                        <component :is="icon" />
                    </el-icon>
                </el-badge>
            </template>
        </el-popover>
    </div>
</template>

<style lang="scss" scoped >
</style>
