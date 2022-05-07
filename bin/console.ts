import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/services/prisma/prisma.service';

async function bootstrap() {
  console.log('Initializing console...');

  const app = await NestFactory.create(AppModule);

  // @ts-expect-error 型 'typeof globalThis' にはインデックス シグネチャがないため、要素は暗黙的に 'any' 型になります。ts(7017)
  globalThis.app = app;

  // @ts-expect-error 型 'typeof globalThis' にはインデックス シグネチャがないため、要素は暗黙的に 'any' 型になります。ts(7017)
  globalThis.prisma = app.get(PrismaService);
}

bootstrap();
