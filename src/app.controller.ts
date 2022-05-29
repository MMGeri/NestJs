import { Controller, Get,  HttpCode } from '@nestjs/common';
import { DatabaseService } from './other/services/database/database.service';
import { Question } from './other/interfaces/question.interface';
import { Header } from '@nestjs/common';
// import { Param } from '@nestjs/common';

@Controller('/')  //nest g controller smth
export class AppController {
  constructor(private readonly db: DatabaseService) {}
  
  
  @Get()
  @Header('Content-type', 'application/json')
  async getQuestions() {
    //TODO: check for filters in query
    let questions:Question[] = await this.db.getQuestions();
    return questions;
  }

  @Get('*')
  @HttpCode(404)
  test(){
    //throw exception?
    return '404 Not Found';
  }
  

  //TODO: validate post requests with pipes?

}



