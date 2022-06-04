import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>) {}

  create(createUserDto: CreateUserDto) {
    const user =  this.usersRepository.create(createUserDto);
    return this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  findOneById(id: number): Promise<User> {
    return this.usersRepository.findOne({where:{id:id}});
  }

  findOneByEmail(email: string): Promise<User> {
    return this.usersRepository.findOne({where:{email: email}});
  }

  update( updateUserDto: UpdateUserDto) {
    const updatedUser = this.usersRepository.create(updateUserDto)
    return this.usersRepository.save(updatedUser);
  }

  remove(id: number) {
    return this.usersRepository.delete(id);
  }
}
