'use client';

import { TDishe } from '@/shared/api';
import { dishesServices } from '@/shared/api/dishe/dishes';
import { useQuery } from '@tanstack/react-query';

export const useTopDishes = (initialData: TDishe[]) =>
    useQuery({
        queryKey: ['dishes'],
        queryFn: async () => {
            const { data } = await dishesServices.getTopDishes();
            return data;
        },
        initialData,
    });
