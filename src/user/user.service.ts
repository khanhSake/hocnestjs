import {Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';


// import { DatabaseService } from 'src/db/database.service';

// @Injectable(/*{scope:Scope.REQUEST}*/)//tao moi lan gui req
@Injectable(/*{scope:Scope.TRANSIENT}*/)// moi lan dc inject vao class khac thi se dc goi lai
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ){}
    // constructor( private readonly db:DatabaseService){
    //     console.log('instance service');// tao 1 lan mac dinh
    // }

    findAll():Promise<User[]>{
        return this.userRepository.find();
    }

    findId(id: number): Promise<User|null>{
        return this.userRepository.findOneBy({id});
    }

    create(userData: Partial<User>): Promise<User>{
        const user= this.userRepository.create(userData);
        return this.userRepository.save(user);   
    }
    async update(id:number, userData:Partial<User>):Promise<User|null>{
        await this.userRepository.update(id,userData);
        return this.userRepository.findOneBy({id});
    }
    async delete(id:number){
        const user= await this.userRepository.findOneBy({id});
        await this.userRepository.delete(id);
        return user;
    }

    getHelloUser(){
        // return this.db.fillAll();
    }
}
