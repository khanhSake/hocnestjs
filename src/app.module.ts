import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { ProductsModule } from './modules/products/products.module';
import { Product } from './entities/Product';
import { LoginMiddleware } from './middleware/login/login.middleware';
import { User1 } from './user/user1.entity';
import { User2Module } from './modules/user2/user2.module';
import { User2 } from './entities/user2';


@Module({
  imports: [UserModule,TypeOrmModule.forRoot({
    type: "mysql",
    host: "localhost",
    port: 3310,
    username: "root",
    password: "123456",
    database: "hocnestjs",
    entities:[User,Product, User1,User2],//Danh cac entities
    synchronize: true,// tu dong tao bang tu entities( chi sai trong giai doan development)
}), ProductsModule, User2Module],
  controllers: [AppController],
  providers: [AppService],
}
)
export class AppModule {
  configure(consumer: MiddlewareConsumer){
    consumer.apply(LoginMiddleware).forRoutes(/*  '*' de mac dinh toan bo router*/
      // {
      //   path: '/products/*',
      //   method: RequestMethod.GET
      // },
      // {
      //   path: '/products',
      //   method: RequestMethod.POST
      // }
    )
  }
}
