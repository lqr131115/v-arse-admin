import type { RouteLocationRaw, Router } from 'vue-router';
import { PageEnum } from '@/enums/pageEnum';
import { unref } from 'vue';
import { useRouter } from 'vue-router';

const REDIRECT_NAME = 'Redirect'

export type RouteLocationRawEx = Omit<RouteLocationRaw, 'path'> & { path: PageEnum };

export const useRedo = (_router?: Router) => {
  const { push, currentRoute } = _router || useRouter();
  const { query, params = {}, name, fullPath } = unref(currentRoute.value);
  function redo(): Promise<boolean> {
    return new Promise((resolve) => {
      if (name === REDIRECT_NAME) {
        resolve(false);
        return;
      }
      if (name && Object.keys(params).length > 0) {
        params['_redirect_type'] = 'name';
        params['path'] = String(name);
      } else {
        params['_redirect_type'] = 'path';
        params['path'] = fullPath;
      }
      push({ name: REDIRECT_NAME, params, query }).then(() => resolve(true));
    });
  }
  return redo;
};
