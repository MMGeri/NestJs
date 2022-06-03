import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';


export class AnswerDTO{
    @ApiProperty()
    @ApiPropertyOptional()
    authorId: number;

    @ApiProperty()
    questionId: number;

    @ApiProperty()
    answerBody: string;
    
    @ApiProperty()
    likeCount: number;
    
    @ApiProperty()
    dislikeCount: number;
}