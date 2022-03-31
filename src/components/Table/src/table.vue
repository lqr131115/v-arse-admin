<template>
   <el-table
      :data="tableData"
      v-bind="$attrs"
      v-loading="isLoading"
      :element-loading-text="elementLoadingText"
      :element-loading-spinner="elementLoadingSpinner"
      :element-loading-svg-view-box="elementLoadingSvgViewBox"
      :element-loading-background="elementLoadingBackground"
      @row-click="handleRowClick"
   >
      <template v-for="item in normalOptions" :key="item.label">
         <el-table-column :label="item.label" :width="item.width" v-bind="item.attrs">
            <template #default="scope">
               <div class="column">
                  <!-- 行编辑中 -->
                  <template v-if="scope.row.isEditing">
                     <el-input size="small" v-model="scope.row[item.prop]"></el-input>
                  </template>
                  <template v-else>
                     <!-- 列编辑中 -->
                     <template v-if="(scope.$index + scope.column.id) === editingId">
                        <div class="column__edit">
                           <el-input size="small" v-model="scope.row[item.prop]"></el-input>
                           <div class="column__icons edit-status">
                              <el-icon ml10 @click="handleSaveColumnEdit(scope)" color="green">
                                 <check />
                              </el-icon>
                              <el-icon ml10 @click="handleCloseColumnEdit(scope)" color="red">
                                 <close />
                              </el-icon>
                           </div>
                        </div>
                     </template>
                     <template v-else>
                        <!-- 自定义列内容 -->
                        <template v-if="item.slot">
                           <slot :name="item.slot" :scope="scope"></slot>
                        </template>
                        <template v-else>
                           <span>{{ scope.row[item.prop] }}</span>
                        </template>
                        <!-- 当前列可编辑 -->
                        <span class="column__icons" v-if="item.editable">
                           <el-icon ml10 @click="handleEdit(scope)">
                              <edit />
                           </el-icon>
                        </span>
                     </template>
                  </template>
               </div>
            </template>
         </el-table-column>
      </template>
      <!-- 操作列 -->
      <el-table-column
         :label="actionOptions?.label"
         :width="actionOptions?.width"
         :align="actionOptions?.align"
      >
         <template #default="scope">
            <template v-if="scope.row.isEditing">
               <el-button type="primary" size="small">确定</el-button>
               <el-button type="danger" size="small">取消</el-button>
            </template>
            <template v-else>
               <slot name="action" :scope="scope"></slot>
            </template>
         </template>
      </el-table-column>
   </el-table>
   <!-- 分页器 -->
   <div class="pagination" v-if="pagination">
      <el-pagination
         v-model:current-page="currentPage"
         v-model:page-size="pageSize"
         :total="data.length"
         v-bind="pageOptions"
         @size-change="handleSizeChange"
         @current-change="handleCurrentChange"
         @prev-click="handlePrevClick"
         @next-click="handleNextClick"
      />
   </div>
</template>
<script lang='ts' setup>
import { computed, onMounted, PropType, ref, watch } from 'vue';
import cloneDeep from 'lodash/cloneDeep'
import { TableOption } from '@/types/component';
const props = defineProps({
   options: {
      type: Array as PropType<TableOption[]>,
      required: true
   },
   data: {
      type: Array,
      required: true
   },
   // 列是否可编辑
   editable: {
      type: Boolean,
      default: false
   },
   // 行编辑操作的标识
   editRowActionIndex: {
      type: String,
      default: 'edit'
   },
   // 分页
   pagination: {
      type: Boolean,
      default: false
   },
   defaultPagesize: {
      type: Number,
      default: 1
   },
   defaultCurrentPage: {
      type: Number,
      default: 1
   },
   pageOptions: {
      type: Object,
      default: () => ({
         pageSizes: [1, 2, 3],
         layout: "pager, next, jumper",
      })
   },
   // loading配置
   elementLoadingText: {
      type: String
   },
   elementLoadingSpinner: {
      type: String
   },
   elementLoadingSvg: {
      type: String
   },
   elementLoadingBackground: {
      type: String
   },
   elementLoadingSvgViewBox: {
      type: String
   },

})
const emits = defineEmits(['on-save-column-edit', 'on-close-column-edit','on-pagesize-change','on-current-page-change', 'on-prev-click', 'on-next-click'])
let editingId = ref<string>()
let tableData = ref<any[]>(cloneDeep(props.data))
let editRowAction = ref<string>(props.editRowActionIndex)
const currentPage = ref<number>(props.defaultCurrentPage)
const pageSize = ref<number>(props.defaultPagesize)
const isLoading = computed(() => !props.data || !props.data.length)
const normalOptions = computed(() => props.options.filter((item: TableOption) => !item.action))
const actionOptions = computed(() => props.options.find((item: TableOption) => item.action))
const handleEdit = (scope: any) => {
   editingId.value = scope.$index + scope.column.id
}
const handleSaveColumnEdit = (scope: any) => {
   editingId.value = ''
   emits('on-save-column-edit', scope)
}
const handleCloseColumnEdit = (scope: any) => {
   editingId.value = ''
   emits('on-close-column-edit', scope)
}
const handleRowClick = (row: any, column: any) => {
   if (column.label === actionOptions.value?.label) {
      if (props.editable && editRowAction.value === 'edit') {
         row.isEditing = !row.isEditing
         // 其他行恢复为非编辑态
         tableData.value.map(item => {
            if (item !== row) {
               item.isEditing = false
            }
         })
      }
   }

}
const handleSizeChange = (val: number) => { emits('on-pagesize-change', val) }
const handleCurrentChange = (val: number) => { emits('on-current-page-change', val) }
const handlePrevClick = (...val: any) => { emits('on-prev-click', val) }
const handleNextClick = (...val: any) => { emits('on-next-click', val) }
watch(() => props.data, newVal => {
   tableData.value = cloneDeep(newVal)
   tableData.value.map(item => {
      item.isEditing = false
   })
}, { deep: true })

watch(() => props.editRowActionIndex, newVal => {
   editRowAction.value = newVal
})
onMounted(() => {
   tableData.value.map((item) => {
      item.isEditing = false
   })
})
</script>

<style lang='scss' scoped>
@use '@/styles/tools/mixin/BEM' as *;

@include b(column) {
   display: flex;
   align-items: center;

   @include e(edit) {
      display: flex;
      align-items: center;
   }

   @include e(icons) {
      display: flex;
      svg {
         width: 1em;
         height: 1em;
         cursor: pointer;
      }
   }
   .edit-status {
      svg {
         width: 1.2em;
         height: 1.2em;
      }
      svg:hover {
         transform: scale(1.2);
      }
   }
}
.pagination {
   display: flex;
   margin: 10px 0;
   justify-content: flex-end;
}
</style>