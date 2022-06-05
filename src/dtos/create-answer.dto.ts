import { Length, Equals, IsOptional } from 'class-validator';

export class CreateAnswerDto {

    questionId: number;

    @Length(10,500)
    answerBody: string;

    authorId: number;

    @Equals(0)
    @IsOptional()
    likeCount: number = 0;

    @Equals(0)
    @IsOptional()
    dislikeCount: number = 0;
}
