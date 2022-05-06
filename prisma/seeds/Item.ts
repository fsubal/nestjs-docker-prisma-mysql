import { Prisma, PrismaClient, PrismaPromise } from '@prisma/client';

const items: Prisma.ItemCreateInput[] = [
  {
    title: 'hoge',
    content: 'hello world!!',
  },
];

export default function (prisma: PrismaClient): PrismaPromise<unknown>[] {
  return items.map((item) =>
    prisma.item.create({
      data: item,
    }),
  );
}
