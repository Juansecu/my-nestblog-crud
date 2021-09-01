import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

import { setupSwagger } from './app.swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger();

  setupSwagger(app);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true
    })
  );

  await app.listen(3000);
  logger.log(`Serving at ${await app.getUrl()}`);
}
bootstrap();
