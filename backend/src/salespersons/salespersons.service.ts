import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SalespersonsService {
  constructor(private readonly prisma: PrismaService) {}
  async findPaginate(page: number, pageSize: number) {
    const skip = (page - 1) * pageSize;

    const data = await this.prisma.sale.findMany({
      skip,
      take: pageSize,
    });

    const total = await this.prisma.sale.count();

    return {
      data,
      total,
      page,
      lastPage: Math.ceil(total / pageSize),
    };
  }
}
