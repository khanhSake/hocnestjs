import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoginMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {

    let isAuth=false;
    if(!isAuth)
      return res.status(HttpStatus.UNAUTHORIZED).json({
        message:' chua dang nhap'
    });

    console.log('kiemtrane');
    req.user='Khanh';
    next();
  }
}
