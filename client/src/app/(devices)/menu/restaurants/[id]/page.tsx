import { PageRestaurant } from '@/entities/restaurant/ui/PageRestaurant';
import { TRestaurantById } from '@/shared/api';
import { restaurantsServices } from '@/shared/api/restaurant/restaurants';

export default async function RestaurantPage({
    params: { id },
}: {
    params: { id: string };
}) {
    try {
        const initialData =
            await restaurantsServices.getRestaurantById<TRestaurantById>(id);

        return <PageRestaurant initialData={initialData} id={id} />;
    } catch (e) {
        throw new Error(`Не удалось получить запрос ${e}`);
    }
}
