import { Controller, Get, Param, Query, Request, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/strategies/jwt-auth.guard';
import { Category } from './entities/category/category.entity';
import { QuestionService } from './entities/question/question.service';

@Controller('/')  //nest g controller smth
export class AppController {
  
  constructor(private readonly questions: QuestionService) {}
  
  @Get()
  async getAllQuestions(@Query('categories') categories: Category[]) {
    console.log(categories)
      return this.questions.find(categories);
  }
}



