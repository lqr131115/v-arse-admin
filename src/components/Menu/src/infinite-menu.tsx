import { defineComponent, PropType } from "vue";
import * as Icons from "@element-plus/icons-vue";
import type { MenuItem } from '@/types/component';
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
    let renderMenu = (data: MenuItem[]) => {
      return data.map((item: MenuItem) => {
        item.i = (Icons as any)[item.icon!];
        let slots = {
          title: () => {
            return (
              <>
                {item.i && (
                  <el-icon>
                    <item.i />
                  </el-icon>
                )}
                <span>{item.name}</span>
              </>
            );
          },
        };
        if (item.children && item.children.length) {
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
                  <item.i />
                </el-icon>
              )}
              <span>{item.name}</span>
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
