"use client"

import { CodeBlock } from "react-code-blocks"

export default function KonsepUtamaOOP() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-5 mt-7">
        Bagaimana Konsep Utama dalam OOP
      </h2>
      <p>Berikut ini adalah beberapa konsep utama dalam OOP:</p>
      <ul className="list-disc pl-8 mt-5">
        <li>
          <h3 className="font-semibold">Encapsulation</h3>
          <p>
            Encapsulation adalah metode untuk mengatur struktur pada class.
            dengan tujuan untuk menentukan hak akses pada property atau method.
            ini bertujuan untuk menyembunyikan informasi dari method dan
            property dengan alasan keamanan.
          </p>
          <p>
            Berikuta adalah contoh encapsilation, dalam code tersebut saya
            menyetting productService sebagai fieald yang private agar tidak
            dapat diakses oleh class dari luar. Kode tersebut berada pada
            project backend/products/product.controller.ts
          </p>
          <CodeBlock text={codeecapsulation} language={"typescript"} />
        </li>
        <li>
          <h3 className="font-semibold">Inheritance</h3>
          <p>
            Inheritance merupakan mekanisme di mana sebuah kelas subclass dapat
            mewarisi sifat dan perilaku dari kelas lain superclass. Ini
            memungkinkan kode untuk digunakan kembali dan memperluas
            fungsionalitas tanpa menduplikasi kode.
          </p>
          <p>
            kode di bawah ini terdapat pada project
            backend/src/prisma/prisma.service.ts
          </p>
          <CodeBlock text={codeinheritance} language={"typescript"} />
        </li>
        <li>
          <h3 className="font-semibold">Polymorphism</h3>
          <p>
            Polymorphism memungkinkan objek dari kelas yang berbeda untuk
            diinteraksikan melalui antarmuka yang sama. Ini memungkinkan satu
            fungsi untuk bekerja dengan cara yang berbeda berdasarkan objek yang
            memanggilnya. Polymorphism biasanya dicapai melalui method
            overriding atau overloading.
          </p>
          <p>
            kode dibawah ini adalah contoh penerapan Polymorphism karena pada
            pada code tersebut type yang kita inject adalah subclass dari type
            yang ada pada parameter.kode tersebut berada pada
            backend/src/product/product.service.ts
          </p>
          <CodeBlock text={codepolymorph} language={"typescript"} />
        </li>
      </ul>
    </div>
  )
}

const codeinheritance = `
@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
`

const codepolymorph = `
@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async findPaginate(page: number, pageSize: number) {
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
}
`
const codeecapsulation = `
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getProducts(
    @Query('page') page: number = 1,
    @Query('pageSize') pageSize: number = 10,
  ) {
    return this.productService.findPaginate(Number(page), Number(pageSize));
  }
}
`
