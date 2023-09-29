'use client';

import useStateForm from '../helpers/useStateForm';

import FormMenu from './FormMenu';
import ListMenu from './ListMenu';

import useFormMenu from '@/hooks/useFormMenu';

const MenuContents = () => {
    const query = useStateForm((state) => state.query);
    const { data, status, isError, error } = useFormMenu(query);

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

export default MenuContents;
