import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "../services/auth.service.js";
import { loginSchema, type LoginDto } from "../dtos/login-schema.dto.js";
import { ZodValidationPipe } from "../../../common/pipes/zod-validation.pipe.js";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post("login")
  loginUser(@Body(new ZodValidationPipe(loginSchema)) body: LoginDto) {
    console.log({ body });
    return [];
  }

  @Post("register")
  registerUser() {}
}
