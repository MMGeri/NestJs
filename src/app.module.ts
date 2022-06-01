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
import { AuthService } from './auth/auth.service';
import { JwtService } from '@nestjs/jwt';


@Module({
  imports: [AuthModule],
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




//middleware-es auth guard, helyette majd guard vagy jwt
/*implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes({path:'q/*', method: RequestMethod.POST},{path:'/$', method: RequestMethod.POST});
      //Kérdés és Válaszok hozzáadásának levédése csak bejelntkezett felhasználóknak
      
  }
}*/
