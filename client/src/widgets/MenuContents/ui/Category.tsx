import Image from 'next/image';

import { useFormContext } from 'react-hook-form';
import { TCategory } from '../constants/listCategory';

type TCategoryProps = {
    category: TCategory;
};

export const Category = ({ category }: TCategoryProps) => {
    const { register } = useFormContext();

    return (
        <li className={category.className}>
            <label
                className="flex min-h-full flex-col"
                htmlFor={category.value}>
                <div className="mt-[8px] flex h-[35px] items-center justify-center">
                    <Image
                        alt={category.value}
                        className="h-auto w-auto"
                        height={35}
                        src={category.src}
                        width={52}
                    />
                </div>
                <span className="mb-[5px] mt-auto block text-center">
                    {category.value}
                </span>
            </label>
            <input
                {...register('category')}
                className="hidden"
                id={category.value}
                name="category"
                type="radio"
                value={category.value}
            />
        </li>
    );
};
