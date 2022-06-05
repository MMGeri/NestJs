import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, RelationOptions } from "typeorm";
import { Answer } from "../answer/answer.entity";
import { Category } from "../category/category.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Question {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    @ApiProperty()
    authorId: number;

    @Column()
    @ApiProperty()
    questionTitle: string;

    @Column()
    @ApiProperty()
    questionBody: string;

    @OneToMany(type => Answer, answer => answer.question)
    @ApiProperty({type:() => [Answer]})
    answers: Answer[];

    @ManyToMany(() => Category)
    @ApiProperty({type:[Category]})
    @JoinTable({name:'QuestionCategory'})
    categories: Category[];
}
