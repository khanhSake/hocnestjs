import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { User2Module } from '../user2/user2.module';

@Module({
  imports:[ User2Module],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
