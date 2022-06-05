import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/create-user.dto';
import { UserService } from 'src/entities/user/user.service';


@Controller('register')
export class RegisterController {
    
    constructor(private readonly users: UserService) {}
    
    @Post()
    async register(@Body() user: CreateUserDto) {
        return this.users.create(user);
    }

}
