import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Question } from "../question/question.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Answer {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;

    @Column()
    @ApiProperty()
    questionId: number;

    @Column()
    @ApiProperty()
    answerBody: string;

    @Column()
    @ApiProperty()
    authorId: number;

    @Column()
    @ApiProperty()
    likeCount: number;

    @Column()
    @ApiProperty()
    dislikeCount: number;

    @ManyToOne(() => Question, question => question.answers)
    @ApiProperty({type: () => Question})
    question: Question;
}
