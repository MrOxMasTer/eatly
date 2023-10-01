import { TRestaurant } from '../models';

export type TUserId = string | Number;

export interface IUser {
    id: TUserId;
    selectedRestaurants: TRestaurant[];
}
