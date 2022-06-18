import {  HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/dtos/create-user.dto';
import { User } from 'src/entities/user/user.entity';
import { Repository } from 'typeorm';

import * as bcrypt from 'bcrypt';


@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {

    if(await this.findOneByEmail(createUserDto.email))
    throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    
    //hash password
    const salt = await bcrypt.genSalt()
    createUserDto.password = await bcrypt.hash(createUserDto.password,salt)

    const user =  this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }

  async findOneById(id: number): Promise<User> {
    return await this.userRepository.findOneBy({id:id});
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.userRepository.findOneBy({email: email});
  }

}
