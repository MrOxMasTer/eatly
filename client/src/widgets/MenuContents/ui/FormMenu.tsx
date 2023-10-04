'use client';

import { FormProvider, useForm } from 'react-hook-form';

import { TFormMenu } from '@/widgets/MenuContents/formMenu.types';
import { BarSearch } from './BarSearch';

// TODO: Сделать валидацию формы

interface IFormMenu {
    selectedSearchParams: TFormMenu;
}

export const FormMenu = ({ selectedSearchParams }: IFormMenu) => {
    const methods = useForm<TFormMenu>({
        defaultValues: selectedSearchParams,
    });

    const { handleSubmit } = methods;

    const onSubmit = (data: TFormMenu) => {
        // setQuery(data)
        console.log(data);
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* <Filter /> */}
                <BarSearch />
            </form>
        </FormProvider>
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
