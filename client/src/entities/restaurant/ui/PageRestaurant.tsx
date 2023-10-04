'use client';

import { CardDishe } from '@/entities/dishe/ui';
import { TRestaurantById } from '@/shared/api';
import { useRestaurantById } from '../model';
import { CardRestaurant } from './CardRestaurant';

export const PageRestaurant = ({
    initialData,
    id,
}: {
    initialData: TRestaurantById;
    id: string;
}) => {
    const { data } = useRestaurantById<TRestaurantById>(initialData, id);

    if (data) {
        const { dishes, ...restaurant } = data;

        return (
            <div className="container pb-28 pt-[3.75rem]">
                <CardRestaurant restaurant={restaurant} />

                {dishes?.popular?.length !== 0 && (
                    <div className="mt-24">
                        <h3 className="text-[1.5625rem] font-semibold leading-[1.125rem]">
                            Popular &#128293;
                        </h3>
                        <ul className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10">
                            {dishes?.popular?.map((dishe) => (
                                <CardDishe key={dishe.id} dishe={dishe} />
                            ))}
                        </ul>
                    </div>
                )}

                {dishes?.dishes?.length !== 0 && (
                    <div className="mt-24 ">
                        <h3 className="text-[1.5625rem] font-semibold leading-[1.125rem]">
                            Dishes
                        </h3>
                        <ul className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10">
                            {dishes?.dishes?.map((dishe) => (
                                <CardDishe key={dishe.id} dishe={dishe} />
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        );
    }
};
