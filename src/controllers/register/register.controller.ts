import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiResponse } from '@nestjs/swagger';
import { CreateUserDto } from 'src/dtos/create-user.dto';
import { UserService } from 'src/entities/user/user.service';


@Controller('register')
export class RegisterController {
    
    constructor(private readonly users: UserService) {}
    
    @Post()
    @ApiCreatedResponse({type: CreateUserDto})
    @ApiBody({type: CreateUserDto, description: 'User to create'})
    @ApiResponse({status: 401, description: 'Unauthorized'})
    async register(@Body() user: CreateUserDto) {
        return this.users.create(user);
    }

}
