<script setup lang="ts">
import { ref } from 'vue'
import { ITabItem, IAction, IListItem } from './data'
const TAG_TYPE: { [key: string | number]: string } = {
    '1': 'success',
    '2': 'info',
    '3': 'warning',
    '4': 'danger',
}

interface IPropsType {
    tabList: ITabItem[],
    actions?: IAction[]
}
withDefaults(defineProps<IPropsType>(), {
    tabList: () => []
})
const emits = defineEmits(['clickItem', 'clickAction'])
let activeName = ref<string>('1')
const handleClickItem = (item: IListItem, index: number) => {
    emits('clickItem', item, index)
}

const handleClickAction = (action: IAction, index: number) => {
    emits('clickAction', action, index)
}

</script>

<template>
    <div class="tabs-wrapper">
        <el-tabs v-model="activeName" stretch>
            <el-tab-pane
                v-for="tab in tabList"
                :key="tab.key"
                :label="`${tab.name}(${tab.list.length})`"
                :name="tab.key"
            >
                <el-scrollbar max-height="300px">
                    <div
                        v-for="(item, index) in tab.list"
                        :key="item.id"
                        class="scrollbar-item-wrapper"
                        @click="handleClickItem(item, index)"
                    >
                        <div class="scrollbar-item">
                            <div v-if="item.avatar" mr15>
                                <el-avatar :src="item.avatar"></el-avatar>
                            </div>
                            <div class="msg-wrapper">
                                <p v-if="item.title" fw7>{{ item.title }}</p>
                                <p v-if="item.extra">
                                    <el-tag
                                        :key="item.extra"
                                        effect="plain"
                                        :type="item.type ? TAG_TYPE[item.type] : 'info'"
                                    >{{ item.extra }}</el-tag>
                                </p>
                                <p v-if="item.description">{{ item.description }}</p>
                                <p v-if="item.datetime" class="datetime">{{ item.datetime }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="actions-wrapper">
                        <div
                            class="action"
                            v-for="(action, aIndex) in actions"
                            :key="action.id"
                            @click="handleClickAction(action, aIndex)"
                        >
                            <el-icon
                                v-if="action.icon"
                                mr4
                                :size="action.iconSize"
                                :color="action.iconColor"
                            >
                                <component :is="action.icon" />
                            </el-icon>
                            <span fz12 fw7>{{ action.title }}</span>
                        </div>
                    </div>
                </el-scrollbar>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<style lang="scss" scoped >
.tabs-wrapper {
    :deep(.el-tabs__header) {
        margin: 0;
    }
}
.tabs-wrapper {
    .scrollbar-item-wrapper {
        display: flex;
        padding: 20px 10px;
        border-bottom: 1px solid #eee;
        cursor: pointer;
        &:hover {
            background-color: #eee;
        }
        .scrollbar-item {
            display: flex;
            align-items: center;
            .msg-wrapper {
                display: flex;
                flex-direction: column;
                p {
                    margin-bottom: 4px;
                }
                .datetime {
                    color: #999;
                }
            }
        }
    }
    .actions-wrapper {
        display: flex;
        align-items: center;
        .action {
            display: flex;
            width: 100%;
            padding: 20px 30px;
            cursor: pointer;
            &:hover {
                background-color: #eee;
            }
        }
    }
}
</style>
