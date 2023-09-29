import { Module } from '@nestjs/common';

import { PrismaService } from 'src/database/prisma.service';

import { StatusController } from './status.controller';
import { StatusService } from './status.service';

@Module({
    providers: [StatusService, PrismaService],
    controllers: [StatusController],
    exports: [StatusService],
})
export class StatusModule {}
