import { Injectable } from '@nestjs/common';
import { db } from '../../database/db';
import { product } from '../../database/schema';
import { Service } from 'src/common/service';

@Injectable()
export class ProductsService extends Service<typeof product> {
  async getAll() {
    return await db.select().from(product);
  }
}
