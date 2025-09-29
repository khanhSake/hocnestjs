import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { LoginMiddleware } from './middleware/login/login.middleware';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { ValidationError } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
  new ValidationPipe({
    transform:true,
    exceptionFactory: (validationErrors: ValidationError[] = []) => {
      return new BadRequestException(
        validationErrors.map((error) => ({
          [error.property]:Object.values(error.constraints!)[0],  
        })),
      );
    },
  }),
);
  // app.use(new LoginMiddleware().use);// dung cho toan bo ung dung, co th khai bao nhieu middleware chay lan luot
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
