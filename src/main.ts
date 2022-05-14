import * as path from 'path';
import { toString } from 'app-root-path';

import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { PrismaService } from './services/prisma/prisma.service';

const projectRootPath = toString();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  bootstrapSwagger(app);

  app.useStaticAssets(path.join(projectRootPath, 'public'));
  app.setBaseViewsDir(path.join(projectRootPath, 'views'));
  app.setViewEngine('ejs');

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  await app.listen(3000);
}

bootstrap();

function bootstrapSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Example API')
    .setDescription('The Example API description')
    .setVersion('1.0')
    .addTag('example')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);
}
