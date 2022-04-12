<template>
   <m-dialog v-model:visible="visible" draggable width="40%" @close="onClose">
      <template #title>
         <span>{{ $t(`header.tooltipLock`) }}</span>
      </template>
      <template #default>
         <div class="body">
            <div class="body__avatar">
               <el-avatar :size="60" :src="(userProfile as any).avatar"></el-avatar>
               <span mv20 fz15>{{ ( userProfile as any).username }}</span>
            </div>
            <el-form
               ref="lockRef"
               label-width="100px"
               :model="form"
               :rules="rules"
               label-position="top"
            >
               <el-form-item :label="$t('header.lockScreenPassword')" prop="password">
                  <el-input
                     v-model="form.password"
                     type="password"
                     placeholder="密码"
                     prefix-icon="lock"
                     show-password
                  />
               </el-form-item>
               <el-form-item>
                  <el-button
                     type="primary"
                     @click="lockScreen(lockRef)"
                     :style="{ width: '100%' }"
                  >{{ $t('header.lockScreenBtn') }}</el-button>
               </el-form-item>
            </el-form>
         </div>
      </template>
   </m-dialog>
</template>
<script lang='ts' setup>
import { ref,reactive, watch } from 'vue'
import md5 from 'md5';
import { FormInstance } from 'element-plus';
import { useUser } from '@/hooks/sys'
import { useAppStore } from '@/store/app';
interface TFormItem {
   password: string
}
const props = defineProps({
   isScroll: {
      type: Boolean,
      default: false
   },
   visible: {
      type: Boolean,
      default: false
   }
})
const emits = defineEmits(['update:visible'])
const { userProfile } = useUser()
const appStore = useAppStore()
const lockRef = ref<FormInstance>()
const form = reactive<TFormItem>({ password: '' })
const rules = { password: [{ required: true, message: '输入锁屏密码', trigger: 'change' }] }

const lockScreen = async (formEl: FormInstance | undefined) => {
   if (!formEl) return
   await formEl.validate((valid: any, fields: any) => {
      if (valid) {
         appStore.setLockScreen({ password: md5(form.password) })
      } else {
         console.log('error submit!', fields)
      }
   })
}
const onClose = () => { emits('update:visible', false),form.password = ''}
watch(() => props.visible, (val: boolean) => {
   if (val) {
      lockRef.value && lockRef.value.resetFields()
   }
})

</script>
<style lang='scss' scoped>
.body {
   display: flex;
   flex-direction: column;
   .body__avatar {
      display: flex;
      flex-direction: column;
      margin: 10px 0;
      align-items: center;
      justify-content: center;
   }
}
</style>