import { Module } from '@nestjs/common';
import { User2Service } from './user2.service';
import { User2Controller } from './user2.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User2 } from 'src/entities/User2s';

@Module({
  imports:[TypeOrmModule.forFeature([User2])],
  controllers: [User2Controller],
  providers: [User2Service],
  exports:[User2Service],
})
export class User2Module {}
