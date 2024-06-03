import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { salesperson, product, sale } from './schema';
import { faker } from '@faker-js/faker';
import * as dotenv from 'dotenv';
dotenv.config({ path: './.env' });

if (!('DATABASE_URL' in process.env))
  throw new Error('DATABASE_URL not found on .env.development');

const main = async () => {
  const client = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
  const db = drizzle(client);

  for (let i = 0; i < 1_000; i++) {
    const salesPersons: (typeof salesperson.$inferInsert)[] = [];
    const products: (typeof product.$inferInsert)[] = [];
    const sales: (typeof sale.$inferInsert)[] = [];

    for (let j = 0; j < 2_000; j++) {
      salesPersons.push({
        email: faker.internet.email(),
        name: faker.person.firstName(),
        phoneNumber: faker.phone.imei(),
      });
      products.push({
        description: faker.commerce.productDescription(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price({ min: 1000, max: 100000 })),
      });
      sales.push({
        productId: i * j + 1,
        salespersonId: i * j + 1,
        amount: faker.number.int({ min: 1, max: 10 }),
        salesDate: faker.date.recent().toISOString(),
      });
    }

    console.log(`Seed batch ${i} start`);
    await db.insert(salesperson).values(salesPersons);
    await db.insert(product).values(products);
    await db.insert(sale).values(sales);
    console.log(`Seed batch ${i} done`);
  }
};

main();
