import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthService } from './auth.service';

@Controller('user')
export class UserController {
    constructor( private readonly userService: UserService, private readonly authService: AuthService){
        // console.log('instance co');
    }
    @Get()
    index(/*@Query() query: any*/){
        // // return [this.userService.getHelloUser(),this.authService.login()];
        // return {
        //     keyword: query.keyword,//?keyword=...&cate=....&cate=....
        //     cate: query.keyword,
        // };
        
        return this.userService.findAll();
    }

    @Get('/:id1')
    getInfor(@Param('id1') id: string){
        return this.userService.findId(+id); 
    }
    @Post()
    createUser(@Body() body:any){
        return this.userService.create(body);
    }
    @Patch(':id')
    update(@Param('id') id:string,@Body() body: any){
        return this.userService.update(+id,body);
    }

    @Delete(':id')
    deleteUser(@Param('id')id: string){
        return this.userService.delete(+id);
    }
}
