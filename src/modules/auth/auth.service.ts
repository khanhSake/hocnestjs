import { Injectable } from '@nestjs/common';
import { User2Service } from '../user2/user2.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    
    constructor(
        private readonly user2Service:User2Service, 
        private readonly jwtService: JwtService,
    ){}
    async login(user2: any){// luu vao jwt
        const payLoad={email:user2.email,sub:user2.id};
        const refereshToken= this.jwtService.sign(payLoad,{ expiresIn: '7d',});
        this.user2Service.saveRefereshToken(refereshToken,user2.id);
        return{
            access_token: this.jwtService.sign(payLoad),
            referesh_token: refereshToken,// neen luu o bang khac khong luu chung voi user2 de tranh danh nhap nhieu thieet bi thi se gap loi

        };
    }

    async veryfiyRefershToken(refereshtoken:string){
        const decode = this.jwtService.decode(refereshtoken)
        if(decode){
          return this.user2Service.verifyRefereshToken(refereshtoken,decode.sub);// Token de lam gi , referesh token de lam gi, cau truc cua token,
        }              
        return false;
    }   
}
