import { ConsoleLogger, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuestionDto } from 'src/dtos/create-question.dto';
import { Question } from 'src/entities/question/question.entity';
import { ArrayContains, ArrayOverlap, Equal, Like, Repository } from 'typeorm';
import { Category } from '../category/category.entity';



@Injectable()
export class QuestionService {
  
  constructor(@InjectRepository(Question) private questionRepository: Repository<Question>) { }
  
  create(createQuestionDto: CreateQuestionDto) {
    return this.questionRepository.save(createQuestionDto);
  }
  
  findOne(id: number) {
    return this.questionRepository.findOne({
      relations:{answers:true},
      where:{id:id}
    });
  }
  
  find(categories:Category[]=[]){
    //TODO: fix, only id array
    //example: http://localhost:3000/?categories[0][id]=1&categories[0][name]=Technical&categories[1][id]=3&categories[1][name]=Python
    const cats = categories.map(c=>{ return {categories:c}}); 
    return this.questionRepository.find({
      relations:{categories:true},
      where:cats
    });
    }
    
    
  }
  