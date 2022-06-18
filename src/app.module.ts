import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';

import { AuthModule } from './auth/auth.module';
import {ConfigModule } from '@nestjs/config';


import { UserModule } from './entities/user/user.module';
import { QuestionModule } from './entities/question/question.module';
import { CategoryModule } from './entities/category/category.module';
import { AnswerModule } from './entities/answer/answer.module';

import { QuestionController } from './controllers/question/question.controller';
import { LoginController } from './controllers/login/login.controller';
import { ProfileController } from './controllers/profile/profile.controller';
import { RegisterController } from './controllers/register/register.controller';

import { User } from './entities/user/user.entity';
import { Question } from './entities/question/question.entity';
import { Category } from './entities/category/category.entity';
import { Answer } from './entities/answer/answer.entity';


const dbOptions:SqliteConnectionOptions ={
  type: 'sqlite',
  database: 'database.sqlite',
  entities:[User,Question,Category,Answer],
  synchronize: false,
  // logging:true
}


@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({isGlobal:true}), 
    TypeOrmModule.forRoot(dbOptions),

    AnswerModule,
    CategoryModule,
    UserModule,
    QuestionModule,
  ],
  controllers: [
    AppController,
    QuestionController,
    LoginController,
    ProfileController,
    RegisterController
  ]
})
export class AppModule {}