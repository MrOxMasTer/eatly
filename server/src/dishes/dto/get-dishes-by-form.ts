import { IsNumber, IsString } from 'class-validator';

export class GetDishesByForm {
    @IsString()
    category: string;

    @IsString()
    recomended: string;

    @IsString()
    mostPopular: string;

    @IsNumber()
    price: number;

    @IsString()
    search: string;
}
