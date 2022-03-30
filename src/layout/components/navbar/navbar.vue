<script setup lang="ts">
import { ref } from 'vue'
import Search from './components/search/search.vue'
import Guide from './components/guide/guide.vue'
import Locale from './components/locale/locale.vue'
import Notify from './components/notify/notify.vue'
import NoticeList from './components/notify/noticelist.vue'
import FullScreen from './components/fullscreen/fullscreen.vue'
import UserDropdown from './components/user-dropdown/user-dropdown.vue'
import Setting from './components/setting/setting.vue'
import { IListItem, IAction, tabListData, actionsData } from './components/notify/data'
import { useAppConfig } from '@/hooks'
type definePropsType = {
  collapse: boolean
}
let drawer = ref<Boolean>(false)
const props = defineProps<definePropsType>()
const { getShowBreadcrumb } = useAppConfig()
const emits = defineEmits(['update:collapse'])
const toggle = () => { emits('update:collapse', !props.collapse) }
const setting = () => { drawer.value = true }
const handleClickItem = (item: IListItem, index: number) => {
  console.log('handleClickItem', item);
}
const handleClickAction = (action: IAction, index: number) => {
  console.log('handleClickAction', action);
}
</script>

<template>
  <div class="header">
    <div class="header__left">
      <span class="header__left--toggle" @click="toggle" mr20>
        <el-icon v-if="collapse">
          <expand />
        </el-icon>
        <el-icon v-else>
          <fold />
        </el-icon>
      </span>
      <span class="header__left--breadcrumb">
        <m-breadcrumb v-if="getShowBreadcrumb" />
      </span>
    </div>
    <div class="header__right">
      <div class="header__search">
        <Search />
      </div>
      <div class="header__msg">
        <Notify icon="message" :value="20" :max="10" isDot>
          <template #default>
            <NoticeList
              :tab-list="tabListData"
              :actions="actionsData"
              @clickItem="handleClickItem"
              @clickAction="handleClickAction"
            ></NoticeList>
          </template>
        </Notify>
      </div>
      <div class="header__guide">
        <Guide />
      </div>
      <div class="header__locale">
        <Locale />
      </div>
      <div class="header__fullscreen">
        <FullScreen />
      </div>
      <div class="header__info">
        <UserDropdown />
      </div>
      <div class="header__setting">
        <svg-icon name="setting" style="font-size: 1.3em;" @click="setting"></svg-icon>
      </div>
    </div>
  </div>
  <el-drawer v-model="drawer">
    <template #title>
      <span fz20 fw7>{{ $t(`setting.drawerTitle`) }}</span>
    </template>
    <Setting />
  </el-drawer>
</template>

<style lang="scss" scoped>
@use '@/styles/tools/mixin/BEM' as *;
@include b(header) {
  height: 60px;
  display: flex;
  padding-left: 10px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  @include e(left) {
    display: flex;
    @include m(breadcrumb) {
    }
    @include m(toggle) {
      cursor: pointer;
    }
  }

  @include e(right) {
    display: flex;
    align-items: center;
    & > div {
      justify-content: center;
      align-items: center;
      display: flex;
      height: 60px;
      min-width: 45px;
      cursor: pointer;
      &:hover {
        background-color: #eee;
      }
      &.header__info {
        width: 50px;
      }
    }
  }
  @include e(info) {
    cursor: pointer;
  }
}
</style>
