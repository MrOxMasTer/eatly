import { ApiProperty } from '@nestjs/swagger';

export class RolesModel {
    @ApiProperty({ example: '1', description: 'Уникальный индетификатор' })
    id: number;

    @ApiProperty({ example: 'ADMIN', description: 'Уникальное значение роли' })
    value: string;

    @ApiProperty({ example: 'Администратор', description: 'Описание роли' })
    description: string;
}
