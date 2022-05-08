import { Prisma, PrismaClient, PrismaPromise } from '@prisma/client';

const items: Prisma.ItemCreateInput[] = [
  {
    title: 'hoge',
    content: 'hello world!!',
    account: {
      create: {
        avatarUrl: 'https://via.placeholder.com/100x100',
      },
    },
  },
];

export default function (prisma: PrismaClient): PrismaPromise<unknown>[] {
  return items.map((item) =>
    prisma.item.create({
      data: item,
    }),
  );
}
