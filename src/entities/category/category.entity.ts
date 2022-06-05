import { Column, Entity, PrimaryColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Category {
    @PrimaryColumn()
    @ApiProperty()
    id: number;

    @Column()
    @ApiProperty()
    name: string;
}
