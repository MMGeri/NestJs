import {  Controller,  Get,Body,  Post } from '@nestjs/common';

import {  Request, UseGuards } from '@nestjs/common';
import { ApiBasicAuth, ApiBearerAuth, ApiBody, ApiOAuth2, ApiOkResponse, ApiProperty, ApiResponse } from '@nestjs/swagger';
import { AuthService } from 'src/auth/auth.service';
import { LocalAuthGuard } from 'src/auth/strategies/local-auth.guard';
import { User } from 'src/entities/user/user.entity';

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
    @ApiBody({type:Credentials,required:true, description:"Requires email and password"})
    @ApiOkResponse({description: "Logs-in, returns a JWT token and the User object"})
    @ApiResponse({status: 401, description: 'Unauthorized'})
    async login(@Request() req) {
        return this.authService.login(req.user);
    }
    
}
