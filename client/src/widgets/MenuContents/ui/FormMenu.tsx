'use client';

import { TFormMenu } from '@/widgets/MenuContents/formMenu.types';
import { useRouter } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';
import { listMostPopular } from '../constants/listMostPopular';
import { arrayRecomended } from '../constants/listRecomended';
import { BarSearch } from './BarSearch';
import { Filter } from './Filter';

// TODO: Сделать валидацию формы

interface IFormMenu {
    selectedSearchParams: {
        [key: string]: string;
    };
}

export const FormMenu = ({ selectedSearchParams }: IFormMenu) => {
    const router = useRouter();
    const methods = useForm<TFormMenu>({
        defaultValues: {
            ...selectedSearchParams,
            recomended: arrayRecomended.indexOf(
                selectedSearchParams.recomended,
            ),
            mostPopular: listMostPopular.indexOf(
                selectedSearchParams.mostPopular,
            ),
            price: Number(selectedSearchParams.price),
        },
    });

    const { handleSubmit } = methods;

    const onSubmit = (data: TFormMenu) => {
        const { appearance, category, mostPopular, price, recomended, search } =
            data;

        const recIndex = recomended || 0;
        const rec = arrayRecomended[recIndex];

        const mostPopIndex = mostPopular || 0;
        const mostPop = listMostPopular[mostPopIndex];

        router.push(
            `?${new URLSearchParams({
                ...(appearance ? { appearance } : {}),
                ...(category ? { category } : {}),
                ...(recomended ? { recomended: rec } : {}),
                ...(mostPopular ? { mostPopular: mostPop } : {}),
                ...(price ? { price: `${price}` } : {}),
                ...(search ? { search } : {}),
            })}`,
        );
    };

    return (
        <div>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Filter />
                    <BarSearch />
                </form>
            </FormProvider>
        </div>
    );
};

// const methods = useForm<TFormMenu>({
//     defaultValues: {
//         price: 0,
//         search: '',
//         appearance: '',
//         recomended: '',
//         mostPopular: '',
//     },
// });
