<script setup lang="ts">
import { computed } from 'vue'
// import { isExternal as external } from '@/utils/validate'
import { iSExternal } from '../../../utils/validate'

interface IProps {
    name: string,
    prefix?: string,
    size?: number,
    color?: string,
    className?: string
}

const props = withDefaults(defineProps<IProps>(), { className: '', prefix: 'icon',size: 1 })

// 是否是外部图标
const isExternal = computed(() => (iSExternal(props.name)))

// 外部图标样式
const styleExternalIcon = computed(() => ({
    mask: `url(${props.name}) no-repeat 50% 50%`,
    '-webkit-mask': `url(${props.name}) no-repeat 50% 50%`
}))

// 项目内部图标
const symbolId = computed(() => (`#${props.prefix}-${props.name}`))

// 项目大小
const sizeStyle = computed(() => (`${props.size}em`))
</script>

<template>
    <div>
        <div
            v-if="isExternal"
            :style="styleExternalIcon"
            class="svg-icon-external svg-icon"
            :class="className"
        ></div>
        <svg v-else class="svg-icon" :class="className" :color="color" aria-hidden="true">
            <use :xlink:href="symbolId" />
        </svg>
    </div>
</template>

<style lang="scss" scoped>
@use '@/styles/tools/mixin/BEM' as *;
@include b(svg-icon) {
    width: v-bind(sizeStyle);
    height: v-bind(sizeStyle);
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}

@include b(svg-icon-external) {
    background-color: currentColor;
    mask-size: cover !important;
    display: inline-block;
}
</style>
