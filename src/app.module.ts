import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterController } from './controllers/register/register.controller';
import { DatabaseService } from 'src/database/database.service';
// import { AuthMiddleware } from './other/middleware/auth.middleware';
import { LoginController } from './controllers/login/login.controller';
import { QuestionController } from './controllers/question/question.controller';
import { ProfileController } from './controllers/profile/profile.controller';
import { AuthModule } from './auth/auth.module';
import {ConfigModule } from '@nestjs/config';



@Module({
  imports: [AuthModule, ConfigModule.forRoot(
    {isGlobal:true}
  )],
  controllers: [
    AppController,
    RegisterController,
    LoginController,
    QuestionController,
    ProfileController
  ],
  providers: [
    AppService,
    DatabaseService,
  ], 
})
export class AppModule {}