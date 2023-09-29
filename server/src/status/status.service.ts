import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class StatusService {
    constructor(private prismaService: PrismaService) {}

    async createStatus(dto: Prisma.StatusCreateInput) {
        const status = await this.prismaService.status.create({
            data: dto,
        });

        return status;
    }

    async getStatusByValue(dto: Prisma.StatusWhereUniqueInput) {
        const status = await this.prismaService.status.findUnique({
            where: { value: dto.value },
        });

        return status;
    }

    async deleteStatus(dto: Prisma.StatusWhereUniqueInput) {
        const status = await this.prismaService.status.delete({
            where: { value: dto.value },
        });

        return status;
    }
}
