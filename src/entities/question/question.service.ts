import {  Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryDTO } from 'src/dtos/category.dto';
import { CreateQuestionDto } from 'src/dtos/create-question.dto';
import { Question } from 'src/entities/question/question.entity';
import { Repository } from 'typeorm';



@Injectable()
export class QuestionService {
  
  constructor(@InjectRepository(Question) private questionRepository: Repository<Question>) { }
  
  async create(createQuestionDto: CreateQuestionDto) {
    return await this.questionRepository.save(createQuestionDto);
  }
  
  async findOne(id: number) {
    return await this.questionRepository.findOne({
      relations:{answers:true},
      where:{id:id}
    });
  }
  
  async find(categories:CategoryDTO[]=[])  {
    //example: 
    //http://localhost:3000/?categories[0][id]=1&categories[0][name]=Technical&categories[1][id]=3&categories[1][name]=Python
    
    const cats = categories.length!=0?categories.map(c=>{ return {categories:c}}):null; 
    return await this.questionRepository.find({
      relations:{categories:true},
      where:cats
    });
    }
    
    
  }
  