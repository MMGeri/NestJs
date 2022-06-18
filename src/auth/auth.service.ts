import {  Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';
import { User } from 'src/entities/user/user.entity';
import { UserService } from 'src/entities/user/user.service';


@Injectable()
export class AuthService {
  constructor(
    private user: UserService,
    private jwtService: JwtService
    ) {}

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.user.findOneByEmail(email);
    console.log(user)
    if (user && bcrypt.compareSync(password,user.password)) {
      return user;
    }
    return null;
  }

  async login(user: User) {
    const payload = { username: user.email, sub: user.id };
    console.log(payload);
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

}