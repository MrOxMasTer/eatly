import { Module } from '@nestjs/common';

import { PrismaService } from 'src/database/prisma.service';

import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';

@Module({
    providers: [RolesService, PrismaService],
    controllers: [RolesController],
    exports: [RolesService],
})
export class RolesModule {}
