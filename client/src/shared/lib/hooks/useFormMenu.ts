import { dishesServices } from '@/shared/api/dishe/dishes';
import { restaurantsServices } from '@/shared/api/restaurant/restaurants';
import { TFormMenu } from '@/widgets/MenuContents/formMenu.types';
import { useQuery } from '@tanstack/react-query';

const useFormMenu = (initialData: any, selectedSearchParams: TFormMenu) =>
    useQuery(
        [selectedSearchParams?.appearance, selectedSearchParams],
        () => {
            const { appearance, ...query } = selectedSearchParams;

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

            return undefined;
        },
        {
            initialData,
            // enabled: JSON.stringify(dto) !== '{}',
            // useErrorBoundary: true,
        },
    );

export default useFormMenu;
