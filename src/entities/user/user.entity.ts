import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Answer } from "../answer/answer.entity";
import { Question } from "../question/question.entity";
import { Exclude } from 'class-transformer';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    @Exclude({ toPlainOnly: true })
    password: string;

    @Column()
    gender: string;
    
    @OneToMany(type => Question, question => question.authorId )
    questions: Question[];

    @OneToMany(type => Answer, answer => answer.authorId)
    answers: Answer[];

    constructor(partial: Partial<User>) {
        Object.assign(this, partial);
      }
}
