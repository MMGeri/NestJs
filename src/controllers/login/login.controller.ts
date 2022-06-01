import {  Controller,  Get,  Post } from '@nestjs/common';

import {  Request, UseGuards } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/strategies/jwt-auth.guard';
import { LocalAuthGuard } from 'src/auth/strategies/local-auth.guard';



@Controller('login')
export class LoginController {

    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard) 
    @Post()
    async login(@Request() req) {
        return this.authService.login(req.user);
    }
    
    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
    return req.user;
    }
}
