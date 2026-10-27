import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module.js";
import { ConfigService } from "@nestjs/config";
import { EnvironmentSchema } from "./config/validationSchema.js";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService<EnvironmentSchema, true>);
  await app.listen(config.get("PORT", { infer: true }));
}
await bootstrap();
