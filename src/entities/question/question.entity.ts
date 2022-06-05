import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, RelationOptions } from "typeorm";
import { Answer } from "../answer/answer.entity";
import { Category } from "../category/category.entity";


@Entity()
export class Question {

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    authorId: number;

    @Column()
    questionTitle: string;

    @Column()
    questionBody: string;

    @OneToMany(type => Answer, answer => answer.question)
    answers: Answer[];

    @ManyToMany(() => Category)
    @JoinTable({name:'QuestionCategory'})
    categories: Category[];
}
