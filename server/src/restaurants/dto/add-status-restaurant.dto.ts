import { IsString } from 'class-validator';

export class AddStatustRestaurant {
    @IsString()
    restaurantId: string;

    @IsString()
    statusValue: string;
}
