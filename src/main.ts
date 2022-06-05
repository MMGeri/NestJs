import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {abortOnError: false}); //dont abort on error

  //swagger doucument options
  const config = new DocumentBuilder()
  .setTitle('GYIK API')
  .setDescription('Gyakori kérdések weboldalhoz REST API')
  .setVersion('1.0')
  .addBearerAuth()
  .build();

  //swagger
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  //global validation pipe
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, //throw away unvanted properties
    transform: true,
  }));

  await app.listen(3000);
}
bootstrap();
