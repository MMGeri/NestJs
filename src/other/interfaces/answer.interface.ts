export interface Answer{
    id: number;
    authorId: number;
    questionId: number;
    answerBody: string;
    likeCount: number;
    dislikeCount: number;
}