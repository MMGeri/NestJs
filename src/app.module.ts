import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterController } from './controllers/register/register.controller';
import { DatabaseService } from './other/services/database/database.service';
import { AuthMiddleware } from './other/middleware/auth.middleware';
import { LoginController } from './controllers/login/login.controller';
import { QuestionController } from './controllers/question/question.controller';
import { ProfileController } from './controllers/profile/profile.controller';

@Module({
  imports: [],
  controllers: [AppController, RegisterController, LoginController, QuestionController, ProfileController],
  providers: [AppService, DatabaseService], 
  /*Controllers should handle HTTP requests and delegate more complex tasks to providers.
   Providers are plain JavaScript classes that are declared as providers in a module.*/

  //esetleg lehetne külön login meg regisztráció és main page module is, akkor exportálni kéne a database service-t vagy
  // egy uj mudult kéne létrehozni a database servicenek a @Global() decoratorral ellátva
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes({path:'q/*', method: RequestMethod.POST},{path:'/$', method: RequestMethod.POST});
      //Kérdés és Válaszok hozzáadásának levédése csak bejelntkezett felhasználóknak
  }
}
