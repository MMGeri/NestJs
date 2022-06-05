import { Controller, Get } from '@nestjs/common';

import {  Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/strategies/jwt-auth.guard';
import { ApiBearerAuth} from '@nestjs/swagger';

@Controller('profile')
export class ProfileController {

    @Get()
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    async getProfile(@Request() req) {
        return req.user;
    }
    
}
