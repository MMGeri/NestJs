import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAnswerDto } from 'src/dtos/create-answer.dto';
import { Repository } from 'typeorm';
import { Answer } from './answer.entity';


@Injectable()
export class AnswerService {

  constructor(@InjectRepository(Answer) private readonly answerRepository: Repository<Answer>) {}

  create(createAnswerDto: CreateAnswerDto) {
    return this.answerRepository.save(createAnswerDto);
  }

  likeAnswer(answerId: number) {
    return this.answerRepository.increment({id:answerId}, 'likeCount', 1);
  }

  dislikeAnswer(answerId: number) {
    return this.answerRepository.decrement({id:answerId}, 'dislikeCount', 1);
  }
  
}
