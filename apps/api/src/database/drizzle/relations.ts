import { defineRelations } from "drizzle-orm";
import * as schema from "./schemas";

export const relations = defineRelations(schema, (r) => ({
  users: {
    sessions: r.many.authSessions({
      from: r.users.id,
      to: r.authSessions.userId,
    }),
  },
  authSessions: {
    user: r.one.users({
      from: r.authSessions.userId,
      to: r.users.id,
      optional: false,
    }),
  },
}));
