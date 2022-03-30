<template>
    <el-tooltip class="box-item" effect="dark" :content="$t('header.guide')">
        <svg-icon
            name="guide"
            id="second-guide"
            style="font-size: 1.2em;"
            @click="onClick"
        ></svg-icon>
    </el-tooltip>
</template>
<script lang='ts' setup>
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { genSteps, initDriver } from './driver'
const { t } = useI18n()
let driver: any;
const onClick = () => {
    driver.defineSteps(genSteps(t))
    driver.start()
}
onMounted(() => {
    driver = initDriver(t)
})

</script>
<style lang='scss' scoped>
</style>