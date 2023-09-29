import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({ example: 'Ivan@mail.ru', description: 'Почта' })
    @IsString()
    email: string;

    @ApiProperty({ example: 'Ivan', description: 'Имя пользователя' })
    @Length(4)
    @IsString()
    name: string;

    @ApiProperty({ example: '12345678', description: 'Пароль пользователя' })
    @IsString()
    password: string;
}
