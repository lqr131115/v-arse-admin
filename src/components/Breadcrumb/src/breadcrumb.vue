<template>
    <el-breadcrumb v-bind="$attrs">
        <transition-group name="breadcrumb">
            <el-breadcrumb-item v-for="(item, index) in breadcrumbData" :key="item.path">
                <!-- 不可点击 -->
                <template v-if="index === breadcrumbData.length - 1">
                    <span class="no-skip">{{ $t(`route.${item.meta.title}`) }}</span>
                </template>
                <!-- 可以点击 -->
                <template v-else>
                    <el-dropdown @command="onCommand" :max-height="130">
                        <span class="skip" fz15 fw7>{{ $t(`route.${item.meta.title}`) }}</span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item
                                    v-for="child in item.children"
                                    :key="child.path"
                                    :command="child.path"
                                >{{ $t(`route.${child.meta!.title}`) }}</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </template>
            </el-breadcrumb-item>
        </transition-group>
    </el-breadcrumb>
</template>

<script lang="ts" setup>
import { watch, ref } from 'vue';
import { useRoute, RouteLocationMatched, useRouter } from 'vue-router';
const breadcrumbData = ref<RouteLocationMatched[]>([])
const route = useRoute()
const router = useRouter()
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
const onCommand = (path: string) => { router.push(path) }

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