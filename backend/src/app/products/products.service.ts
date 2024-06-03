import { Injectable } from '@nestjs/common';
import { Service } from 'src/common/service';
import { product } from 'src/database/schema';

@Injectable()
export class ProductsService extends Service<typeof product> {
  constructor() {
    super(product);
  }
}
