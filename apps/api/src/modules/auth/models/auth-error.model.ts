export class AuthError extends Error {
  constructor(code: "unauthorized" | "conflict" | "forbidden" | "invalid" | "incorrect_password") {
    super(code);
  }
}
