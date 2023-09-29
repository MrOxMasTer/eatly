'use client';

import { FormProvider, useForm } from 'react-hook-form';

import useStateForm from '../helpers/useStateForm';

import BarSearch from './BarSearch';
import Filter from './Filter';

import { TFormMenu } from '@/types/formMenu.types';

// TODO: Сделать валидацию формы

const FormMenu = () => {
    const setQuery = useStateForm((state) => state.setQuery);
    const methods = useForm<TFormMenu>({
        defaultValues: {
            price: 0,
            search: '',
            appearance: '',
            recomended: '',
            mostPopular: '',
        },
    });

    const { handleSubmit } = methods;

    const onSubmit = (data: TFormMenu) => setQuery(data);

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Filter />
                <BarSearch />
            </form>
        </FormProvider>
    );
};

export default FormMenu;
