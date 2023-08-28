import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedMenu() {
  await prisma.menu.create({
    data: {
      name: 'menu diurno',
    },
  });

  await prisma.menu.create({
    data: {
      name: 'menu noturno',
    },
  });
}

seedMenu()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
