import { CreateQuestionDto } from "./create-question.dto";
import { PartialType } from "@nestjs/swagger";


class Category{
    public id: number;
    public name: string;
}

export class UpdateQuestionDto extends PartialType(CreateQuestionDto){
    id: number;
    authorId: number;
    questionTitle: string;
    questionBody: string;
    categories: Category[];
}