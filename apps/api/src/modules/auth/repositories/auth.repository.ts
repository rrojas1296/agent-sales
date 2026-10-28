import { Injectable } from "@nestjs/common";
import { IAuthRepository } from "../contracts/auth-service.port.js";
import { UserCredentials } from "../models/user-credentials.model.js";
import { DrizzleService } from "../../../database/drizzle/drizzle.service.js";
import { users } from "../../../database/drizzle/schemas/index.js";
import { eq } from "drizzle-orm";

@Injectable()
export class AuthRepository implements IAuthRepository {
  constructor(private readonly drizzle: DrizzleService) {}

  async findUserCredentials(email: string): Promise<UserCredentials> {
    const [user] = await this.drizzle.db
      .select({
        id: users.id,
        passwordHash: users.passwordHash,
      })

      .from(users)
      .where(eq(users.email, email));
    return user;
  }
}
