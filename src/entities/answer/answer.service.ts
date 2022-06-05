import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAnswerDto } from 'src/dtos/create-answer.dto';
import { Repository } from 'typeorm';
import { Answer } from './answer.entity';


@Injectable()
export class AnswerService {

  constructor(@InjectRepository(Answer) private readonly answerRepository: Repository<Answer>) {}

  create(createAnswerDto: CreateAnswerDto) {
    return ;
  }

  find(questionId:number=null) {
    return `This action returns all answer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} answer`;
  }

  likeAnswer(answerId: number) {
    return this.answerRepository.increment({id:answerId}, 'likes', 1);
  }

  dislikeAnswer(answerId: number) {
    return this.answerRepository.decrement({id:answerId}, 'likes', 1);
  }
  
}
