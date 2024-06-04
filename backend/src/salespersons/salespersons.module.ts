import { Module } from '@nestjs/common';
import { SalespersonsController } from './salespersons.controller';
import { SalespersonsService } from './salespersons.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SalespersonsController],
  providers: [SalespersonsService],
})
export class SalespersonsModule {}
