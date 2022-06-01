import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

import {  Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/strategies/jwt-auth.guard';

@Controller('profile')
export class ProfileController {

    constructor(private dbService: DatabaseService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    async getProfile(@Request() req) {
        return req.user;
    }
    
}
