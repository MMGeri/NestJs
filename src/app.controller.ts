import { Body, Controller, Get, Param, ParseArrayPipe, Post, Query, Request, Res, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiOkResponse, ApiParam, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from './auth/strategies/jwt-auth.guard';
import { CategoryDTO } from './dtos/category.dto';
import { CreateQuestionDto } from './dtos/create-question.dto';
import { CategoryService } from './entities/category/category.service';
import { Question } from './entities/question/question.entity';
import { QuestionService } from './entities/question/question.service';

@Controller('/')  //nest g controller smth
export class AppController {
  
  constructor(
    private readonly questions: QuestionService,
    private readonly categories: CategoryService
  ) {}
   
  
  @Get()
  @ApiOkResponse({type: [Question]})
  @ApiQuery({
    name: 'categories', 
    type: [CategoryDTO], 
    required: false, 
    description: 'Categories to filter questions',
    example: [{id:1,name:"Technical"}], //"/?categories[0][id]=1&categories[0][name]=Technical"
  })
  async getAllQuestions(
    @Query('categories', new ParseArrayPipe({items: CategoryDTO, optional:true}))
     categories: CategoryDTO[]
    ) {
      return this.questions.find(categories);
  }

  @Post('createQuestion')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiBody({type: CreateQuestionDto, description: 'Question to create'})
  @ApiCreatedResponse({type: Question})
  @ApiResponse({status: 401, description: 'Unauthorized'})
  createQuestion(@Body() question: CreateQuestionDto) {
    return this.questions.create(question);
  }

  @Get('getCategories')
  @ApiOkResponse({type: [CategoryDTO], description: 'Return all categories in the database'})
  getCategories() {
    return this.categories.findAll();
  }
}



