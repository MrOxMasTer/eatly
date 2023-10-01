import { useFormContext } from 'react-hook-form';

import { TFormMenu } from '@/widgets/MenuContents/formMenu.types';
import { Search } from './Search';

export const BarSearch = () => {
    const { setValue } = useFormContext<TFormMenu>();

    return (
        <div>
            <Search />
            <div className="mt-4 flex min-h-[3.1875rem] w-full rounded-[6.3px] border border-solid border-primary text-[0.75rem]">
                <button
                    className="min-h-full w-1/2 text-primary"
                    type="submit"
                    onClick={() => setValue('appearance', 'dishes')}>
                    Food
                </button>
                <button
                    className="min-h-full w-1/2 rounded-e-[4px] bg-primary text-white"
                    type="submit"
                    onClick={() => setValue('appearance', 'restaurants')}>
                    Resturant
                </button>
            </div>
        </div>
    );
};
