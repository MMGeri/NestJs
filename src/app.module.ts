import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterController } from './register/register.controller';
import { DatabaseService } from './services/database/database.service';

@Module({
  imports: [],
  controllers: [AppController, RegisterController],
  providers: [AppService, DatabaseService], /*Controllers should handle HTTP requests and delegate more complex tasks to providers.
   Providers are plain JavaScript classes that are declared as providers in a module.*/
})
export class AppModule {}
