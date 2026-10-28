import { Module } from "@nestjs/common";
import { AuthController } from "./controllers/auth.controller.js";
import { AuthService } from "./services/auth.service.js";
import { DatabaseModule } from "../../database/database.module.js";
import { HashPasswordProvider } from "./providers/hash-password.provider.js";
import { AuthRepository } from "./repositories/auth.repository.js";

@Module({
  controllers: [AuthController],
  providers: [AuthService, HashPasswordProvider, AuthRepository],
  imports: [DatabaseModule],
})
export class AuthModule {}
