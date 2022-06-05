import { Body, Controller, Get, Param, Post, Query, Request, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/strategies/jwt-auth.guard';
import { Category } from './entities/category/category.entity';
import { CategoryService } from './entities/category/category.service';
import { QuestionService } from './entities/question/question.service';

@Controller('/')  //nest g controller smth
export class AppController {
  
  constructor(
    private readonly questions: QuestionService,
    private readonly categories: CategoryService
  ) {}
   
  
  @Get()
  async getAllQuestions(@Query('categories') categories: Category[]) {
      return this.questions.find(categories);
  }

  @Post('createQuestion')
  createQuestion(@Body() question: any) {
    return this.questions.create(question);
  }

  @Get('getCategories')
  getCategories() {
    return this.categories.findAll();
  }
}



