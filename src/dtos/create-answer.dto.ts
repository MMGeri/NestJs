export class CreateAnswerDto {
    questionId: number;
    answerBody: string;
    authorId: number;
    likeCount: number;
    dislikeCount: number;
}
