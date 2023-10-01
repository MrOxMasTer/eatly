'use client';

import { CardDishes, SkeletonDishe } from '@/entities/dishe/ui';
import { useRestaurantById } from '@/entities/restaurant/model';
import { CardRestaurant, SkeletonRestaurant } from '@/entities/restaurant/ui';
import { Skeleton } from '@/shared/ui/Skeleton';
import { match } from 'ts-pattern';

const Restaurants = ({
    params: { id: restaurantId },
}: {
    params: { id: string };
}) => {
    const { data, status } = useRestaurantById(restaurantId);

    return (
        <div className="container pb-28 pt-[3.75rem]">
            {match(status)
                .with('loading', () => (
                    <>
                        <SkeletonRestaurant />
                        <Skeleton className="mt-24 h-8 w-28" />
                        <ul className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10">
                            {[10, 11, 12, 13].map((i) => (
                                <SkeletonDishe key={`skeleton-${i}`} />
                            ))}
                        </ul>
                    </>
                ))
                .with('success', () => {
                    if (data) {
                        const { dishes, ...restaurant } = data;

                        return (
                            <>
                                <CardRestaurant restaurant={restaurant} />
                                <div className="mt-24">
                                    <h3 className="text-[1.5625rem] font-semibold leading-[1.125rem]">
                                        Popular &#128293;
                                    </h3>
                                    <ul className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10">
                                        {dishes?.popular?.map((dishe) => (
                                            <CardDishes
                                                key={dishe.id}
                                                dishe={dishe}
                                            />
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-24 ">
                                    <h3 className="text-[1.5625rem] font-semibold leading-[1.125rem]">
                                        Dishes
                                    </h3>
                                    <ul className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10">
                                        {dishes?.dishes?.map((dishe) => (
                                            <CardDishes
                                                key={dishe.id}
                                                dishe={dishe}
                                            />
                                        ))}
                                    </ul>
                                </div>
                            </>
                        );
                    }

                    return null;
                })
                .otherwise(() => null)}
        </div>
    );
};

export default Restaurants;
