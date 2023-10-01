import { NestFactory } from '@nestjs/core';

import { ValidationPipe } from '@nestjs/common';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 5001;
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://192.168.0.100:3000',
      'http://192.168.0.101:3000',
      'https://ffb0-213-138-86-109.ngrok-free.app',
    ],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
  });

  app.setGlobalPrefix('/api');

  const config = new DocumentBuilder()
    .setTitle('Eatly')
    .setDescription('доставка еды')
    .setVersion('1.0.0')
    .addTag('Oxmaster')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/docs', app, document);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(PORT, () => console.log(`SERVER STARTED: PORT=${PORT}`));
}
bootstrap();
