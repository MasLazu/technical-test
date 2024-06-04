"use client"

import { CodeBlock } from "react-code-blocks"

export default function MengoptimalkanSql() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-5">
        Bagaimana Mengoptimalkan Query SQL?
      </h2>
      <h3 className="text-xl font-semibold mb-5">Pagination</h3>
      <p>
        Salah satu cara mengoptimalkan database dengan jutaan baris adalah
        dengan pagination. Pagination adalah teknik yang digunakan untuk membagi
        data besar menjadi beberapa halaman. Dalam konteks SQL, ini dapat
        membantu mengoptimalkan kinerja query dengan membatasi jumlah baris yang
        dikembalikan oleh query tunggal. Berikut adalah cara melakukan
        pagination dalam SQL:
      </p>
      <p>
        Kode berikut berada pada project backend/products/products.service.ts
      </p>
      <CodeBlock text={code1} language={"typescript"} />
      <h3 className="text-xl font-semibold mb-5 mt-8">Menambahkan Index</h3>
      <p>
        Indexing adalah teknik yang digunakan untuk mempercepat proses pencarian
        data dalam database. Dengan menambahkan indeks pada kolom yang sering
        digunakan dalam klausa WHERE, kita dapat mengoptimalkan kinerja query
        SQL. Pada schema tersebut saya menambahkan index pada productid dan
        salespersonid yang kemungkinan besar akan banyak digunakan pada where
        clause
      </p>
      <p>Kode berikut ini prisma schema pada project beckend</p>
      <CodeBlock text={code2} language={"typescript"} />
      <h2 className="text-2xl font-semibold mb-5">Seeder 2 juta baris data</h2>
      <CodeBlock text={seeder} language={"typescript"} />
    </div>
  )
}

const seeder = `
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

    console.log(\`Seed batch \${i} start\`);
    await prisma.product.createMany({ data: products });
    await prisma.salesperson.createMany({ data: salesPersons });
    await prisma.sale.createMany({ data: sales });
    console.log(\`Seed batch \${i} done\`);
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

`

const code1 = `async findPaginate(page: number, pageSize: number) {
    const skip = (page - 1) * pageSize;

    const data = await this.prisma.product.findMany({
      skip,
      take: pageSize,
    });

    const total = await this.prisma.product.count();

    return {
      data,
      total,
      page,
      lastPage: Math.ceil(total / pageSize),
    };
  }
`
const code2 = `model Salesperson {
  id          Int    @id @default(autoincrement())
  name        String
  phoneNumber String
  email       String
  sales       Sale[]
}

model Product {
  id          Int    @id @default(autoincrement())
  name        String
  description String
  price       Int
  sales       Sale[]
}

model Sale {
  id            Int         @id @default(autoincrement())
  salesDate     DateTime
  productId     Int
  amount        Int
  salespersonId Int
  salesperson   Salesperson @relation(fields: [salespersonId], references: [id])
  product       Product     @relation(fields: [productId], references: [id])

  @@index([productId], name: "productid_idx")
  @@index([salespersonId], name: "salespersonid_idx")
}
`
