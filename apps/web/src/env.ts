import { createEnv } from "@t3-oss/env-nextjs";
import { type } from "arktype";

export const env = createEnv({
  client: {},
  emptyStringAsUndefined: true,
  experimental__runtimeEnv: process.env,
  server: {
    NODE_ENV: type("'development'|'test'|'production'"),
  },
  skipValidation: Boolean(process.env.SKIP_ENV_VALIDATION),
});
