import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Query,
    UploadedFile,
    UseInterceptors,
} from '@nestjs/common';

import { FileInterceptor } from '@nestjs/platform-express';

import { AddStatustRestaurant } from './dto/add-status-restaurant.dto';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { GetRestaurantsByForm } from './dto/get-restaurant-by-form.dto';
import { RestaurantsService } from './restaurants.service';

@Controller('restaurants')
export class RestaurantsController {
    constructor(private restaurantsService: RestaurantsService) {}

    @Post('create')
    @UseInterceptors(FileInterceptor('image'))
    async createRestaurant(
        @Body() dto: CreateRestaurantDto,
        @UploadedFile() image: Express.Multer.File,
    ) {
        return this.restaurantsService.createRestaurant(dto, image);
    }

    @Get('')
    async getRestaurants() {
        return this.restaurantsService.getRestaurants();
    }

    @Get('top')
    async getTopRestaurants() {
        return this.restaurantsService.getTopRestaurants();
    }

    @Get('menu')
    async getRestaurantsByForm(@Query() dto: GetRestaurantsByForm) {
        const restaurant = await this.restaurantsService.getRestaurantsByForm({
            ...dto,
        });

        return restaurant;
    }

    @Get(':id')
    async getRestaurantById(@Param('id') id: string) {
        return this.restaurantsService.getRestaurantById(id);
    }

    @Delete('delete/:id')
    async deleteRestaurant(@Param('id') id: string) {
        return this.restaurantsService.deleteRestaurant({ id });
    }

    @Patch('addStatus')
    async addStatustTheRestaurant(@Body() dto: AddStatustRestaurant) {
        return this.restaurantsService.addStatustTheRestaurant(dto);
    }

    @Patch('removeStatus')
    async removeStatusTheRestaurant(@Body() dto: AddStatustRestaurant) {
        return this.restaurantsService.removeStatustTheRestaurant(dto);
    }
}
