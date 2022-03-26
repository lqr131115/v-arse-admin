<template>
    <el-breadcrumb v-bind="$attrs">
        <transition-group name="breadcrumb">
            <el-breadcrumb-item v-for="(item, index) in breadcrumbData" :key="item.path">
                <!-- 不可点击 -->
                <span
                    class="no-skip"
                    v-if="index === breadcrumbData.length - 1"
                >{{ t(`route.${item.meta.title}`) }}</span>
                <!-- 可以点击 -->
                <span
                    class="skip"
                    @click="onLinkClick(item)"
                    fz15
                    fw7
                    v-else
                >{{ t(`route.${item.meta.title}`) }}</span>
            </el-breadcrumb-item>
        </transition-group>
    </el-breadcrumb>
</template>

<script lang="ts" setup>
import { watch, ref } from 'vue';
import { useRoute, RouteLocationMatched, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n'
const breadcrumbData = ref<RouteLocationMatched[]>([])
const route = useRoute()
const router = useRouter()
const { t } = useI18n()
const getBreadcrumbItem = (matchedRoute: RouteLocationMatched[]) => {
    breadcrumbData.value = matchedRoute.filter((mr) => mr.meta.title && mr.meta.icon)
    // 处理成自定义的格式
    // breadcrumbData.value = matchedRoute.filter((mr) => mr.meta.title && mr.meta.icon).map((mr) => {
    //     const item: IBreadcrumbItem = { title: '', path: '' }
    //     item.title = mr.meta.title as string
    //     item.path = mr.path
    //     return item
    // })
}
const onLinkClick = (route: RouteLocationMatched) => { router.push(route.path) }
watch(() => route.matched, (newVal) => { getBreadcrumbItem(newVal) }, { immediate: true })
</script>

<style lang="scss" scoped>
.skip {
    color: rgba(0, 0, 0, 0.8);
    cursor: pointer;
    &:hover {
        color: #000;
    }
}
.no-skip {
    color: #666;
}
</style>