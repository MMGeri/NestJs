import { Column, Entity } from "typeorm";


export class Category{
    @Column()
    id: number;
    @Column()
    name: string;
}