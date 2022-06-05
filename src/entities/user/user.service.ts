import {  HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/dtos/create-user.dto';
import { User } from 'src/entities/user/user.entity';
import { Repository } from 'typeorm';


@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

  async create(createUserDto: CreateUserDto) {
    if (await this.findOneByEmail(createUserDto.email)) {
    const user =  this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
    }
    throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
  }

  findOneById(id: number): Promise<User> {
    return this.userRepository.findOneBy({id:id});
  }

  findOneByEmail(email: string): Promise<User> {
    console.log(email);
    return this.userRepository.findOneBy({email: email});
  }

}
