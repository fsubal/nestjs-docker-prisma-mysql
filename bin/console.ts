import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/prisma/prisma.service';

async function bootstrap() {
  console.log('Initializing console...');

  const app = await NestFactory.create(AppModule);

  globalThis.app = app;
  globalThis.prisma = app.get(PrismaService);
}

bootstrap();
