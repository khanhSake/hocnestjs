import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User2Service } from '../user2/user2.service';
import { LocalAuthGuard } from 'src/guard/local-auth.guard';
import { JwtAuthGuard } from 'src/guard/jwt-auth.guard';

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
  
  @Get("/all")
  findAll(){
    return this.user2Service.findAll();
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  // login(@Body() dataLogin:any){
  //   const {email ='',password=''} =dataLogin;
  //   return this.user2Service.validateUser(email, password);
  // } //truoc khi dung guard
  login(@Request() req:any){
    return this.authService.login(req.user);// luu vao access token o phan auth
  }
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  profile(@Request() req:any){
    return req.user;
  }
}
