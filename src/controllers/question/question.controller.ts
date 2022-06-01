import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { AnswerDTO } from 'src/other/DTOs/answer.dto';

@Controller('question')
export class QuestionController {
    constructor(private dbService:DatabaseService) {}

    @Get(':id')
    async getQuestion(@Param('id') id: number) {
        console.log(id);
        return {question: await this.dbService.getSingleQuestion(id), answers: await this.dbService.getAllAnswers(id)};
    }

    //TODO: guard
    @Post('createAnswer')
    createAnswer(@Body() answer: AnswerDTO) {
        //TODO: send if question is created or not depending on validators
        this.dbService.createAnswer(answer);
        return 'Ok';
    }

    //TODO: guard
    @Post('like')
    likeAnswer(@Body('answerId')answerId: number) {
        this.dbService.likeAnswer(answerId);
        return 'Ok';
    }
    
}
