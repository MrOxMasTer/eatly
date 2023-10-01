import { useQuery } from '@tanstack/react-query';

import { dishesServices } from '@/services/dishes.service';
import { restaurantsServices } from '@/services/restaurants.service';
import { TFormMenu } from '@/types/formMenu.types';

const useFormMenu = (dto: TFormMenu) =>
    useQuery(
        [dto?.appearance, dto],
        () => {
            const { appearance, ...query } = dto;

            if (appearance === 'restaurants') {
                return restaurantsServices.getRestaurantsByForm({
                    ...query,
                });
            }
            if (appearance === 'dishes') {
                return dishesServices.getDishesByForm({
                    ...query,
                });
            }

            return null;
        },
        {
            enabled: JSON.stringify(dto) !== '{}',
            useErrorBoundary: true,
        },
    );

export default useFormMenu;
