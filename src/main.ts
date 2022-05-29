import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {abortOnError: false}); //dont abort on error
  await app.listen(3000);
}
bootstrap();
