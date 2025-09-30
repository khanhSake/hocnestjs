import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { User2Module } from '../user2/user2.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from 'src/passport/local.strategy';
import { JwtStrategy } from 'src/passport/jwt.strategy';
// import{JwtStrategy} from './jwt.strategy';

@Module({
  imports:[ 
    User2Module,
    PassportModule,
    JwtModule.register({
      secret:'asdasdasdadsa',//chuoi nay de lam gi , sinh ra chuoi nay nhu nao
      signOptions:{expiresIn:'1h'}
    })
  ],
  controllers: [AuthController],
  providers: [AuthService,LocalStrategy, JwtStrategy],
})
export class AuthModule {}
