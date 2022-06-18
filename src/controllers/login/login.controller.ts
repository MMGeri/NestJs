import {  Controller, Post } from '@nestjs/common';
import {  Request, UseGuards } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiProperty, ApiResponse } from '@nestjs/swagger';
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
    @ApiBody({type:Credentials,required:true, description:"Requires email and password"})
    @ApiOkResponse({description: "Logs-in, returns a JWT token"})
    @ApiResponse({status: 401, description: 'Unauthorized'})
    async login(@Request() req) {
        return this.authService.login(req.user);
    }
    
}
