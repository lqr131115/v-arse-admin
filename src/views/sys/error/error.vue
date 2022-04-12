<template>
    <el-result class="error" :title="getMapValue.title" :sub-title="getMapValue.subTitle">
        <template #icon>
            <el-image v-if="getMapValue.img" class="result__icon"  :src="getMapValue.img"></el-image>
            <svg-icon v-if="getMapValue.svg" class="result__icon" :size="15" :name="getMapValue.svg"></svg-icon>
        </template>
        <template #extra> 
            <el-button type="primary" @click="getMapValue.handler">{{ getMapValue.btnText }}</el-button>
        </template>
    </el-result>
</template>

<script lang="tsx" setup>
import type { PropType } from 'vue';
import { ref, computed, unref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n'
import { ExceptionEnum } from '@/enums/appEnum'
import { PageEnum } from '@/enums/pageEnum'
import { useRedo } from '@/hooks/web'
interface MapValue {
    title: string;
    subTitle: string;
    btnText?: string;
    svg?: string;
    img?: string;
    handler?: Function;
    status?: string;
}

const props = defineProps({
    // 状态码
    status: {
        type: Number as PropType<number>,
        default: ExceptionEnum.PAGE_NOT_FOUND,
    },
    title: {
        type: String as PropType<string>,
        default: '',
    },
    subTitle: {
        type: String as PropType<string>,
        default: '',
    },
    full: {
        type: Boolean as PropType<boolean>,
        default: false,
    },
})

const statusMapRef = ref(new Map<string | number, MapValue>());

const { query } = useRoute();
const { replace } = useRouter()
const { t } = useI18n();
const redo = useRedo()
const getStatus = computed(() => {
    const { status: routeStatus } = query;
    const { status } = props;
    return Number(routeStatus) || status;
});

const getMapValue = computed((): MapValue => {
    return unref(statusMapRef).get(unref(getStatus)!) as MapValue;
});


const backLoginI18n = t('buttons.backLogin');
const backHomeI18n = t('buttons.backHome');

unref(statusMapRef).set(ExceptionEnum.PAGE_NOT_FOUND, {
    title: '404',
    status: `${ExceptionEnum.PAGE_NOT_FOUND}`,
    subTitle: t('exception.subTitle404'),
    svg:'error-404',
    btnText: props.full ? backLoginI18n : backHomeI18n,
    handler: () => (props.full ? replace(PageEnum.BASE_LOGIN) : replace(PageEnum.BASE_HOME)),
});

unref(statusMapRef).set(ExceptionEnum.PAGE_NOT_DATA, {
    title: t('exception.noDataTitle'),
    subTitle: '',
    btnText: t('buttons.reload'),
    svg: 'no-data',
    handler: () => redo(),
});


</script>

<style lang="scss" scoped>
@use '@/styles/tools/mixin/BEM'as *;

@include b(error) {
    display: flex;
    align-items: center;
    flex-direction: column;

    @include e(icon) {
        img {
            width: 400px;
            height: 300px;
        }
    }


}
</style>
