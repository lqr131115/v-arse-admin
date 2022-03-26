import type { Config } from "@/types/app";

const env: string = import.meta.env.MODE;
const config: Config = {
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
  mock: true,
  namespace: "aries_admin",
  ...config[env],
};
