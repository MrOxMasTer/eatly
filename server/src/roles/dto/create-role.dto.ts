import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateRoleDto {
    @ApiProperty({ example: 'ADMIN', description: 'Значение роли' })
    @IsString()
    value: string;

    @IsString()
    @ApiProperty({ example: 'Администратор', description: 'описание роли' })
    description: string;
}
