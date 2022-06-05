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
// import { QuestionCategoryModule } from './entities/question-category/question-category.module';


const dbOptions:SqliteConnectionOptions ={
  type: 'sqlite',
  database: 'database.sqlite',
  entities: ['dist/**/*.entity.{js,ts}'],
  synchronize: false,
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