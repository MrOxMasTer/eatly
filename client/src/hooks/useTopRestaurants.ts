import { useQuery } from '@tanstack/react-query';

import { restaurantsServices } from '@/services/restaurants.service';

export const useTopRestaurants = () =>
    useQuery(['restaurants'], () => restaurantsServices.getTopRestaurants());
