import { Body, Controller, Post } from '@nestjs/common';
import { User } from 'src/other/DTOs/user.dto';
import { DatabaseService } from 'src/other/services/database/database.service';

@Controller('register')
export class RegisterController {

    constructor(private readonly db: DatabaseService) {}

    @Post()
    register(@Body() user: User): string {
        
        this.db.createUser(user);
        
        return 'User created!';
    }
}
