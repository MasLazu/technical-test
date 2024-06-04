import { faker } from '@faker-js/faker';
import { PrismaClient, Product, Sale, Salesperson } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  for (let i = 0; i < 1_000; i++) {
    const salesPersons: Salesperson[] = [];
    const products: Product[] = [];
    const sales: Sale[] = [];

    for (let j = 0; j < 2_000; j++) {
      salesPersons.push({
        id: i * 2_000 + j + 1,
        email: faker.internet.email(),
        name: faker.person.firstName(),
        phoneNumber: faker.phone.imei(),
      });
      products.push({
        id: i * 2_000 + j + 1,
        description: faker.commerce.productDescription(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price({ min: 1000, max: 100000 })),
      });
      sales.push({
        id: i * 2_000 + j + 1,
        productId: i * j + 1,
        salespersonId: i * 2_000 + j + 1,
        amount: faker.number.int({ min: 1, max: 10 }),
        salesDate: faker.date.recent(),
      });
    }

    console.log(`Seed batch ${i} start`);
    await prisma.product.createMany({ data: products });
    await prisma.salesperson.createMany({ data: salesPersons });
    await prisma.sale.createMany({ data: sales });
    console.log(`Seed batch ${i} done`);
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
