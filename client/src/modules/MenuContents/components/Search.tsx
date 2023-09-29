import { useFormContext } from 'react-hook-form';

import SvgSearch from '@/assets/svg/SvgSearch';

const Search = () => {
    const { register } = useFormContext();

    return (
        <div className="mt-20 flex min-h-[54px] items-center rounded-[6.3px] bg-[#EDEDED] px-3.5">
            <SvgSearch />
            <input
                {...register('search')}
                className="ml-[1.6875rem] w-full bg-[#EDEDED] text-[0.75rem] text-spunPearl focus:outline-none"
                placeholder="Search"
            />
        </div>
    );
};

export default Search;
