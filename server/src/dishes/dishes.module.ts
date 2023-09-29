import { Module } from '@nestjs/common';

import { PrismaService } from 'src/database/prisma.service';

import { DishesController } from './dishes.controller';
import { DishesService } from './dishes.service';

@Module({
    providers: [DishesService, PrismaService],
    controllers: [DishesController],
    exports: [DishesService],
})
export class DishesModule {}
