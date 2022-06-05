import { ApiProperty } from '@nestjs/swagger';
import { Length, Equals, IsOptional } from 'class-validator';

export class CreateAnswerDto {

    @ApiProperty()
    questionId: number;

    @Length(10,500)
    @ApiProperty({minLength:10,maxLength:500,type:'string'})
    answerBody: string;
    
    @ApiProperty()
    authorId: number;

    @Equals(0)
    @IsOptional()
    @ApiProperty()
    likeCount: number = 0;

    @Equals(0)
    @IsOptional()
    @ApiProperty()
    dislikeCount: number = 0;
}
