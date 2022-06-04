import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Answer{
    @PrimaryColumn()
    id: number;

    @Column()
    questionId: number;

    @Column()
    authorId: number;

    @Column()
    answerBody: string;

    @Column()
    likeCount: number;

    @Column()
    dislikeCount: number;
}