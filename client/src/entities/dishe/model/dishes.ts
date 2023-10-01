'use client';

import { dishesServices } from '@/shared/api/dishe/dishes';
import { useQuery } from '@tanstack/react-query';

export const useTopDishes = () =>
    useQuery(['dishes'], () => dishesServices.getTopDishes());
