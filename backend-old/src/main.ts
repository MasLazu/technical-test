import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { config } from 'dotenv';

async function bootstrap() {
  config();
  const app = await NestFactory.create(AppModule);
  await app.listen(8888);
}
bootstrap();
