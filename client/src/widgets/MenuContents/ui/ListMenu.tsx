'use client';

import { match } from 'ts-pattern';

import { CardDishe } from '@/entities/dishe/ui';
import { CardRestaurant } from '@/entities/restaurant/ui';
import { TDishe, TRestaurant } from '@/shared/api';
import useFormMenu from '@/shared/lib/hooks/useFormMenu';
import { AxiosResponse } from 'axios';
import { TFormMenu } from '../formMenu.types';

interface IListMenuProps {
    selectedSearchParams: TFormMenu;
    initialData:
        | AxiosResponse<TDishe[]>
        | AxiosResponse<TRestaurant[]>
        | undefined;
}

export const ListMenu = ({
    selectedSearchParams,
    initialData,
}: IListMenuProps) => {
    const { data } = useFormMenu(initialData, selectedSearchParams);
    const { appearance } = selectedSearchParams;

    return (
        <ul
            className={`my-10 grid ${
                appearance === 'dishes'
                    ? 'grid-cols-2 gap-x-5 gap-y-10'
                    : 'gap-y-10'
            }`}>
            {match(appearance)
                .with(
                    'dishes',
                    () =>
                        data?.map((dishe) => (
                            <li key={`${dishe.title}${dishe.id}`}>
                                {/*@ts-ignore */}
                                <CardDishe dishe={dishe} />
                            </li>
                        )),
                )
                .with(
                    'restaurants',
                    () =>
                        data?.map((restaurant) => (
                            <li key={`${restaurant.title}${restaurant.id}`}>
                                <CardRestaurant restaurant={restaurant} />
                            </li>
                        )),
                )
                .otherwise(() => null)}
        </ul>
    );
};
