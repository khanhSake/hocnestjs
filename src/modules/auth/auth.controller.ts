import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User2Service } from '../user2/user2.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly user2Service:User2Service
  ) {}

  @Post('/signUp')
  signUp(@Body()userData:any){
    return this.user2Service.createUser(userData);
  }

}
