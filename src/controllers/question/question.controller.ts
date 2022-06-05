import { Controller, Get, Param, Post, Body, ConsoleLogger, Req, HttpException } from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiOkResponse, ApiParam, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/strategies/jwt-auth.guard';
import { CreateAnswerDto } from 'src/dtos/create-answer.dto';
import { Answer } from 'src/entities/answer/answer.entity';

import { AnswerService } from 'src/entities/answer/answer.service';
import { Question } from 'src/entities/question/question.entity';
import { QuestionService } from 'src/entities/question/question.service';

@Controller('question')
export class QuestionController {
    constructor
    (
        private readonly questions: QuestionService, 
        private readonly answers: AnswerService
    ) {}
    

    @Get(':id')
    @ApiParam({name: 'id', type: Number, required: true,description: 'Question id'})
    @ApiOkResponse({type: Question})
    async getQuestion(@Param('id') id: number) {
        return this.questions.findOne(id);
    }

    @Post('createAnswer')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiBody({type: CreateAnswerDto, description: 'Answer to create'})
    @ApiCreatedResponse({type: Answer})
    @ApiResponse({status: 401, description: 'Unauthorized'})
    createAnswer(@Body() answer: CreateAnswerDto, @Req() req) {
        if(req.user.id == answer.authorId) 
            return this.answers.create(answer);
        throw new HttpException('Unauthorized', 401);
    }


    @Post('like')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiBody({schema:{example:{answerId:1}},description: 'Answer to like'})
    @ApiResponse({status: 401, description: 'Unauthorized'})
    @ApiOkResponse({description:"Answer liked"})
    likeAnswer(@Body('answerId')answerId: number) {
        return this.answers.likeAnswer(answerId);
    }

    //ahoz hogy egy felhasználo csak egyszer tudjun likeolni-dislikeolni elkéne tárolni a felhasználó által likeolt id-ket


    @Post('dislike')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiBody({schema:{example:{answerId:1}},description: 'Answer to dislike'})
    @ApiResponse({status: 401, description: 'Unauthorized'})
    @ApiOkResponse({description:"Answer disliked"})
    dislikeAnswer(@Body('answerId')answerId: number) {
        return this.answers.dislikeAnswer(answerId);
    }
    
}
