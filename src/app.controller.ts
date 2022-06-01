import { Controller, Get,  HttpCode, Post, Query } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Question } from './other/interfaces/question.interface';
import { Category } from './other/DTOs/category.dto';
import { Header } from '@nestjs/common';
// import { Param } from '@nestjs/common';

@Controller('/')  //nest g controller smth
export class AppController {
  constructor(private readonly db: DatabaseService) {}
  
  
  @Get()
  @Header('Content-type', 'application/json')
  async getQuestions(@Query('categories') categories: number[], @Query('searchQuery') searchQuery: string) {
    let questions:Question[] = await this.db.getQuestions(categories,searchQuery);
    return questions;
  }

  @Post()
  createQuestion(question: Question) {
    //TODO:
  }

  // @Get('*')
  // @HttpCode(404)
  // test(){
  //   //throw exception?
  //   return '404 Not Found';
  // }
  //TODO: exception filter
  
  
  //joi or class validation
  //https://docs.nestjs.com/pipes#class-validator
  //https://docs.nestjs.com/pipes#object-schema-validation
  //TODO: validate post requests with pipes

  //TODO: guard or jwt
  //authorization with guards
}



