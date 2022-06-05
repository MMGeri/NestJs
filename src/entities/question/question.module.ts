import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from 'src/entities/question/question.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Question])],
  providers: [QuestionService],
  exports: [QuestionService]
})
export class QuestionModule {}
