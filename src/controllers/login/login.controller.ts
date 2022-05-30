import { Body, Controller, Param, Post } from '@nestjs/common';
import { DatabaseService } from 'src/other/services/database/database.service';
import { HttpStatus } from '@nestjs/common';
import { HttpException } from '@nestjs/common';

@Controller('login')
export class LoginController {
    
    constructor(private readonly dbService: DatabaseService) {}

    @Post()
    async login(@Body('email') email:string, @Body('password') password:string) {
        if(await this.dbService.getUser(email,password) != null)
        // res.redirect('/');
        return {
            url: '/',
            message: 'Login succesful'
        }
        else
        throw new HttpException('Bad credentials', HttpStatus.UNAUTHORIZED);
       
    }
    
}
