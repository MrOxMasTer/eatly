'use client';

import useFormMenu from '@/shared/lib/hooks/useFormMenu';
import useStateForm from '../helpers/useStateForm';
import { FormMenu } from './FormMenu';

import { ListMenu } from './ListMenu';

export const MenuContents = () => {
    const query = useStateForm((state) => state.query);
    const { data, status } = useFormMenu(query);

    return (
        <section>
            <h2 className="visually-hidden">Menu</h2>
            <div className="container">
                <FormMenu />
                <ListMenu
                    appearance={query?.appearance || ''}
                    data={data || []}
                    status={status}
                />
            </div>
        </section>
    );
};
