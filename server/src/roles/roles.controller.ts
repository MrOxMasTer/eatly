import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { Role } from '@prisma/client';

import { CreateRoleDto } from './dto/create-role.dto';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
    constructor(private roleService: RolesService) {}

    @Post('create')
    async createRole(@Body() dto: CreateRoleDto): Promise<Role> {
        return this.roleService.createRole(dto);
    }

    @Get(':value')
    async getRoleByValue(@Param('value') value: string): Promise<Role | null> {
        return this.roleService.getRoleByValue({ value: String(value) });
    }

    @Delete('delete/:value')
    async deleteRoleByValue(@Param('value') value: string): Promise<Role> {
        return this.roleService.deleteRoleByValue({ value: String(value) });
    }
}
