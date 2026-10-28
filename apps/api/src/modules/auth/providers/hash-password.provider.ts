import { Injectable } from "@nestjs/common";
import argon2 from "argon2";
import { PasswordHasher } from "../contracts/password-hasher.port";

@Injectable()
export class HashPasswordProvider implements PasswordHasher {
  private readonly options: argon2.HashOptions = {
    type: argon2.argon2id,
    memoryCost: 19456,
    timeCost: 2,
    parallelism: 1,
  };

  async hash(password: string): Promise<string> {
    return argon2.hash(password, this.options);
  }
  verify(hash: string, password: string) {
    return argon2.verify(hash, password);
  }
}
