import { Body, Controller, Param, Post } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

import {  Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// import { HttpStatus } from '@nestjs/common';
// import { HttpException } from '@nestjs/common';

@Controller('login')
export class LoginController {
    
    constructor(private readonly dbService: DatabaseService) {}


    @UseGuards(AuthGuard('local')) //passport strategy neve local
    @Post()
    async login(@Request() req) {
        return req.user;
    }

    // @Post()
    // async login(@Body('email') email:string, @Body('password') password:string) {
    //     if(await this.dbService.getUser(email) != null)
    //     // res.redirect('/');
    //     return {
    //         url: '/',
    //         message: 'Login succesful'
    //     }
    //     else
    //     throw new HttpException('Bad credentials', HttpStatus.UNAUTHORIZED);
       
    // }
    
}
