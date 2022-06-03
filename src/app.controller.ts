import { Controller, Get,  Body, Post, Query } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Header } from '@nestjs/common';
import { QuestionDTO } from './other/DTOs/question.dto';
import { ApiBody, ApiQuery } from '@nestjs/swagger';
// import { Param } from '@nestjs/common';

@Controller('/')  //nest g controller smth
export class AppController {
  constructor(private readonly db: DatabaseService) {}
  
  
  @Get()
  @Header('Content-type', 'application/json')
  @ApiQuery({ name: 'categories', required: false , type: [Number]})
  @ApiQuery({ name: 'searchQuery', required: false })
  async getQuestions(@Query('categories') categories: number[], @Query('searchQuery') searchQuery: string) {
    let questions:QuestionDTO[] = await this.db.getQuestions(categories,searchQuery);
    return questions;
  }

  @Post()
  createQuestion(@Body() question: QuestionDTO) {
    this.db.createQuestion(question);
  }

 
  //TODO: validate post requests with pipes
  //TODO: serialization

  //TODO: fix the swagger

  //TODO: kérdés létrehozásánál lehessen létrehozni uj tageket?
  //TODO: kérdések lekérésénél tömbben adja vissza a kategóriákat + a felhasználó nevét aki létrehozta


  //TODO: learn more typescript


  //No TypeOrm? :( kérdések felhasznalohoz kapcsolasa? 
}



