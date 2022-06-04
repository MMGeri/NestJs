import { Controller, Get, Res } from '@nestjs/common';

@Controller('/')  //nest g controller smth
export class AppController {
  
  
  @Get()
  async getQuestions(@Res() res) {
    return res.status(200).redirect('/questions');
  }
}



