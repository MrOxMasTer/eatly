import { TDishe, TRestaurant } from '@/shared/api';
import { dishesServices } from '@/shared/api/dishe/dishes';
import { restaurantsServices } from '@/shared/api/restaurant/restaurants';
import { TFormMenu } from '@/widgets/MenuContents/formMenu.types';
import { useQuery } from '@tanstack/react-query';

const useFormMenu = (
    initialData: TDishe[] | TRestaurant[] | undefined,
    selectedSearchParams: TFormMenu,
) =>
    useQuery<TDishe[] | TRestaurant[] | undefined>(
        [selectedSearchParams?.appearance, selectedSearchParams],
        () => {
            const { appearance, ...query } = selectedSearchParams;

            if (appearance === 'restaurants') {
                return restaurantsServices.getRestaurantsByForm<TRestaurant[]>({
                    ...query,
                });
            }
            if (appearance === 'dishes') {
                return dishesServices.getDishesByForm<TDishe[]>({
                    ...query,
                });
            }

            return undefined;
        },
        {
            initialData,
            enabled: typeof initialData !== 'undefined',
        },
    );

export default useFormMenu;
