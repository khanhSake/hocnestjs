import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt } from "passport-jwt";
import { Strategy } from "passport-jwt";
import { User2Service } from "src/modules/user2/user2.service";

@Injectable()//decode tu jwt

export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(private readonly user2Service:User2Service){
        super({            
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false, 
            secretOrKey:
            "asdasdasdadsa",
        });
        
    }
    async validate(payLoad:any){
        // return{id:payLoad.sub,email:payLoad.email};
        const email =payLoad.email;
        const user= await this.user2Service.findByEmail(email);// lay toan bo info tu email
        return user;
    }
    
}