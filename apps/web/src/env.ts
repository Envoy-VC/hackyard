import { createEnv } from "@t3-oss/env-nextjs";
import { type } from "arktype";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_CONVEX_URL: type("string"),
  },
  emptyStringAsUndefined: true,
  experimental__runtimeEnv: {
    NEXT_PUBLIC_CONVEX_URL: process.env.NEXT_PUBLIC_CONVEX_URL,
  },
  server: {
    NODE_ENV: type("'development'|'test'|'production'"),
  },
  skipValidation: Boolean(process.env.SKIP_ENV_VALIDATION),
});
