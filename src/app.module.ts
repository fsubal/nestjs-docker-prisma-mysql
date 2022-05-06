import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { ItemService } from './item/item.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
  ],
  controllers: [],
  providers: [PrismaService, ItemService],
})
export class AppModule {}
