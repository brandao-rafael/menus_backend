import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedProduct() {
  const lanchesCategory = await prisma.category.findFirst({ where: { name: 'lanches' } });
  const massasCategory = await prisma.category.findFirst({ where: { name: 'massas' } });
  const diurnoMenu = await prisma.menu.findFirst({ where: { name: 'Diurno' } });
  const noturnoMenu = await prisma.menu.findFirst({ where: { name: 'Noturno' } });

  if (lanchesCategory && massasCategory) {
    await prisma.product.create({
      data: {
        name: 'Hamburguer',
        price: 15,
        description: 'Hamburguer delicioso',
        image: 'url_da_imagem',
        category: {
          connect: {
            id: lanchesCategory.id,
          },
        },
        menu: {
          connect: {
            id: diurnoMenu.id,
          },
        },
      },
    });
  
    await prisma.product.create({
      data: {
        name: 'Espaguete',
        price: 20,
        description: 'Espaguete à bolonhesa',
        image: 'url_da_imagem',
        category: {
          connect: {
            id: massasCategory.id,
          },
        },
        menu: {
          connect: {
            id: noturnoMenu.id,
          },
        },
      },
    });
  }
}

seedProduct()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
