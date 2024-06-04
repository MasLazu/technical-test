import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

describe('ProductController', () => {
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
