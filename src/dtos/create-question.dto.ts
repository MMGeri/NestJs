import { CategoryDTO } from "./category.dto";
import { Length, IsArray, IsInstance } from "class-validator";



export class CreateQuestionDto {
    authorId: number;

    @Length(10,100)
    questionTitle: string;

    @Length(10,500)
    questionBody: string;

    @IsArray()
    categories: CategoryDTO[];
}
