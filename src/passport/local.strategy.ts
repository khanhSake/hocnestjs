import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { User2Service } from "src/modules/user2/user2.service";


@Injectable()
 export class LocalStrategy  extends PassportStrategy (Strategy){
    constructor (private readonly userService: User2Service){
        super({usernameField:'email'});
    }
    async validate(email: string, password:string){
        const user=await this.userService.validateUser(email,password);
        if(!user){
            throw new UnauthorizedException('loi nguoi dung')
        }
        return user;
    }
}