import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedProduct() {
  const dayCategory = await prisma.category.findFirst({ where: { name: 'day' } });
  const nightCategory = await prisma.category.findFirst({ where: { name: 'night' } });

  if (dayCategory && nightCategory) {
    await prisma.product.create({
      data: {
        name: 'Produto Dia 1',
        price: 100,
        description: 'Descrição do Produto Dia 1',
        image: 'url_da_imagem_1',
        categoryId: dayCategory.id,
      },
    });

    await prisma.product.create({
      data: {
        name: 'Produto Noite 1',
        price: 150,
        description: 'Descrição do Produto Noite 1',
        image: 'url_da_imagem_2',
        categoryId: nightCategory.id,
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
