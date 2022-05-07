import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { PrismaService } from './services/prisma/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  bootstrapSwagger(app);

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
