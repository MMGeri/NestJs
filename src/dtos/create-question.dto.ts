import { CategoryDTO } from "./category.dto";
import { Length, IsArray, IsInstance } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";



export class CreateQuestionDto {
    @ApiProperty()
    authorId: number;

    @Length(10,100)
    @ApiProperty({minLength:10,maxLength:100,type:'string'})
    questionTitle: string;

    @Length(10,500)
    @ApiProperty({minLength:10,maxLength:500,type:'string'})
    questionBody: string;

    @IsArray()
    @ApiProperty({type:[CategoryDTO]})
    categories: CategoryDTO[];
}
