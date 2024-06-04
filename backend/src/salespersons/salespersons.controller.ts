import { Controller, Get, Query } from '@nestjs/common';
import { SalespersonsService } from './salespersons.service';

@Controller('salespersons')
export class SalespersonsController {
  constructor(private readonly salespersonsService: SalespersonsService) {}
  @Get()
  async getProducts(
    @Query('page') page: number = 1,
    @Query('pageSize') pageSize: number = 10,
  ) {
    return this.salespersonsService.findPaginate(
      Number(page),
      Number(pageSize),
    );
  }
}
