import { ConsoleLogger, Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
  constructor(
    private dbService: DatabaseService,
    private jwtService: JwtService
    ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.dbService.getUser(email);
    if (user && bcrypt.compareSync(password,user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.email, sub: user.id };
    console.log(payload);
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

}