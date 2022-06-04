import { Column, Entity, PrimaryGeneratedColumn, TableForeignKey } from "typeorm";

@Entity()
export class Question {

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    authorId: number;

    @Column()
    questionTitle: string;
    questionBody: string;
}
