"use client"

import { CodeBlock } from "react-code-blocks"

export default function ApaItuOOP() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-5">Apa Itu OOP?</h2>
      <p>
        Object-Oriented Programming (OOP) adalah paradigma pemrograman yang
        menggunakan "objek" - entitas yang menggabungkan data dan fungsi yang
        beroperasi pada data tersebut. OOP adalah salah satu pendekatan
        pemrograman yang populer karena memungkinkan pemrogram untuk membuat
        modular, kode yang mudah dikelola, dan dapat digunakan kembali.
      </p>
      <h2 className="text-2xl font-semibold mb-5 mt-7">
        Contoh Implementasi dalam Koding
      </h2>
      <p>
        Berikut ini adalah salah satu contoh implementasi OOP, kode tersebut
        terdapat pada project backend lebih tepatnya pada product controller.
      </p>
      <CodeBlock text={code} language={"typescript"} />
    </div>
  )
}
const code = `@Controller('products')
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
