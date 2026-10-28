import { Inject, Injectable } from "@nestjs/common";
import { AuthRepository } from "../repositories/auth.repository.js";
import { HashPasswordProvider } from "../providers/hash-password.provider.js";
import { type IAuthRepository } from "../contracts/auth-service.port";
import { LoginUser } from "../models/login-user.model";
import { type PasswordHasher } from "../contracts/password-hasher.port";
import { AuthError } from "../models/auth-error.model.js";

@Injectable()
export class AuthService {
  constructor(
    @Inject(AuthRepository) private authRepository: IAuthRepository,
    @Inject(HashPasswordProvider) private hashPasswordProvider: PasswordHasher,
  ) {}

  async login(data: LoginUser) {
    const credentials = await this.authRepository.findUserCredentials(data.email);
    const match = await this.hashPasswordProvider.verify(credentials.passwordHash, data.password);
    if (!match || !credentials) throw new AuthError("unauthorized");
    return {};
  }
}
