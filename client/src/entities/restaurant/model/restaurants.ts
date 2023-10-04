'use client';

import { restaurantsServices } from '@/shared/api/restaurant/restaurants';

import { useQuery } from '@tanstack/react-query';

export const useRestaurantById = <T>(initialData: T, restaurantId: string) =>
    useQuery<T>(
        ['restaurants', restaurantId],
        () => restaurantsServices.getRestaurantById<T>(restaurantId),
        { initialData },
    );

export const useTopRestaurants = <T>(initialData: T) =>
    useQuery<T>(
        ['restaurants'],
        () => restaurantsServices.getTopRestaurants<T>(),
        { initialData },
    );
