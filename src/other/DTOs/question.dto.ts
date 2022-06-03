import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Category } from './category.dto';

export class QuestionDTO {
    @ApiProperty()
    @ApiPropertyOptional()
    id: number;

    @ApiProperty()
    authorId: number;

    @ApiProperty()
    questionTitle: string;

    @ApiProperty()
    questionBody: string;

    @ApiProperty()
    categories: Category[];
    //TODO: categories
}