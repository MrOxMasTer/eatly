import { ApiProperty } from '@nestjs/swagger';

export class UserModel {
    @ApiProperty({ example: '1', description: 'Уникальный индетификатор' })
    id: number;

    @ApiProperty({ example: 'Ivan@mail.ru', description: 'Почта' })
    email: string;

    @ApiProperty({ example: 'Ivan', description: 'Имя пользователя' })
    name: string;
}
