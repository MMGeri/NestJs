import { Controller, Post } from '@nestjs/common';

@Controller('login')
export class LoginController {

    @Post()
    login(): string {
        return 'This login';
    }

}
