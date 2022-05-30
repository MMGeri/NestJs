import { Controller, Get, Post } from '@nestjs/common';

@Controller('question')
export class QuestionController {
    constructor() {}

    @Get(':id')
    getQuestion(id: string): string {
        return `This action returns a #${id} question`;
    }

    //TODO: guard
    @Post()
    postAnswer(): string {
        return 'This action adds an answer';
    }

    //TODO: guard
    @Post()
    likeQuestoin(): string {
        return 'This action likes a question';
    }
    
}
