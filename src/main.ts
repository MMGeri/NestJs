import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {abortOnError: false}); //dont abort on error

  const config = new DocumentBuilder()
  .setTitle('GYIK API')
  .setDescription('Gyakori kérdések weboldalhoz REST API')
  .setVersion('1.0')
  .addTag('GYIK')
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
