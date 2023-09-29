import { useQuery } from '@tanstack/react-query';

import { dishesServices } from '@/services/dishes.service';

export const useTopDishes = () =>
    useQuery(['dishes'], () => dishesServices.getTopDishes());
