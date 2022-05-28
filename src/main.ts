import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {abortOnError: false}); //dont abort on error
  // const app = await NestFactory.create<NestExpressApplication>(AppModule); if i want to set json as default  
  // res.setHeader('Content-Type', 'application/json');
  // res.end(JSON.stringify({ a: 1 }));
  await app.listen(3000);
}
bootstrap();
