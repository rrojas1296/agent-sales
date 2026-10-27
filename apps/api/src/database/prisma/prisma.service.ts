import { Injectable } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { EnvironmentSchema } from "../../config/validationSchema.js";
import { PrismaPg } from "@prisma/adapter-pg";

@Injectable()
export class PrismaService {
  constructor(config: ConfigService<EnvironmentSchema, true>) {
    const adapter = new PrismaPg({
      connectionString: config.get("DATABASE_URL", { infer: true }),
    });
  }
}
