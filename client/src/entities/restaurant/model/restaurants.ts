'use client';

import { restaurantsServices } from '@/shared/api/restaurant/restaurants';

import { useQuery } from '@tanstack/react-query';

export const useRestaurantById = (restaurantId: number | string) =>
    useQuery(['restaurants', restaurantId], () =>
        restaurantsServices.getRestaurantById(restaurantId),
    );

export const useTopRestaurants = () =>
    useQuery(['restaurants'], () => restaurantsServices.getTopRestaurants());
