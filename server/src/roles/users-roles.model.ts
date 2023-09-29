import { ApiProperty } from '@nestjs/swagger';

export class UsersOnRolesModel {
    @ApiProperty({ example: '1', description: 'Уникальный индетификатор' })
    id: number;

    @ApiProperty({ example: '1', description: 'Уникальное индетификатор роли' })
    roleID: number;

    @ApiProperty({
        example: '2',
        description: 'Уникальный индетификатор пользователя',
    })
    userId: number;
}
