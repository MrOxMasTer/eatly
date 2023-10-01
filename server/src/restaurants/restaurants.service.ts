import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from 'src/database/prisma.service';
import { StatusService } from 'src/status/status.service';

import { FilesService } from 'src/files/files.service';

import { DishesService } from 'src/dishes/dishes.service';

import { AddStatustRestaurant } from './dto/add-status-restaurant.dto';
import { GetRestaurantsByForm } from './dto/get-restaurant-by-form.dto';

@Injectable()
export class RestaurantsService {
  constructor(
    private prismaService: PrismaService,
    private statusService: StatusService,
    private filesService: FilesService,
    private dishesService: DishesService,
  ) {}

  async createRestaurant(
    dto: Prisma.RestaurantCreateInput,
    image: Express.Multer.File,
  ) {
    const fileName = await this.filesService.createFile(image);

    return this.prismaService.restaurant.create({
      data: { ...dto, id: dto.id.replace(/ /g, '_'), src: fileName },
    });
  }

  async getRestaurantById(id: string) {
    const restaurant = await this.prismaService.restaurant.findUnique({
      where: { id },
    });

    const popularDishes =
      await this.dishesService.getPopularDishesByRestaurantId(id);

    const dishes = await this.dishesService.getDishesByRestaurantIdNotIn(
      id,
      Array.from(popularDishes, (popDishe) => popDishe.id),
    );

    const restaurantFull = {
      ...restaurant,
      dishes: { popular: popularDishes, dishes },
    };

    return restaurantFull;
  }

  async getRestaurants() {
    return this.prismaService.restaurant.findMany();
  }

  async getTopRestaurants() {
    return this.prismaService.restaurant.findMany({
      orderBy: { rating: 'desc' },
      take: 3,
    });
  }

  async getRestaurantsByForm(dto: GetRestaurantsByForm) {
    // TODO: Настроить нормально (deliveryTime, middleCheck)
    console.log(dto);

    return this.prismaService.restaurant.findMany({
      where: {
        title: { startsWith: dto.search, mode: 'insensitive' },
        // status: dto.mostPopular,
        // category: { every: { value: dto.category } },
        // middleCheck: dto.price,
        // deliveryTime: 0,
      },
    });
  }

  async deleteRestaurant(dto: Prisma.RestaurantWhereUniqueInput) {
    return this.prismaService.restaurant.delete({
      where: { id: dto.id },
    });
  }

  async addStatustTheRestaurant(dto: AddStatustRestaurant) {
    return this.prismaService.restaurant.update({
      where: { id: dto.restaurantId },
      data: { statusModel: { connect: { value: dto.statusValue } } },
    });
  }

  async removeStatustTheRestaurant(dto: AddStatustRestaurant) {
    return this.prismaService.restaurant.update({
      where: { id: dto.restaurantId },
      data: {
        statusModel: { disconnect: { value: dto.statusValue } },
      },
    });
  }
}
