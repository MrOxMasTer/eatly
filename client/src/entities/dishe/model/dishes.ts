'use client';

import { dishesServices } from '@/shared/api/dishe/dishes';
import { useQuery } from '@tanstack/react-query';

export const useTopDishes = <T>(initialData: T) =>
    useQuery<T>(['dishes'], () => dishesServices.getTopDishes<T>(), {
        initialData,
    });
