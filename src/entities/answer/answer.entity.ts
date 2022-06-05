import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Question } from "../question/question.entity";

@Entity()
export class Answer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    questionId: number;

    @Column()
    answerBody: string;

    @Column()
    authorId: number;

    @Column()
    likeCount: number;

    @Column()
    dislikeCount: number;

    @ManyToOne(() => Question, question => question.answers)
    question: Question;
}
