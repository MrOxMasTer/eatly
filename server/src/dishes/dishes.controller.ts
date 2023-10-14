import { Body, Controller, Get, Post } from '@nestjs/common';

import { DishesService } from './dishes.service';
import { CreateDisheDto } from './dto/create-dishe';
import { GetDishesByForm } from './dto/get-dishes-by-form';

@Controller('dishes')
export class DishesController {
  constructor(private dishesService: DishesService) {}

  @Post('create')
  async createDishe(@Body() dto: CreateDisheDto) {
    return this.dishesService.createDishe(dto);
  }

  @Get('')
  async getDishes() {
    return this.dishesService.getDishes();
  }

  @Get('top')
  async getTopDishes() {
    return this.dishesService.getTopDishes();
  }

  @Get('menu')
  async getRestaurantsByForm(@Body() dto: GetDishesByForm) {
    return this.dishesService.getDishesByForm(dto);
  }
}
