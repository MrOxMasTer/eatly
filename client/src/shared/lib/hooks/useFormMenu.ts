import { TDishe, TRestaurant } from '@/shared/api';
import { dishesServices } from '@/shared/api/dishe/dishes';
import { restaurantsServices } from '@/shared/api/restaurant/restaurants';
import { TFormMenu } from '@/widgets/MenuContents/formMenu.types';
import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

const useFormMenu = (
    initialData:
        | AxiosResponse<TDishe[]>
        | AxiosResponse<TRestaurant[]>
        | undefined,
    selectedSearchParams: TFormMenu,
) =>
    useQuery({
        queryKey: [selectedSearchParams?.appearance, selectedSearchParams],
        queryFn: async () => {
            const { appearance, ...query } = selectedSearchParams;

            if (appearance === 'restaurants') {
                const restaurants =
                    await restaurantsServices.getRestaurantsByForm({
                        ...query,
                    });

                return restaurants;
            }
            if (appearance === 'dishes') {
                const dishes = await dishesServices.getDishesByForm({
                    ...query,
                });

                return dishes;
            }

            return undefined;
        },
        select: (res) => {
            if (res?.data) {
                const { data } = res;

                return data;
            }

            return undefined;
        },
        initialData,
        enabled: typeof initialData !== 'undefined',
    });

export default useFormMenu;
