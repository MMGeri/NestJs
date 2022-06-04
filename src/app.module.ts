import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import {ConfigModule } from '@nestjs/config';
import { QuestionsModule } from './questions/questions.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';

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
    UsersModule,
    QuestionsModule,
  ],
  controllers: [
    AppController,

  ],
  providers: [
    AppService,
  ], 
})
export class AppModule {}