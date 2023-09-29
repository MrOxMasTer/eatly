import { IsNumber, IsString } from 'class-validator';

export class BanUserDto {
    @IsNumber()
    readonly userId: string;

    @IsString()
    readonly banReason: string;
}
