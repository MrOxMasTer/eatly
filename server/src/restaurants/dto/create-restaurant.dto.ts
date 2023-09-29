import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateRestaurantDto {
    @IsString()
    id: string;

    @IsString()
    title: string;

    @IsOptional()
    @IsNumber()
    deliveryTime?: number;

    @IsOptional()
    @IsString()
    status?: string;
}
