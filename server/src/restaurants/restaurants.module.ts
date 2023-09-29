import { Module } from '@nestjs/common';

import { PrismaService } from 'src/database/prisma.service';

import { StatusModule } from 'src/status/status.module';

import { FilesModule } from 'src/files/files.module';

import { DishesModule } from 'src/dishes/dishes.module';

import { RestaurantsController } from './restaurants.controller';
import { RestaurantsService } from './restaurants.service';

@Module({
    controllers: [RestaurantsController],
    providers: [RestaurantsService, PrismaService],
    imports: [StatusModule, FilesModule, DishesModule],
})
export class RestaurantsModule {}
