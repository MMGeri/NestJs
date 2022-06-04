class Category{
    public id: number;
    public name: string;
}

export class CreateQuestionDto {
    authorId: number;
    questionTitle: string;
    questionBody: string;
    categories: Category[];
}
