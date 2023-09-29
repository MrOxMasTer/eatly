import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { ApiOperation } from '@nestjs/swagger';

import { CreateStatusDto } from './dto/create-status.dto';
import { StatusService } from './status.service';

@Controller('status')
export class StatusController {
    constructor(private statusService: StatusService) {}

    @ApiOperation({ summary: 'Создание статуса' })
    @Post('create')
    async createStatus(@Body() dto: CreateStatusDto) {
        return this.statusService.createStatus(dto);
    }

    @ApiOperation({ summary: 'Получить статус по value' })
    @Get(':value')
    async getStatusByValue(@Param('value') value: string) {
        return this.statusService.getStatusByValue({ value });
    }

    @ApiOperation({ summary: 'Удаление статуса' })
    @Delete('delete/:value')
    async deleteStatus(@Param('value') value: string) {
        return this.statusService.deleteStatus({ value });
    }
}
