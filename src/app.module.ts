import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import {ConfigModule } from '@nestjs/config';
import { QuestionsModule } from './questions/questions.module';
import { UsersModule } from './users/users.module';



@Module({
  imports: [AuthModule, ConfigModule.forRoot(
    {isGlobal:true}
  ), QuestionsModule, UsersModule],
  controllers: [
    AppController,

  ],
  providers: [
    AppService,
  ], 
})
export class AppModule {}