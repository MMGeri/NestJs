import { Body, Controller, Get, Param, ParseArrayPipe, Post, Query, Request, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/strategies/jwt-auth.guard';
import { CategoryDTO } from './dtos/category.dto';
import { CreateQuestionDto } from './dtos/create-question.dto';
import { CategoryService } from './entities/category/category.service';
import { QuestionService } from './entities/question/question.service';

@Controller('/')  //nest g controller smth
export class AppController {
  
  constructor(
    private readonly questions: QuestionService,
    private readonly categories: CategoryService
  ) {}
   
  
  @Get()
  async getAllQuestions(
    @Query('categories', new ParseArrayPipe({items: CategoryDTO}))
     categories: CategoryDTO[]
    ) {
      return this.questions.find(categories);
  }
  
  @Post('createQuestion')
  @UseGuards(JwtAuthGuard)
  createQuestion(@Body() question: CreateQuestionDto) {
    return this.questions.create(question);
  }

  @Get('getCategories')
  getCategories() {
    return this.categories.findAll();
  }
}



