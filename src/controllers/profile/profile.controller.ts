import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Controller('profile')
export class ProfileController {

    constructor(private dbService: DatabaseService) {}

    @Get()
    async getProfile() {
        const user = await this.dbService.getUser()
        if(user)
            return user;
        throw new HttpException("Unauthorized", HttpStatus.UNAUTHORIZED);
    }
    
}
