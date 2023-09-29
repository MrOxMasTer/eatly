import { TRestaurant } from './restaurants.types';

export type TUserId = string | Number;

export interface IUser {
    id: TUserId;
    selectedRestaurants: TRestaurant[];
}
