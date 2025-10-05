import { defineSchema } from "convex/server";

import { profilesSchema } from "./schema/profiles";

const schema = defineSchema({
  ...profilesSchema,
});

export default schema;
