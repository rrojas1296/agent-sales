import { UserCredentials } from "../models/user-credentials.model";

export interface IAuthRepository {
  findUserCredentials(email: string): Promise<UserCredentials>;
}
