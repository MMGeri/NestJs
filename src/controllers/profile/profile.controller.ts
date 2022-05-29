import { Controller, Get } from '@nestjs/common';

@Controller('profile')
export class ProfileController {

    @Get()
    getProfile(): string {
        return 'This action returns a user profile';
    }
    
}
