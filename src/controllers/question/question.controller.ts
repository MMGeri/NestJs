import { Controller, Get, Param, Post, Body, ConsoleLogger, Req, HttpException } from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/strategies/jwt-auth.guard';
import { CreateAnswerDto } from 'src/dtos/create-answer.dto';

import { AnswerService } from 'src/entities/answer/answer.service';
import { QuestionService } from 'src/entities/question/question.service';

@Controller('question')
export class QuestionController {
    constructor
    (
        private readonly questions: QuestionService, 
        private readonly answers: AnswerService
    ) {}
    

    @Get(':id')
    async getQuestion(@Param('id') id: number) {
        return this.questions.findOne(id);
    }

    @Post('createAnswer')
    @UseGuards(JwtAuthGuard)
    createAnswer(@Body() answer: CreateAnswerDto, @Req() req) {
        if(req.user.id == answer.authorId) 
            return this.answers.create(answer);
        throw new HttpException('Unauthorized', 401);
    }


    @Post('like')
    @UseGuards(JwtAuthGuard)
    likeAnswer(@Body('answerId')answerId: number) {
        return this.answers.likeAnswer(answerId);
    }

    //ahoz hogy egy felhasználo csak egyszer tudjun likeolni-dislikeolni elkéne tárolni a felhasználó által likeolt id-ket


    @Post('dislike')
    @UseGuards(JwtAuthGuard)
    dislikeAnswer(@Body('answerId')answerId: number) {
        return this.answers.dislikeAnswer(answerId);
    }
    
}
