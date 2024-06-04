import { Module } from '@nestjs/common';
import { SalespersonsModule } from './salespersons/salespersons.module';
import { ProductModule } from './products/product.module';
import { SalesModule } from './sales/sales.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  providers: [],
  imports: [SalespersonsModule, ProductModule, SalesModule, PrismaModule],
})
export class AppModule {}
