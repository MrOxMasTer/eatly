import { useQuery } from '@tanstack/react-query';

import { restaurantsServices } from '@/services/restaurants.service';

const useRestaurantById = (restaurantId: number | string) =>
    useQuery(['restaurants', restaurantId], () =>
        restaurantsServices.getRestaurantById(restaurantId),
    );

export default useRestaurantById;
