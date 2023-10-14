import { Injectable } from '@nestjs/common';
import { Prisma, Role } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class RolesService {
  constructor(private prisma: PrismaService) {}

  async createRole(dto: Prisma.RoleCreateInput): Promise<Role> {
    const role = await this.prisma.role.create({ data: dto });

    return role;
  }

  async getRoleByValue(dto: Prisma.RoleWhereUniqueInput): Promise<Role | null> {
    const { value } = dto;
    const role = await this.prisma.role.findUnique({ where: { value } });

    return role;
  }

  async deleteRoleByValue(dto: Prisma.RoleWhereUniqueInput): Promise<Role> {
    const { value } = dto;
    const role = await this.prisma.role.delete({ where: { value } });

    return role;
  }
}
