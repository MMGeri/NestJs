import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import * as bcrypt from 'bcrypt';
//TODO: import database

@Injectable()
export class AuthService {
  constructor(private dbService: DatabaseService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.dbService.getUser(email);
    console.log("request is here")
    if (user && bcrypt.compareSync(user.password, password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}