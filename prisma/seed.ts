import { PrismaClient, PrismaPromise } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';

const prisma = new PrismaClient();

const targetDir = path.resolve(__dirname, 'seeds');
const files = fs.readdirSync(targetDir).filter((f) => f.endsWith('.ts'));

interface Seed {
  default(
    prisma: PrismaClient,
  ): PrismaPromise<unknown> | PrismaPromise<unknown>[];
}

async function main() {
  console.log(`Start seeding ...`);

  const modules = await Promise.all(
    files.map((file) => import(path.resolve(targetDir, file)) as Promise<Seed>),
  );

  await prisma.$transaction(modules.flatMap((mod) => mod.default(prisma)));

  console.log(`Seeding finished.`);
}

main();
