import { defineRelations } from "drizzle-orm";
import * as schema from "./index.js";

export const relations = defineRelations(schema, (r) => ({
  authSession: {
    userId: r.one.users({
      from: r.authSession.id,
      to: r.users.id,
    }),
  },
}));
