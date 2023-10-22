'use client';

import { TRestaurant } from '@/shared/api';
import { restaurantsServices } from '@/shared/api/restaurant/restaurants';

import { useQuery } from '@tanstack/react-query';

export const useRestaurantById = <T>(initialData: T, restaurantId: string) =>
    useQuery<T>({
        queryKey: ['restaurants', restaurantId],
        queryFn: () => restaurantsServices.getRestaurantById<T>(restaurantId),
        initialData,
    });

export const useTopRestaurants = (initialData: TRestaurant[]) =>
    useQuery({
        queryKey: ['restaurants'],
        queryFn: async () => {
            const { data } = await restaurantsServices.getTopRestaurants();
            return data;
        },
        initialData,
    });
