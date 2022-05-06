import { Prisma, PrismaClient, PrismaPromise } from '@prisma/client';

const items: Prisma.ItemCreateInput[] = [
  {
    title: 'hoge',
    content: 'hello world!!',
    updatedAt: new Date('2022-05-06T00:00:00'),
  },
];

export default function (prisma: PrismaClient): PrismaPromise<unknown>[] {
  return items.map((item) =>
    prisma.item.create({
      data: item,
    }),
  );
}
