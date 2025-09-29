import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User2 } from 'src/entities/User2s';
import { Repository } from 'typeorm';

@Injectable()
export class User2Service {
    constructor(
        @InjectRepository(User2) 
        private readonly user2Repos: Repository<User2>
    ){}

    createUser(userData: Partial<User2>): Promise<User2>{
        const user=this.user2Repos.create(userData);
        return this.user2Repos.save(user);
    }
}
