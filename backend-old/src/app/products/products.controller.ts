import {
  Controller,
  Get,
  InternalServerErrorException,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  // @Get()
  // async findAll(
  //   @Query('limit') limit: number = 10,
  //   @Query('page') page: number,
  // ): Promise<any> {
  //   try {
  //     if (page) {
  //       const offset = (page - 1) * limit;
  //       return await this.productService.findPaginate(limit, offset);
  //     }
  //     return await this.productService.findAll();
  //   } catch (error) {
  //     throw new InternalServerErrorException('Error while fetching products');
  //   }
  // }
}
