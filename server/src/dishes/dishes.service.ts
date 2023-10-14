import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

import { CreateDisheDto } from './dto/create-dishe';
import { GetDishesByForm } from './dto/get-dishes-by-form';

@Injectable()
export class DishesService {
  constructor(private prismaService: PrismaService) {}

  async createDishe(dto: CreateDisheDto) {
    return this.prismaService.dishe.create({
      data: { ...dto },
    });
  }

  async getDishes() {
    return this.prismaService.dishe.findMany();
  }

  async getTopDishes() {
    return this.prismaService.dishe.findMany({
      orderBy: { rating: 'desc' },
      take: 4,
    });
  }

  async getDishesByForm(dto: GetDishesByForm) {
    return this.prismaService.dishe.findMany({
      where: {
        title: { startsWith: dto.search },
        // status: dto.mostPopular,
        // category: { every: { value: dto.category } },
        // price: dto.price,
      },
    });
  }

  async getPopularDishesByRestaurantId(restaurantId: string) {
    return this.prismaService.dishe.findMany({
      orderBy: { rating: 'desc' },
      take: 4,
      where: { restaurantId },
    });
  }

  async getDishesByRestaurantIdNotIn(restaurantId: string, notInId: string[]) {
    return this.prismaService.dishe.findMany({
      where: {
        restaurantId,
        id: {
          notIn: notInId,
        },
      },
    });
  }
}
