import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User2 } from 'src/entities/User2s';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class User2Service {
    constructor(
        @InjectRepository(User2) 
        private readonly user2Repos: Repository<User2>
    ){}

    async createUser(userData: Partial<User2>): Promise<User2>{
        const user=this.user2Repos.create(userData);
        const hashPass=await bcrypt.hash(userData.password,10);
        user.password=hashPass;
        return this.user2Repos.save(user);
    }

    findAll(){
        return this.user2Repos.find();
    }

    findByEmail(email:string){
        const user=this.user2Repos.findOneBy({email});
        return user;
    }

    async validateUser(email:string,password:string){
        const user= await this.findByEmail(email);
        if(!user){
            return null;
        }
        const status=bcrypt.compareSync(password,user.password);
        if(status){
            return user;
        }
        return null;
    }

}
