import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // Define os níveis de mensagens de log que serão exibidas no terminal
    // logger: ['error', 'warn', 'debug', 'info',],
  });
  app.useGlobalPipes(new ValidationPipe());
  /* Sendo o import do ValidationPipe global perde-se a 
  possibilidade de utilizar validações customizadas com groups */
  await app.listen(3000);
}
bootstrap();
