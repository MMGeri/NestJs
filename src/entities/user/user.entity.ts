import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Answer } from "../answer/answer.entity";
import { Question } from "../question/question.entity";
import { Exclude } from 'class-transformer';
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;

    @Column()
    @ApiProperty()
    name: string;

    @Column()
    @ApiProperty()
    email: string;

    @Column()
    @Exclude({ toPlainOnly: true })
    password: string;

    @Column()
    @ApiProperty({enum:['f','m']})
    gender: string;
    
    @OneToMany(type => Question, question => question.authorId )
    @ApiProperty({type:Question})
    questions: Question[];

    @OneToMany(type => Answer, answer => answer.authorId)
    @ApiProperty()
    answers: Answer[];

    constructor(partial: Partial<User>) {
        Object.assign(this, partial);
      }
}
