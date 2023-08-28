import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedCategory() {
  await prisma.category.create({
    data: {
      name: 'day',
    },
  });

  await prisma.category.create({
    data: {
      name: 'night',
    },
  });
}

seedCategory()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
