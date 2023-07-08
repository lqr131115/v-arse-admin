import { useI18n } from 'vue-i18n';
import { defineComponent, PropType } from "vue";
import * as Icons from "@element-plus/icons-vue";
import type { MenuItem } from '@/types/component';

// const { $t } = i18n;
export default defineComponent({
  props: {
    data: {
      type: Array as PropType<MenuItem[]>,
      required: true,
      default: () => [],
    },
    router: {
      type: Boolean,
      default: false,
    },
    defaultActive: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const {t} = useI18n();
    const genItemSlots = (item: MenuItem) => {
      return {
        title: () => {
          return (
            <>
              {item.i && (
                <el-icon>
                  {item.i.render()}
                </el-icon>
              )}
              <span>{ t(`route.${item.name}`) }</span>
            </>
          );
        },
      };
    }
    const renderMenu = (data: MenuItem[]) => {
      return data.map((item: MenuItem) => {
        // 图标组件对象
        item.i = item.i ? Icons[item.i] : null;
        
        if (item.children && item.children.length) {
          const slots = genItemSlots(item);
          return (
            <>
              <el-sub-menu v-slots={slots} index={item.index}>
                {renderMenu(item.children)}
              </el-sub-menu>
            </>
          );
        }
        return (
          <>
            <el-menu-item index={item.index}>
              {item.i && (
                <el-icon>
                  {item.i.render()}
                </el-icon>
              )}
              <span>{ t(`route.${item.name}`) }</span>
            </el-menu-item>
          </>
        );
      });
    };

    return () => {
      return <el-menu router={props.router}>{renderMenu(props.data)}</el-menu>;
    };
  },
});
