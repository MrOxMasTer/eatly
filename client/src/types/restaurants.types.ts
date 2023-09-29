import { z } from 'zod';

import { SDishe } from './dishes.types';

export type IRestaurantId = string | Number;

export const SRestaurant = z.object({
    id: z.union([z.string(), z.number()]),
    src: z.string(),
    status: z.string(),
    title: z.string(),
    rating: z.number(),
    deliveryTime: z.number(),
    dishes: SDishe.array().optional(),
    selected: z.boolean().optional(),
});

export const SRestaurants = SRestaurant.array();

export type TRestaurant = z.infer<typeof SRestaurant>;

export const SRestaurantById = z.object({
    id: z.union([z.string(), z.number()]),
    src: z.string(),
    status: z.string(),
    title: z.string(),
    rating: z.number(),
    deliveryTime: z.number(),
    dishes: z.object({
        popular: SDishe.array().optional(),
        dishes: SDishe.array().optional(),
    }),
    selected: z.boolean().optional(),
});

export type TRestaurantById = z.infer<typeof SRestaurantById>;
