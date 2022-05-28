import { Body, Controller, Post } from '@nestjs/common';
import { User } from '../DTOs/user.dto';

@Controller('register')
export class RegisterController {

    @Post()
    register(@Body() user: User): string {
        //TODO inject service of dao and call register method
        return 'User created!';
    }
}
