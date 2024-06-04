"use client"

import { CodeBlock } from "react-code-blocks"

export default function ContohUnitTesting() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-5">
        Berikut Adalah COntoh dari Unit Test
      </h2>
      <p>
        Kode beritu terdapat pada project
        backend/src/products/product.controller.spec.ts
      </p>
      <CodeBlock text={code} language={"typescript"} />
    </div>
  )
}
const code = `describe('ProductController', () => {
    let app: INestApplication;
    let productService = {
      findPaginate: (page: number, pageSize: number) => ['test'],
    };
  
    beforeAll(async () => {
      const moduleRef: TestingModule = await Test.createTestingModule({
        controllers: [ProductController],
        providers: [ProductService],
      })
        .overrideProvider(ProductService)
        .useValue(productService)
        .compile();
  
      app = moduleRef.createNestApplication();
      await app.init();
    });
  
    it('/GET products', () => {
      return request(app.getHttpServer())
        .get('/products?page=1&pageSize=10')
        .expect(200)
        .expect(productService.findPaginate(1, 10));
    });
  
    afterAll(async () => {
      await app.close();
    });
  });
`
