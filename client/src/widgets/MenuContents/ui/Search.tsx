// 'use client';

import SvgSearch from '@/shared/assets/svg/SvgSearch';
import { redirect } from 'next/navigation';
import { ChangeEvent } from 'react';

export const Search = () => {
    // const { register } = useFormContext();

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        redirect(`?search=${e.target.value}`);
    };

    return (
        <div className="mt-20 flex min-h-[54px] items-center rounded-[6.3px] bg-[#EDEDED] px-3.5">
            <SvgSearch />
            <input
                // {...register('search')}
                className="ml-[1.6875rem] w-full bg-[#EDEDED] text-[0.75rem] text-spunPearl focus:outline-none"
                placeholder="Search"
                onChange={onChange}
            />
        </div>
    );
};
