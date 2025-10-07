import { env } from "./env";

export default {
  providers: [
    {
      applicationID: "convex",
      domain: env.CONVEX_SITE_URL,
    },
  ],
};
