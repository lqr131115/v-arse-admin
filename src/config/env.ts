import type { EnvBaseConfig } from "@/types/app";

const env: string = import.meta.env.MODE;
const config: EnvBaseConfig = {
  development: {
    mockUrl: "/mock",
    baseUrl: "/api",
  },
  production: {
    mockUrl: "/api",
    baseUrl: "/api",
  },
};

export default {
  mock: false,
  ...config[env],
};
