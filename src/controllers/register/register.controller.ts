import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { User } from 'src/other/DTOs/user.dto';
import { DatabaseService } from 'src/other/services/database/database.service';
import { HttpStatus } from '@nestjs/common';


@Controller('register')
export class RegisterController {

    constructor(private readonly dbService: DatabaseService) {}

    @Post()
    async register(@Body() user: User) {
        if(await this.dbService.createUser(user))
            // res.redirect('/');
            return {
                url: '/',
                message: 'User created successfully'
            }
        else
            throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

}
