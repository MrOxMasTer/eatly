'use client';

import { useFormContext } from 'react-hook-form';
import { Search } from './Search';

export const BarSearch = () => {
    const { setValue } = useFormContext();

    return (
        <div>
            <Search />
            <div className="mt-4 flex min-h-[3.1875rem] w-full rounded-[6.3px] border border-solid border-primary text-[0.75rem]">
                <button
                    onClick={() => setValue('appearance', 'dishes')}
                    className="flex min-h-full w-1/2 items-center justify-center text-primary"
                    type="submit">
                    Food
                </button>
                <button
                    onClick={() => setValue('appearance', 'restaurants')}
                    className="flex min-h-full w-1/2 items-center justify-center rounded-e-[4px] bg-primary text-white"
                    type="submit">
                    Resturant
                </button>
            </div>
        </div>
    );
};
