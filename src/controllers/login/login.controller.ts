import {  Controller,  Get,Body,  Post } from '@nestjs/common';

import {  Request, UseGuards } from '@nestjs/common';
import { ApiBody, ApiProperty } from '@nestjs/swagger';
import { AuthService } from 'src/auth/auth.service';
import { LocalAuthGuard } from 'src/auth/strategies/local-auth.guard';

class Credentials{

    @ApiProperty()
    username:string;

    @ApiProperty()
    password:string;
}

@Controller('login')
export class LoginController {

    constructor(private authService: AuthService) {}
   
    @Post()
    @UseGuards(LocalAuthGuard) 
    @ApiBody({type:Credentials,required:true})
    async login(@Request() req) {
        return this.authService.login(req.user);
    }
    
}
