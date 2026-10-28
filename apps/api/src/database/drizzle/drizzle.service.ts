import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { EnvironmentSchema } from "../../config/validationSchema";
import { Pool } from "pg";
import { relations } from "./schemas/relations.js";

@Injectable()
export class DrizzleService implements OnModuleDestroy {
  readonly db: ReturnType<typeof drizzle>;
  private readonly pool: Pool;
  constructor(private config: ConfigService<EnvironmentSchema, true>) {
    this.pool = new Pool({
      connectionString: this.config.get("DATABASE_URL", { infer: true }),
    });
    this.db = drizzle({ client: this.pool, relations });
  }

  async onModuleDestroy() {
    await this.pool.end();
  }
}
