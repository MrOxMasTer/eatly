import { Injectable } from '@nestjs/common';
import { Prisma, Role } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class RolesService {
    constructor(private prisma: PrismaService) {}

    async createRole(data: Prisma.RoleCreateInput): Promise<Role> {
        const role = await this.prisma.role.create({ data });

        return role;
    }

    async getRoleByValue(
        roleWhereUniqueInput: Prisma.RoleWhereUniqueInput,
    ): Promise<Role | null> {
        const { value } = roleWhereUniqueInput;
        const role = await this.prisma.role.findUnique({ where: { value } });

        return role;
    }

    async deleteRoleByValue(
        roleWhereUniqueInput: Prisma.RoleWhereUniqueInput,
    ): Promise<Role> {
        const { value } = roleWhereUniqueInput;
        const role = await this.prisma.role.delete({ where: { value } });

        return role;
    }
}
