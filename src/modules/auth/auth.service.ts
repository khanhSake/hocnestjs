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
        return{
            access_token: this.jwtService.sign(payLoad),
        };
    }   
}
