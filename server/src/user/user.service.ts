import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from 'src/database/prisma.service';
import { RolesService } from 'src/roles/roles.service';

import { Prisma, User } from '@prisma/client';

import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private readonly roleServie: RolesService,
  ) {}

  async createUser(dto: Prisma.UserCreateInput) {
    const role = await this.roleServie.getRoleByValue({ value: 'USER' });

    if (role) {
      const user = this.prisma.user.create({
        data: { ...dto, roles: { connect: [{ id: role.id }] } },
        include: { roles: true },
      });

      return user;
    }

    throw new NotFoundException('Роль не найдена');
  }

  async getUsers(): Promise<User[] | null> {
    return this.prisma.user.findMany({ include: { roles: true } });
  }

  async getUserById(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    const { id } = userWhereUniqueInput;

    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async getUserByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
      include: { roles: true },
    });
  }

  async addRole(dto: AddRoleDto): Promise<any | null> {
    const role = await this.roleServie.getRoleByValue({
      value: String(dto.value),
    });

    if (role) {
      const updateUser = this.prisma.user.update({
        where: { id: dto.userId },
        include: { roles: true },
        data: {
          roles: {
            connect: { value: dto.value },
          },
        },
      });

      return updateUser;
    }

    throw new NotFoundException('Роль не найдена');
  }

  async banUser(dto: BanUserDto) {
    const bannedUser = this.prisma.user.update({
      where: { id: dto.userId },
      data: {
        banned: true,
        banReason: dto.banReason,
      },
    });

    return bannedUser;
  }
}
